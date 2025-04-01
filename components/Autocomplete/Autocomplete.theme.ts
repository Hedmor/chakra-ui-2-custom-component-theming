import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

// Создаём помощников для конфигурации стилей
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  "container",
  "input",
  "list",
  "item",
])

// Базовые стили для каждой части
const baseStyle = definePartsStyle({
  container: {
    position: "relative",
    width: "100%",
    bg: "rgba(0, 0, 0, 0.5)", // Темный фон для контейнера, напоминающий атмосферу игры
    borderRadius: "4px", // Углы с небольшим радиусом
    border: "1px solid #4b4b4b", // Тонкая граница
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.7)", // Тень для придания глубины
  },
  input: {
    borderColor: "#333", // Темный цвет границы
    bg: "#1f1f1f", // Темный фон для инпута
    color: "white", // Белый текст
    _focus: {
      borderColor: "#00b5ad", // Акцент на фокус с цветом в стиле Half-Life 1
      boxShadow: "0 0 5px rgba(0, 181, 173, 0.7)", // Легкая тень на фокус
    },
    _placeholder: {
      color: "#aaa", // Светлый цвет для плейсхолдера
    },
  },
  list: {
    position: "absolute",
    width: "100%",
    zIndex: 10,
    mt: "2px",
    bg: "#2e2e2e", // Темный фон списка
    borderRadius: "4px", // Сглаженные углы
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)", // Тень
    py: 2,
    border: "1px solid #4b4b4b", // Бордер вокруг списка
  },
  item: {
    px: 4,
    py: 2,
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s", // Плавный переход для фона и цвета текста
    color: "#f0a500", // Яркий оранжевый цвет текста, напоминающий HUD Half-Life
    fontWeight: "bold", // Жирный текст
    _hover: {
      bg: "#1a1a1a", // Немного темнее фон при наведении
      color: "#00b5ad", // Цвет текста при наведении
    },
    _selected: {
      bg: "#00b5ad", // Выделение синим-зеленым цветом
      color: "black", // Черный цвет текста для выделенных элементов
    },
}
})

// Варианты стилей
const variants = {
  filled: definePartsStyle({
    container: { bg: "#2b2b2b" }, // Тёмный фон инпута
  }),
  outline: definePartsStyle({
    input: {
      border: "1px solid #333", // Темная граница
    },
  }),
}

// Размеры
const sizes = {
  sm: definePartsStyle({
    input: { fontSize: "sm", px: 3, py: 1, height: "32px" },
    item: { fontSize: "sm" },
  }),
  md: definePartsStyle({
    input: { fontSize: "md", px: 4, py: 2, height: "40px" },
    item: { fontSize: "md" },
  }),
  lg: definePartsStyle({
    input: { fontSize: "lg", px: 4, py: 2, height: "48px" },
    item: { fontSize: "lg" },
  }),
}

// Экспортируем конфигурацию стилей для компонента
export const Autocomplete = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "outline",
    size: "md",
  },
})
