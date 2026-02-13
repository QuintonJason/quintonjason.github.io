const fs = require("fs");
const request = require("request");
const ProgressBar = require("progress");
const mkdirp = require("mkdirp");
const { get } = require("lodash");
const download = require("./utils/download-file");

const username = process.argv[2];
const maxPosts = Number(process.env.IG_MAX_POSTS || 100);
const captionFilterArg = process.argv[3];
const captionFilterEnv = process.env.IG_CAPTION_FILTER;
const captionFilter =
  captionFilterArg !== undefined
    ? captionFilterArg
    : captionFilterEnv !== undefined
    ? captionFilterEnv
    : "leftycalligraphy";

if (!username) {
  console.log(`
You didn't supply an Instagram username!
Run this command like:

node instagramScrape.js INSTAGRAM_USERNAME
or
node instragramScrape.js INSTAGRAM_USERNAME

Optional:
node instagramScrape.js INSTAGRAM_USERNAME ""
or set IG_CAPTION_FILTER="*"
  `);
  process.exit(1);
}

const PROFILE_URL = `https://i.instagram.com/api/v1/users/web_profile_info/?username=${encodeURIComponent(
  username
)}`;

const REQUEST_HEADERS = {
  "x-ig-app-id": "936619743392459",
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
    "(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  accept: "application/json"
};

const getCaption = edge =>
  get(edge, "node.edge_media_to_caption.edges[0].node.text", "");

const toIgPost = edge => {
  const id = String(get(edge, "node.id", ""));
  const likesCount =
    get(edge, "node.edge_liked_by.count", null) ||
    get(edge, "node.edge_media_preview_like.count", 0);

  return {
    id,
    caption: getCaption(edge),
    date: get(edge, "node.taken_at_timestamp", 0),
    likes: {
      count: likesCount
    },
    image: get(edge, "node.display_url", ""),
    media: `images/${id}.jpg`
  };
};

const matchesCaptionFilter = post => {
  if (captionFilter === "" || captionFilter === "*") return true;
  return post.caption.toLowerCase().includes(captionFilter.toLowerCase());
};

const fetchProfilePosts = async () => {
  const payload = await new Promise((resolve, reject) => {
    request(
      {
        url: PROFILE_URL,
        method: "GET",
        headers: REQUEST_HEADERS,
        json: true
      },
      (error, response, body) => {
        if (error) return reject(error);
        if (response.statusCode !== 200) {
          return reject(
            new Error(
              `Instagram request failed with status ${response.statusCode}`
            )
          );
        }
        resolve(body);
      }
    );
  });

  const edges = get(payload, "data.user.edge_owner_to_timeline_media.edges", []);

  if (!Array.isArray(edges)) {
    throw new Error("Unexpected Instagram response shape: missing media edges");
  }

  return edges.map(toIgPost).filter(matchesCaptionFilter).slice(0, maxPosts);
};

const downloadPostImage = (url, filePath) =>
  new Promise(resolve => {
    download(url, filePath, err => {
      if (err) {
        console.log(`Image download failed for ${filePath}: ${err}`);
      }
      resolve();
    });
  });

const saveJSON = posts =>
  fs.writeFileSync("./data/igPosts.json", JSON.stringify(posts, null, 2));

const run = async () => {
  mkdirp.sync("./data/images");
  const igPosts = await fetchProfilePosts();

  if (igPosts.length === 0) {
    console.log(
      `No posts found for @${username} with filter "${captionFilter}". ` +
        `Set IG_CAPTION_FILTER="*" to include all posts.`
    );
    saveJSON([]);
    return;
  }

  const bar = new ProgressBar(
    "Downloading Instagram Posts [:bar] :current/:total :elapsed secs :percent",
    {
      total: igPosts.length,
      width: 30
    }
  );

  for (const post of igPosts) {
    await downloadPostImage(post.image, `./data/images/${post.id}.jpg`);
    bar.tick();
  }

  saveJSON(igPosts);
  console.log(`Saved ${igPosts.length} post(s) to ./data/igPosts.json`);
};

run().catch(error => {
  console.log(`Instagram scrape failed: ${error.message}`);
  process.exit(1);
});
