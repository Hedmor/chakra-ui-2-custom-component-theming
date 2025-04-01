"use client"

import { Box, useMultiStyleConfig } from "@chakra-ui/react"
import { AutocompleteItem } from "./AutocompleteItem"
import type { AutocompleteListProps } from "./Autocomplete.types"

export const AutocompleteList = ({
  filteredOptions,
  isOpen,
  onSelect,
  highlightedIndex,
  ...props
}: AutocompleteListProps) => {
  const styles = useMultiStyleConfig("Autocomplete", props);

  if (!isOpen || filteredOptions.length === 0) {
    return null
  }

  return (
    <Box __css={styles.list} role="listbox" {...props}>
      {filteredOptions.map((option, index) => (
        <AutocompleteItem
          key={option.value}
          option={option}
          isHighlighted={index === highlightedIndex}
          onSelect={() => onSelect(option)}
          __css={styles.item}
        />
      ))}
    </Box>
  )
}

