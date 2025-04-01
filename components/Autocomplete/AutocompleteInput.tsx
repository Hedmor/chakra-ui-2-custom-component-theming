"use client"

import { Input } from "@chakra-ui/react"
import type { AutocompleteInputProps } from "./Autocomplete.types"
import { styles } from "./Autocomplete.styles"

export const AutocompleteInput = ({
  value,
  onChange,
  onFocus,
  onKeyDown,
  placeholder,
  isDisabled,
  variant,
  size,
  ...props
}: AutocompleteInputProps) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      isDisabled={isDisabled}
      variant={variant}
      size={size}
      sx={styles.input}
      {...props}
    />
  )
}

