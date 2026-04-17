import { ref } from 'vue'

export type Theme = 'light' | 'dark' | 'system'

const currentTheme = ref<Theme>('light')
const isDark = ref(false)

export function useTheme() {
  const setTheme = (theme: Theme) => {
    currentTheme.value = theme
    
    if (theme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = systemDark
      document.documentElement.setAttribute('data-theme', systemDark ? 'dark' : 'light')
    } else {
      isDark.value = theme === 'dark'
      document.documentElement.setAttribute('data-theme', theme)
    }
    
    localStorage.setItem('bl-theme', theme)
  }
  
  const toggleTheme = () => {
    setTheme(isDark.value ? 'light' : 'dark')
  }
  
  const initTheme = () => {
    const savedTheme = localStorage.getItem('bl-theme') as Theme | null
    const defaultTheme = savedTheme || 'light'
    setTheme(defaultTheme)
    
    // Следим за системными изменениями
    if (savedTheme === 'system') {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (currentTheme.value === 'system') {
          isDark.value = e.matches
          document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light')
        }
      })
    }
  }
  
  return {
    currentTheme,
    isDark,
    setTheme,
    toggleTheme,
    initTheme
  }
}