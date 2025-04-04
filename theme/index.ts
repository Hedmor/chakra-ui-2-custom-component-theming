import { Autocomplete } from "@/components/Autocomplete/Autocomplete.theme"
import { extendTheme } from "@chakra-ui/react"
import type { ChakraTheme } from "@chakra-ui/react"

// Define our custom theme
export const theme = extendTheme({
  colors: {
    brand: {
      50: "#f7fafc",
      100: "#edf2f7",
      500: "#3182ce",
      600: "#2b6cb0",
    },
  },
  components: {
    Autocomplete,
  },
} as Partial<ChakraTheme>)