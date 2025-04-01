"use client"

import { Box } from "@chakra-ui/react"
import type { AutocompleteItemProps } from "./Autocomplete.types"
import { styles } from "./Autocomplete.styles"

export const AutocompleteItem = ({ option, isHighlighted, onSelect, ...props }: AutocompleteItemProps) => {
  return (
    <Box
      sx={{
        ...(isHighlighted ? styles.highlightedItem : {}),
      }}
      onClick={onSelect}
      role="option"
      aria-selected={isHighlighted}
      {...props}
    >
      {option.label}
    </Box>
  )
}

