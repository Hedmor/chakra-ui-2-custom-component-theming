"use client"

import { Box } from "@chakra-ui/react"
import { AutocompleteItem } from "./AutocompleteItem"
import type { AutocompleteListProps } from "./Autocomplete.types"
import { styles } from "./Autocomplete.styles"

export const AutocompleteList = ({
  filteredOptions,
  isOpen,
  onSelect,
  highlightedIndex,
  ...props
}: AutocompleteListProps) => {
  if (!isOpen || filteredOptions.length === 0) {
    return null
  }

  return (
    <Box sx={styles.list} role="listbox" {...props}>
      {filteredOptions.map((option, index) => (
        <AutocompleteItem
          key={option.value}
          option={option}
          isHighlighted={index === highlightedIndex}
          onSelect={() => onSelect(option)}
        />
      ))}
    </Box>
  )
}

