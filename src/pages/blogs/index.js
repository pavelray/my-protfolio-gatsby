import { Box, Stack, Image } from "@chakra-ui/react"
import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"

const Blog = ({ data }) => {
  const blogData = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div>This is my blog preview page</div>
      <Stack direction={['column', 'row']} spacing='24px'>
      {blogData.map((blog, index) => {
        return (
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            key={index}
          >
            <Image src="https://bit.ly/2Z4KKcF" alt={blog.frontmatter.title} />
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
      </Stack>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(filter: { frontmatter: { path: { eq: "/blogs" } } }) {
      nodes {
        frontmatter {
          link
          slug
          title
          path
          type
        }
      }
    }
  }
`

export default Blog
