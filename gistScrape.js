const fs = require("fs")
const request = require("request")
const mkdirp = require("mkdirp")
const ProgressBar = require("progress")
const { get } = require("lodash")
// const download = require("./utils/download-file")

// const username = process.argv[2]
const username = 'QuintonJason'

if (!username) {
  console.log(
    `
You didn't supply an Instagram username!
Run this command like:

node gistScrape.js GITHUB_USERNAME
              `
  )
  process.exit()
}

// Convert timestamp to ISO 8601.
const toISO8601 = timestamp => new Date(timestamp * 1000).toJSON()

// Create the progress bar
const bar = new ProgressBar(
  `Downloading Github Gists [:bar] :current/:total :elapsed secs :percent`,
  {
    total: 0,
    width: 30,
  }
)

// Create the images directory
mkdirp.sync(`./data/images`)

let gists = []

// Write json
const saveJSON = _ =>
  fs.writeFileSync(`./data/gists.json`, JSON.stringify(gists, "", 2))

const getGists = maxId => {
  let options = {
    url: `https://api.github.com/users/${username}/gists`,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8',
      'User-Agent': 'Quinton Jason Portfolio',
    }
  }
  let url = `https://api.github.com/users/${username}/gists`

  request(options, (err, res, body) => {
    if (err) console.log(`error: ${err}`)
      console.log(`what the : ${err}`)
    body = JSON.parse(body)
    // Parse gists
    let lastId
    body
      .map(item => {
        // Parse item to a simple object
        return {
          id: get(item, `id`),
          description: get(item, `description`),
          username: get(item, `owner.login`),
          avatar: get(item, `owner.avatar_url`),
          time: toISO8601(get(item, `created_at`)),
        }
      })
      .forEach(item => {
        if (gists.length >= 100) return
        // Add item to gists
        gists.push(item)
        // Save lastId for next request
        lastId = item.id
      })

    if (gists.length < 100 && get(body, `more_available`)) getGists(lastId)
    else saveJSON()
  })
}

getGists()