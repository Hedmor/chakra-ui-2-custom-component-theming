import type React from "react"
import type { BoxProps } from "@chakra-ui/react"

export interface AutocompleteOption {
  value: string
  label: string
}

export interface AutocompleteProps extends Omit<BoxProps, 'children' | 'onChange'> {
  options: AutocompleteOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  isDisabled?: boolean
  variant?: string
  size?: string
}

export interface AutocompleteInputProps extends Omit<BoxProps, 'children' | 'onChange'> {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus: () => void
  onKeyDown: (e: React.KeyboardEvent) => void
  placeholder?: string
  isDisabled?: boolean
  variant?: string
  size?: string
}

export interface AutocompleteListProps {
  filteredOptions: AutocompleteOption[]
  isOpen: boolean
  onSelect: (option: AutocompleteOption) => void
  highlightedIndex: number
}

export interface AutocompleteItemProps extends Omit<BoxProps, 'children' | 'onChange'> {
  option: AutocompleteOption
  isHighlighted: boolean
  onSelect: () => void
}

