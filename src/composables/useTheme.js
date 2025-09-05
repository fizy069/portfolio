import { ref, watch } from 'vue'

const isDarkMode = ref(false)

// Initialize theme from localStorage or system preference
const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  } else {
    // Check system preference
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
  // Apply initial theme
  applyTheme(isDarkMode.value)
}

// Apply theme to document
const applyTheme = (dark) => {
  if (dark) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}

// Watch for theme changes and persist to localStorage
watch(isDarkMode, (newValue) => {
  localStorage.setItem('theme', newValue ? 'dark' : 'light')
  applyTheme(newValue)
})

// Toggle theme function
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}

export function useTheme() {
  return {
    isDarkMode,
    toggleTheme,
    initializeTheme
  }
}
