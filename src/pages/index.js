import { Heading } from "@chakra-ui/react"
import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Heading>Hi,</Heading>
      <Heading as="h3" size="lg">
        I'm Pavel Ray
      </Heading>
    </Layout>
  )
}
