exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            path
          }
          id
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: `${node.frontmatter.path}/${node.frontmatter.slug}`,
      component: require.resolve(`./src/templates/blog-template.js`),
      context: { id: node.id },
    })
  })
}
