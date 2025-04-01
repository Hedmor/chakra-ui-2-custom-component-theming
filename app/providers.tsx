"use client"

import type React from "react"

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import { theme } from "@/theme"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
      <ChakraProvider theme={theme} resetCSS>
        {children}
      </ChakraProvider>
    </>
  )
}

export { theme } from "@/theme"

