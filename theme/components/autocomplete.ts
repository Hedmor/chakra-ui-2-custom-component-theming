import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

// Create the style config helpers
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  "container",
  "input",
  "list",
  "item",
])

// Define the base styles for each part
const baseStyle = definePartsStyle({
  container: {
    position: "relative",
    width: "100%",
  },
  input: {
    borderColor: "gray.200",
    _focus: { borderColor: "blue.500" },
  },
  list: {
    position: "absolute",
    width: "100%",
    zIndex: 10,
    mt: "2px",
    bg: "white",
    borderRadius: "md",
    boxShadow: "xl",
    py: 2,
  },
  item: {
    px: 4,
    py: 2,
    cursor: "pointer",
    transition: "background-color 0.2s",
    _hover: { bg: "gray.50" },
    _selected: { bg: "blue.50" },
  },
})

// Define variants
const variants = {
  filled: definePartsStyle({
    input: { bg: "gray.100" },
  }),
  outline: definePartsStyle({
    input: {
      border: "1px solid",
      borderColor: "gray.200",
    },
  }),
}

// Define sizes
const sizes = {
  sm: definePartsStyle({
    input: { fontSize: "sm", px: 3, py: 1, height: "32px" },
    item: { fontSize: "sm" },
  }),
  md: definePartsStyle({
    input: { fontSize: "md", px: 4, py: 2, height: "40px" },
    item: { fontSize: "md" },
  }),
  lg: definePartsStyle({
    input: { fontSize: "lg", px: 4, py: 2, height: "48px" },
    item: { fontSize: "lg" },
  }),
}

// Export the component style config
export const Autocomplete = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "outline",
    size: "md",
  },
})

