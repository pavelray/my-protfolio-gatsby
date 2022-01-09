import { Box, Center, Text, VStack } from "@chakra-ui/react"
import React from "react"
import Layout from "../components/layout"

export default function NotFoundPage() {
  return (
    <Layout>
      <Center>
        <Box maxW="3xl">
          <VStack>
            <Text fontSize="4xl" textAlign="center">
              The page your are looing is not valid
            </Text>
          </VStack>
        </Box>
      </Center>
    </Layout>
  )
}
