"use client"

import type React from "react"

import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { ChakraProvider } from "@chakra-ui/react"
import { Autocomplete } from "./Autocomplete"
import { theme } from "@/theme"

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
]

const renderWithChakra = (ui: React.ReactElement) => {
  return render(<ChakraProvider theme={theme}>{ui}</ChakraProvider>)
}

describe("Autocomplete", () => {
  test("renders input correctly", () => {
    renderWithChakra(<Autocomplete options={options} placeholder="Search..." />)
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument()
  })

  test("filters options when typing", async () => {
    renderWithChakra(<Autocomplete options={options} placeholder="Search..." />)

    const input = screen.getByPlaceholderText("Search...")
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "app" } })

    await waitFor(() => {
      expect(screen.getByText("Apple")).toBeInTheDocument()
      expect(screen.queryByText("Banana")).not.toBeInTheDocument()
    })
  })

  test("selects option when clicked", async () => {
    const handleChange = jest.fn()
    renderWithChakra(<Autocomplete options={options} placeholder="Search..." onChange={handleChange} />)

    const input = screen.getByPlaceholderText("Search...")
    fireEvent.focus(input)

    await waitFor(() => {
      expect(screen.getByText("Apple")).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText("Apple"))
    expect(input).toHaveValue("Apple")
  })

  test("navigates options with keyboard", async () => {
    renderWithChakra(<Autocomplete options={options} placeholder="Search..." />)

    const input = screen.getByPlaceholderText("Search...")
    fireEvent.focus(input)

    await waitFor(() => {
      expect(screen.getByText("Apple")).toBeInTheDocument()
    })

    fireEvent.keyDown(input, { key: "ArrowDown" })
    fireEvent.keyDown(input, { key: "Enter" })

    expect(input).toHaveValue("Apple")
  })
})

