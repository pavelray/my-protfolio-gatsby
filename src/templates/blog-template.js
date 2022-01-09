import { Box, Heading, Text } from "@chakra-ui/react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import React from "react"
import Layout from "../components/layout"
import { htmlClass , linkDiv} from "../styles/blog-template.module.css"

const BlogTemplate = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, date, link, linkWebsite } = data.markdownRemark.frontmatter
  const imgData = data.markdownRemark.frontmatter.banner.childImageSharp.fluid
  return (
    <Layout>
      <Heading>{title}</Heading>
      <Text fontSize='md' mt="5" mb="8" fontWeight="bold">{date}</Text>
        <Img fluid={imgData} alt={title} />
        <Box dangerouslySetInnerHTML={{ __html: html }} className={htmlClass} />
      <Text className={linkDiv}>
        Read the full article here - 
        <a href={link} alt={title}>{linkWebsite}</a>
      </Text>
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
        date
        link
        linkWebsite
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
`
