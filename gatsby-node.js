const path = require(`path`)
const _ = require(`lodash`)
const slash = require(`slash`)
const { createFilePath } = require(`gatsby-source-filesystem`)

require('es6-promise').polyfill();
require('isomorphic-fetch');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  let slug;

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    // Add slug as a field on the node.
    createNodeField({ node, name: 'slug', value: slug });
  }
}

//
// exports.sourceNodes = async ({ boundActionCreators }) => {
//   const { createNode } = boundActionCreators;
//   // Create nodes here, generally by downloading data
//   // from a remote API.
//   const data = await fetch('https://api.github.com/users/QuintonJason/gists')
//   .then(function(response) {
//     if (response.status >= 400) {
//       throw new Error("Bad response from server");
//     }
//     return response.json();
//   })
//   .then(function(gists) {
//     //data.forEach(datum => createNode(processDatum(datum)));
//     console.log('gists', gists);
//     gists.forEach(gist => createNode({
//       id: gist.id,
//       parent: null,
//       children: [],
//       internal: {}
//     }));
//   });

//   // We're done, return.
//   // console.log('data', data.data);
//   return;
// };

//creating gist pages
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allGistsJson(limit: 100) {
              edges {
                node {
                  id
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(new Error(result.errors))
        }
        console.log('result', result);
        // Create gist pages.
        const gistTemplate = path.resolve(`./src/templates/gist-page.js`)
        _.each(result.data.allGistsJson.edges, edge => {
          createPage({
            path: `/${slug(edge.node.id)}/`,
            component: slash(gistTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })

        return
      })
    )
  })
}

//creating blog pages
exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
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
      }
    `
).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}