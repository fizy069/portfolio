<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-menu" :class="{ active: isMenuOpen }">
        <router-link v-for="item in navItems" :key="item.path" :to="item.path" class="nav-link" @click="closeMenu">
          {{ item.name }}
        </router-link>
      </div>

      <div class="nav-controls">
        <ThemeSwitch />
        <div class="nav-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }">
          <span class="hamburger"></span>
          <span class="hamburger"></span>
          <span class="hamburger"></span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'

const isMenuOpen = ref(false)

const navItems = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'projects' },
  { path: '/blog', name: ' blog' },
  { path: '/about', name: 'about' },
  { path: '/contact', name: 'contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  background: var(--navbar-bg);
  border-bottom: 1px solid var(--navbar-border);
  padding: 1rem 0;
  font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.nav-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 1;
  justify-content: center;
}

.nav-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  right: 1rem;
}

.nav-link {
  text-decoration: none;
  color: var(--text-color);
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--primary-color);
  text-decoration: underline;
}

.nav-link.router-link-active {
  color: var(--primary-color);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 4px;
  gap: 4px;
}

.hamburger {
  width: 20px;
  height: 2px;
  background: var(--text-color);
  transition: all 0.3s ease;
  border-radius: 1px;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .nav-container {
    justify-content: center;
  }

  .nav-menu {
    position: static;
    flex: none;
    justify-content: center;
  }

  .nav-controls {
    position: absolute;
    right: 1rem;
    gap: 0.75rem;
  }

  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--navbar-bg);
    border-bottom: 1px solid var(--navbar-border);
    flex-direction: column;
    align-items: stretch;
    padding: 1rem;
    gap: 1rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
  }

  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    padding: 0.75rem 0;
    text-align: center;
  }

  /* Animation for mobile menu toggle */
  .nav-toggle.active .hamburger:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .nav-toggle.active .hamburger:nth-child(2) {
    opacity: 0;
  }

  .nav-toggle.active .hamburger:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
}
</style>
