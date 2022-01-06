import { DiGithubBadge } from "react-icons/all"
import {
  Badge,
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Spacer,
  Stack,
} from "@chakra-ui/react"
import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/layout"

const Project = ({ data }) => {
  const projectData = data.allProjectsJson.nodes

  return (
    <Layout>
      <div>This is my project preview page</div>
      <Stack direction={["column", "row"]} spacing="24px">
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
              <Image src="https://bit.ly/2Z4KKcF" alt={project.title} />
              <Box p="4">
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                  {project.title}
                </Box>
                <Box mt="3" fontWeight="light" as="p" lineHeight="tight">
                  {project.description}
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
                    <IconButton
                      variant="ghost"
                      colorScheme="teal"
                      aria-label="View Code"
                      fontSize="20px"
                      icon={<DiGithubBadge />}
                    />
                    <Spacer />
                    <Button size="sm" variant="ghost" colorScheme="teal">
                      View Live
                    </Button>
                  </Flex>
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
      }
    }
  }
`

export default Project
