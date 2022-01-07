import { Box, Heading } from "@chakra-ui/react"
import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const BlogTemplate = ({ data }) => {
  const { html } = data.markdownRemark
  const { title} = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Heading>{title}</Heading>
      <Box dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query BlogDetailsQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
