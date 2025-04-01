"use client"

import type React from "react"

import { Box, Input, useMultiStyleConfig } from "@chakra-ui/react"
import { useState, useRef, useEffect } from "react"
import type { AutocompleteOption, AutocompleteProps } from "./Autocomplete.types"
import { AutocompleteList } from "./AutocompleteList"
import { AutocompleteInput } from "./AutocompleteInput"

export const Autocomplete = ({
  options,
  value: externalValue,
  onChange: externalOnChange,
  placeholder = "Search...",
  isDisabled = false,
  variant = "outline",
  size = "md",
  ...props
}: AutocompleteProps) => {
  const [value, setValue] = useState(externalValue || "")
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const styles = useMultiStyleConfig("Autocomplete", props);

  // Sync with external value if provided
  useEffect(() => {
    if (externalValue !== undefined) {
      setValue(externalValue)
    }
  }, [externalValue])

  // Filter options on the client side
  const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(value.toLowerCase()))

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    if (externalOnChange) {
      externalOnChange(newValue)
    }
    setIsOpen(true)
    setHighlightedIndex(0)
  }

  const handleSelect = (option: AutocompleteOption) => {
    setValue(option.label)
    if (externalOnChange) {
      externalOnChange(option.value)
    }
    setIsOpen(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "ArrowDown") {
        setIsOpen(true)
      }
      return
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setHighlightedIndex((prevIndex) => Math.min(prevIndex + 1, filteredOptions.length - 1))
        break
      case "ArrowUp":
        e.preventDefault()
        setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, 0))
        break
      case "Enter":
        e.preventDefault()
        if (filteredOptions[highlightedIndex]) {
          handleSelect(filteredOptions[highlightedIndex])
        }
        break
      case "Escape":
        e.preventDefault()
        setIsOpen(false)
        break
    }
  }

  // Add event listeners on the client side
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <Box ref={containerRef} __css={styles.container} {...props}>
      <AutocompleteInput
        value={value}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        isDisabled={isDisabled}
        variant={variant}
        size={size}
        __css={styles.input}
      />

      {isOpen && filteredOptions.length > 0 && (
        <AutocompleteList filteredOptions={filteredOptions} isOpen={isOpen} onSelect={handleSelect} highlightedIndex={highlightedIndex} />
      )}
    </Box>
  )
}

