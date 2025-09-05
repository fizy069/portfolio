<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-menu" :class="{ active: isMenuOpen }">
        <router-link 
          v-for="item in navItems" 
          :key="item.path"
          :to="item.path" 
          class="nav-link"
          @click="closeMenu"
        >
          {{ item.name }}
        </router-link>
      </div>

      <div class="nav-toggle" @click="toggleMenu">
        <span class="hamburger"></span>
        <span class="hamburger"></span>
        <span class="hamburger"></span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navItems = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/projects', name: 'projects' },
  { path: '/blog', name: ' blog' },
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
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem 0;
  font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
}

.nav-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #333333;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #0066cc;
  text-decoration: underline;
}

.nav-link.router-link-active {
  color: #0066cc;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 4px;
  gap: 4px;
  position: absolute;
  right: 1rem;
}

.hamburger {
  width: 20px;
  height: 2px;
  background: #333333;
  transition: all 0.3s ease;
  border-radius: 1px;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: #ffffff;
    border-bottom: 1px solid #e0e0e0;
    flex-direction: column;
    align-items: stretch;
    padding: 1rem;
    gap: 1rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    padding: 0.5rem 0;
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
