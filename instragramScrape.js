const fs = require("fs")
const request = require("request")
const ProgressBar = require("progress")
const { get } = require("lodash")

const username = process.argv[2]

if (!username) {
  console.log(
    `
You didn't supply a Instagram username!
Run this command like:

node instagramScrape.js INSTAGRAM_USERNAME
              `
  )
  process.exit()
}

// Convert timestamp to ISO 8601.
const toISO8601 = timestamp => new Date(timestamp * 1000).toJSON()

// Create the progress bar
const bar = new ProgressBar(
  `Downloading Instagram Posts [:bar] :current/:total :elapsed secs :percent`,
  {
    total: 0,
    width: 30,
  }
)

let igPosts = []

// Write json
const saveJSON = _ =>
  fs.writeFileSync(`./data/igPosts.json`, JSON.stringify(igPosts, "", 2));

const getIGPosts = () => {
  request(`https://www.instagram.com/${username}/?__a=1`, function (error, response, body) {
    if (error) console.log(`erroror: ${error}`)
    body = JSON.parse(body)
    const nodes = body.user.media.nodes;
    const filteredNodes = nodes.filter(item => item.caption.includes('leftycalligraphy'));
    filteredNodes.map(item => {
      return {
        id: get(item, `id`),
        caption: get(item, `caption`),
        date: get(item, `date`),
        likes: get(item, `likes`),
        image: get(item, `display_src`),
      }
    })
    .forEach(item => {
      if (igPosts.length >= 100) return

      bar.total++
      bar.tick();
      // Add item to IGposts
      igPosts.push(item)
      // Save lastId for next request
      lastId = item.id
    })
    if (igPosts.length < 100 && get(body, `more_available`)) getIGPosts(lastId)
    else saveJSON()
  })

}

getIGPosts();