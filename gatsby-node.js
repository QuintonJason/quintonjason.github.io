const Shell = require("child_process");
const path = require(`path`);
const fs = require(`fs-extra`);
const _ = require(`lodash`);
const slash = require(`slash`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  // console.log('node: ', node.internal.type);

  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }
    // Add slug as a field on the node.
    createNodeField({ node, name: "slug", value: slug });
  } else if (node.internal.type === "GistsJson") {
    const gistNode = getNode(node);
    slug = `/snippets/${node.id}`;
    // Add slug as a field on the node.
    createNodeField({ node, name: "slug", value: slug });
  } else if (node.internal.type === "IgPostsJson") {
    const igPostNode = getNode(node);
    slug = `/calligraphy/${node.id}`;
    // Add slug as a field on the node.
    createNodeField({ node, name: "slug", value: slug });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    // Query for markdown and json nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
            allGistsJson(limit: 100) {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
            allIgPostsJson {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
              slug: node.fields.slug
            }
          });
        });
        // Create gist pages.
        result.data.allGistsJson.edges.forEach(edge => {
          createPage({
            path: `${edge.node.fields.slug}`,
            component: path.resolve(`./src/templates/gist-page.js`),
            context: {
              slug: edge.node.fields.slug
            }
          });
        });
        // Create igPosts pages.
        result.data.allIgPostsJson.edges.forEach(edge => {
          createPage({
            path: `${edge.node.fields.slug}`,
            component: path.resolve(`./src/templates/instagram-page.js`),
            context: {
              slug: edge.node.fields.slug
            }
          });
        });
        return;
      })
    );
  });
};

// Copy redirects on build
exports.onPostBuild = function() {
  fs.copySync(`./data/images`, `./static/images`);
};

// exports.modifyWebpackConfig = ({ config, stage }) => {
//   config._loaders.sass.config.loaders = ["style", "css", "sass?sourceMap"];
//   return config;
// };
