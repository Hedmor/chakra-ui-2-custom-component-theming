"use client"

import { Providers } from "./providers"
import { Box, Container, Heading, VStack, Text, useColorMode, Button, Flex } from "@chakra-ui/react"
import { Autocomplete } from "@/components/Autocomplete"
import { useState } from "react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "strawberry", label: "Strawberry" },
  { value: "blueberry", label: "Blueberry" },
  { value: "raspberry", label: "Raspberry" },
  { value: "blackberry", label: "Blackberry" },
  { value: "grape", label: "Grape" },
  { value: "watermelon", label: "Watermelon" },
  { value: "pineapple", label: "Pineapple" },
]

export default function ClientPage() {
  const [value, setValue] = useState("")
  const [selectedValue, setSelectedValue] = useState("")
  const { colorMode, toggleColorMode } = useColorMode()

  const handleChange = (newValue: string) => {
    setValue(newValue)
    setSelectedValue(newValue)
  }

  return (
    <Providers>
      <Container maxW="container.md" py={10}>
        <Flex justifyContent="space-between" alignItems="center" mb={6}>
          <Heading as="h1" size="xl">
            Chakra UI Autocomplete
          </Heading>
        </Flex>

        <Text mb={6}>A modern autocomplete component built with Chakra UI v2 and Next.js 15</Text>

        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" size="md" mb={3}>
              Default Autocomplete
            </Heading>
            <Autocomplete options={options} value={value} onChange={handleChange} placeholder="Search for a fruit..." />
            {selectedValue && (
              <Text mt={2} fontWeight="medium">
                Selected: {selectedValue}
              </Text>
            )}
          </Box>

          <Box>
            <Heading as="h2" size="md" mb={3}>
              Filled Variant
            </Heading>
            <Autocomplete options={options} variant="filled" placeholder="Search for a fruit..." />
          </Box>

          <Box>
            <Heading as="h2" size="md" mb={3}>
              Large Size
            </Heading>
            <Autocomplete options={options} size="lg" placeholder="Search for a fruit..." />
          </Box>

          <Box>
            <Heading as="h2" size="md" mb={3}>
              Disabled State
            </Heading>
            <Autocomplete options={options} isDisabled={true} placeholder="Search for a fruit..." />
          </Box>
        </VStack>
      </Container>
    </Providers>
  )
}

