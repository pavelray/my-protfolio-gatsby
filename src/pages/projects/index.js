import { GrGithub, GrShare } from "react-icons/gr"
import {
  Badge,
  Box,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Spacer,
  Stack,
  Text,

} from "@chakra-ui/react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../../components/layout"

const Project = ({ data }) => {
  const projectData = data.allProjectsJson.nodes

  return (
    <Layout>
      <Heading textAlign="center" mb="20" textTransform="capitalize">Projects I've worked on</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing='40px'>
        {projectData.map((project, index) => {
          const languages = project.languages.split(",")

          return (
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              key={index}
            >
              <Img
                fluid={project.image.childImageSharp.fluid}
                style={{ width: "100%", maxHeight:'200px' }}
              />

              <Box p="4">
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                  {project.title}
                </Box>
                <Box mt="3" fontWeight="light" as="p" lineHeight="tight">
                  <Text noOfLines={3}>
                    {project.description}
                  </Text> 
                </Box>
                <Box mt="6" fontWeight="semibold" as="p" lineHeight="tight">
                  <Stack direction="row">
                    {languages.map((l, index) => (
                      <Badge key={`lan_${index}`}>{l.toUpperCase()}</Badge>
                    ))}
                  </Stack>
                </Box>
                <Box mt="4" as="p">
                  <Flex>
                    <Link to={project.link}>
                      <IconButton
                        variant="ghost"
                        colorScheme="teal"
                        aria-label="View Code"
                        fontSize="20px"
                        icon={<GrGithub />}
                      />
                    </Link>
                    <Spacer />
                    <Link to={project.url}>
                      <IconButton
                        variant="ghost"
                        colorScheme="teal"
                        aria-label="View Live"
                        fontSize="20px"
                        icon={<GrShare />}
                      />
                    </Link>
                  </Flex>
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
  query ProjectQuery {
    allProjectsJson {
      nodes {
        slug
        title
        url
        id
        description
        languages
        link
        image {
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

export default Project
