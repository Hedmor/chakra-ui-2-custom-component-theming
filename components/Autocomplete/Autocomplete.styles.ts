// Simple styles object that we'll use directly in components
export const styles = {
  container: {
    position: "relative",
    width: "100%",
  },
  input: {
    width: "100%",
    borderColor: "gray.200",
    _focus: { borderColor: "blue.500" },
  },
  list: {
    position: "absolute",
    width: "100%",
    zIndex: 10,
    mt: "2px",
    bg: "white",
    borderRadius: "md",
    overflow: "hidden",
    boxShadow: "lg",
    py: 2,
  },
  item: {
    px: 4,
    py: 2,
    cursor: "pointer",
    transition: "background-color 0.2s",
    _hover: { bg: "gray.50" },
  },
  highlightedItem: {
    bg: "blue.50",
  },
}

