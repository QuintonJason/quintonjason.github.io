const path = require(`path`);
const fs = require(`fs`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  let slug;

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
    slug = `/snippets/${node.id}`;
    // Add slug as a field on the node.
    createNodeField({ node, name: "slug", value: slug });
  } else if (node.internal.type === "IgPostsJson") {
    slug = `/calligraphy/${node.id}`;
    // Add slug as a field on the node.
    createNodeField({ node, name: "slug", value: slug });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
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
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug
      }
    });
  });

  result.data.allGistsJson.edges.forEach(edge => {
    createPage({
      path: `${edge.node.fields.slug}`,
      component: path.resolve(`./src/templates/gist-page.js`),
      context: {
        slug: edge.node.fields.slug
      }
    });
  });

  result.data.allIgPostsJson.edges.forEach(edge => {
    createPage({
      path: `${edge.node.fields.slug}`,
      component: path.resolve(`./src/templates/instagram-page.js`),
      context: {
        slug: edge.node.fields.slug
      }
    });
  });
};

// Copy redirects on build
exports.onPostBuild = function() {
  fs.cpSync(`./data/images`, `./static/images`, { recursive: true });
};

// exports.modifyWebpackConfig = ({ config, stage }) => {
//   config._loaders.sass.config.loaders = ["style", "css", "sass?sourceMap"];
//   return config;
// };
