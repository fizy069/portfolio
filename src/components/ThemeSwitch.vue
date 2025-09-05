<template>
  <div class="theme-switch">
    <button 
      class="theme-toggle" 
      @click="toggleTheme"
      :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
      :title="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <span class="theme-icon" :class="{ dark: isDarkMode }">
        <!-- Sun icon -->
        <svg v-if="!isDarkMode" class="sun-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>
          <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2"/>
        </svg>
        
        <!-- Moon icon -->
        <svg v-else class="moon-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2"/>
        </svg>
      </span>
    </button>
  </div>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme.js'

const { isDarkMode, toggleTheme } = useTheme()
</script>

<style scoped>
.theme-switch {
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle {
  background: transparent;
  border: 1px solid var(--border-color, #e0e0e0);
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.theme-toggle:hover {
  background: var(--hover-bg, #f5f5f5);
  border-color: var(--primary-color, #0066cc);
}

.theme-toggle:focus {
  outline: 2px solid var(--primary-color, #0066cc);
  outline-offset: 2px;
}

.theme-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color, #333333);
  transition: transform 0.2s ease;
}

.sun-icon,
.moon-icon {
  width: 100%;
  height: 100%;
}

.theme-icon.dark {
  transform: rotate(0deg);
}

/* Mobile specific styles */
@media (max-width: 768px) {
  .theme-toggle {
    width: 36px;
    height: 36px;
    padding: 0.4rem;
  }
  
  .theme-icon {
    width: 18px;
    height: 18px;
  }
}
</style>
