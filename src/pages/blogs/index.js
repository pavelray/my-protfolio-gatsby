import { Box, Heading, SimpleGrid } from "@chakra-ui/react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import React from "react"
import Layout from "../../components/layout"

const Blog = ({ data }) => {
  const blogData = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Heading textAlign="center" mb="20" textTransform="capitalize">My Blogs</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing='40px'>
      {blogData.map((blog, index) => {
        const imageFuid=blog.frontmatter?.banner?.childImageSharp?.fluid;

        return (
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            key={index}
          >
            <Img fluid={imageFuid} alt={blog.frontmatter.title} />
            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                <Link to={blog.frontmatter.slug}>
                  {blog.frontmatter.title}
                </Link>
              </Box>

              <Box>
                <Box as="span" color="gray.600" fontSize="sm">
                  {blog.frontmatter.type}
                </Box>
              </Box>
            </Box>
          </Box>
        )
      })}
      </SimpleGrid>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark{
      nodes {
        frontmatter {
          link
          slug
          title
          path
          type
          banner {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default Blog
