import type { Meta, StoryObj } from "@storybook/react"
import { Autocomplete } from "./Autocomplete"
import { theme } from "@/theme"

const meta: Meta<typeof Autocomplete> = {
  title: "Components/Autocomplete",
  component: Autocomplete,
  parameters: {
    chakra: { theme },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outline", "filled"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Autocomplete>

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "strawberry", label: "Strawberry" },
]

export const Basic: Story = {
  args: {
    options,
    placeholder: "Search for a fruit...",
  },
}

export const Filled: Story = {
  args: {
    options,
    variant: "filled",
    placeholder: "Search for a fruit...",
  },
}

export const Large: Story = {
  args: {
    options,
    size: "lg",
    placeholder: "Search for a fruit...",
  },
}

export const Disabled: Story = {
  args: {
    options,
    isDisabled: true,
    placeholder: "Search for a fruit...",
  },
}

