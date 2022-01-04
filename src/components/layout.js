import { Box, ChakraProvider, Flex, VStack } from "@chakra-ui/react"
import React from "react"
import Nav from "./navbar"
import { Container } from "@chakra-ui/react"

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
      <Box p={2} style={{ height: "82px" }}>
        <VStack>
          <Flex>Pavel Ray @Copyright 2022</Flex>
          <Flex>Powered by Gatsby</Flex>
        </VStack>
      </Box>
    </ChakraProvider>
  )
}

export default Layout
