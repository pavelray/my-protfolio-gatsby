import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  useColorMode,
  Heading,
} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { AiOutlineMenu } from "react-icons/ai"

export default function App() {
  const bg = useColorModeValue("white", "gray.800")
  const mobileNav = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          menu {
            title
            url
          }
          author
        }
      }
      imageSharp(id: {eq: "9800edd6-f41f-5727-8932-ca0d15614fb1"}) {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)

  const { menu, title, author } = data.site.siteMetadata
  const imageFuild = data.imageSharp.fluid
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <Img fluid={imageFuild} style={{width:'50px', height: '50px', borderRadius:'50%', marginRight:'10px'}} alt={author} />
            <HStack>
              <Heading as="h4" size="lg">
                <Link to="/">{title}</Link>
              </Heading>
            </HStack>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              {menu.map((link, index) => (
                <Link to={link.url} key={index}>
                  <Button variant="ghost" >
                    {link.title}
                  </Button>
                </Link>
              ))}
            </HStack>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                {menu.map((link, index) => (
                  <Button w="full" variant="ghost" key={index}>
                    <Link to={link.url}>{link.title}</Link>
                  </Button>
                ))}
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  )
}
