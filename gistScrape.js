const fs = require("fs");
const request = require("request");
const ProgressBar = require("progress");
const { get } = require("lodash");

const username = process.argv[2];

if (!username) {
  console.log(
    `
You didn't supply a Github username!
Run this command like:

node gistScrape.js GITHUB_USERNAME
              `
  );
  process.exit();
}

// Configure date options
const dateOptions = {
  year: "numeric",
  month: "long",
  day: "numeric"
};

// Create the progress bar
const bar = new ProgressBar(
  `Downloading Github Gists [:bar] :current/:total :elapsed secs :percent`,
  {
    total: 0,
    width: 30
  }
);

let gists = [];

// Write json
const saveJSON = _ =>
  fs.writeFileSync(`./data/gists.json`, JSON.stringify(gists, "", 2));

const getGists = maxId => {
  let options = {
    url: `https://api.github.com/users/${username}/gists`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Accept-Charset": "utf-8",
      "User-Agent": "Quinton Jason Portfolio"
    }
  };
  let url = `https://api.github.com/users/${username}/gists`;

  request(options, (err, res, body) => {
    if (err) console.log(`error: ${err}`);
    body = JSON.parse(body);
    // Parse gists
    let lastId;
    body
      .map(item => {
        // Parse item to a simple object
        let testdate = new Date(item.created_at);
        return {
          id: get(item, `id`),
          description: get(item, `description`),
          username: get(item, `owner.login`),
          avatar: get(item, `owner.avatar_url`),
          time: new Date(get(item, `created_at`)).toLocaleDateString(
            "en-US",
            dateOptions
          )
        };
      })
      .forEach(item => {
        if (gists.length >= 100) return;

        bar.total++;
        bar.tick();
        // Add item to gists
        gists.push(item);
        // Save lastId for next request
        lastId = item.id;
      });

    if (gists.length < 100 && get(body, `more_available`)) getGists(lastId);
    else saveJSON();
  });
};

getGists();
