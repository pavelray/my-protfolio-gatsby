import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa"
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Center minHeight="90vh">
        <Box maxW="3xl">
          <VStack>
            <Heading
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="6xl"
            >
              Hi, I'm Pavel Ray
            </Heading>
            <Text fontSize="4xl" textAlign="center">
              I'm a Developer, who likes Designing, Writing and Building Open
              Source stuffs
            </Text>
          </VStack>
          <HStack justifyContent="center" mt="10">
            <Link to="https://www.linkedin.com/in/pavelray/">
              <Button
                leftIcon={<FaLinkedinIn />}
                colorScheme="blue"
                variant="solid"
              >
                LinkedIn
              </Button>
            </Link>
            <Link to="https://github.com/pavelray">
              <Button
                rightIcon={<FaGithubAlt />}
                colorScheme="teal"
                variant="outline"
              >
                Github
              </Button>
            </Link>
          </HStack>
        </Box>
      </Center>
      <Box p="2">
        <Heading fontSize="4xl">What I'm passionate about </Heading>
        <Text fontSize="2xl" mt="8">
          I'm a big fan of React.js and have around 3+ years experience with it.
          I started my career as a .Net full stack developer and later moved
          into front-end development. I’m currently learning node js for better
          graps on server side. I'm eager to learn new frameworks, libraries and
          languages like React Native, Vue.Js.
        </Text>
      </Box>
      <Box p="2" mt="8">
        <Heading fontSize="4xl"> Hobbies </Heading>
        <Text fontSize="2xl" mt="8">
          If I’m not coding I like to spend my time with watching movies &
          traveling. I like landscape photos and also particularly enjoy editing
          the photos at the computer. I also enjoy writing travel blogs. All my
          travel blogs you will find{" "}
          <Link to="/blogs">
            <span style={{ fontWeight: "bold" }}>here</span>
          </Link>
          .
        </Text>
      </Box>
    </Layout>
  )
}
