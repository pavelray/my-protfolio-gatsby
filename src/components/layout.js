import { Box, ChakraProvider, Flex, HStack, Text, VStack } from "@chakra-ui/react"
import React from "react"
import Nav from "./navbar"
import { Container } from "@chakra-ui/react"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <ChakraProvider>
      <Nav />
      <Container
        style={{ marginTop: "2rem", minHeight: "80vh" }}
        maxW="container.xl"
      >
        {children}
      </Container>
      <Box p={2} style={{ height: "82px" }} mt="10">
        <VStack>
          <Flex>
            <Text>Copyright @ 2022 Pavel Ray</Text>
          </Flex>
          <HStack>
            <Text>Powered by</Text><Text fontWeight="bold"><Link to="https://www.gatsbyjs.com/">Gatsby</Link></Text>
          </HStack>
        </VStack>
      </Box>
    </ChakraProvider>
  )
}

export default Layout
