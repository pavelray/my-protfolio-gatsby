import React from "react"
import { Link } from "gatsby"

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
  Avatar,
  Heading,
} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { AiOutlineMenu } from "react-icons/ai"

export default function App() {
  const bg = useColorModeValue("white", "gray.800")
  const mobileNav = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
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
            <HStack>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Heading as="h4" size="lg">
                <Link to="/">pavel.dev</Link>
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
              <Button variant="ghost">
                <Link to="/">Home</Link>
              </Button>
              <Button variant="ghost">
                <Link to="/project">Project</Link>
              </Button>
              <Button variant="ghost">
                <Link to="/blog">Blog</Link>
              </Button>
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
                <Button variant="ghost">
                  <Link to="/">Home</Link>
                </Button>
                <Button w="full" variant="ghost">
                  <Link to="/project">Project</Link>
                </Button>
                <Button w="full" variant="ghost">
                  <Link to="/blog">Blog</Link>
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  )
}
