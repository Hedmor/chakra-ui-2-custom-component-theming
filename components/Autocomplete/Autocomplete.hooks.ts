"use client"

import { useState, useMemo } from "react"
import type { AutocompleteOption } from "./Autocomplete.types"

export const useAutocomplete = (options: AutocompleteOption[]) => {
  const [value, setValue] = useState("")
  const [selectedOption, setSelectedOption] = useState<AutocompleteOption | null>(null)

  const filteredOptions = useMemo(
    () => options.filter((opt) => opt.label.toLowerCase().includes(value.toLowerCase())),
    [value, options],
  )

  const handleSelect = (option: AutocompleteOption) => {
    setValue(option.label)
    setSelectedOption(option)
  }

  const handleInputChange = (newValue: string) => {
    setValue(newValue)
    setSelectedOption(null)
  }

  return {
    value,
    selectedOption,
    filteredOptions,
    handleInputChange,
    handleSelect,
  }
}

