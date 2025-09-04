<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&display=swap');

/* Global Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Global Styles */
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
  background: #ffffff;
  color: #333333;
  line-height: 1.6;
  font-size: 16px;
}

#app {
  min-height: 100vh;
}

.main-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* Global Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Fira Code', monospace;
  font-weight: 600;
  color: #333333;
  margin-bottom: 1rem;
  line-height: 1.3;
}

h1 {
  font-size: 1.5rem;
}

h2 {
  font-size: 1.25rem;
}

h3 {
  font-size: 1.125rem;
}

p {
  margin-bottom: 1rem;
  color: #333333;
  font-size: 1.1rem;
}

/* Global Link Styles */
a {
  color: #0066cc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Lists */
ul, ol {
  margin-bottom: 1rem;
  padding-left: 2rem;
}

li {
  margin-bottom: 0.5rem;
}

/* Simple horizontal rule */
hr {
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 2rem 0;
}

/* Selection Color */
::selection {
  background: #e6f3ff;
  color: #333333;
}

::-moz-selection {
  background: #e6f3ff;
  color: #333333;
}

/* Utility Classes */
.text-center {
  text-align: center;
}

.mb-1 {
  margin-bottom: 1rem;
}

.mb-2 {
  margin-bottom: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
  }
  
  h1 {
    font-size: 1.25rem;
  }
  
  h2 {
    font-size: 1.125rem;
  }
  
  body {
    font-size: 14px;
  }
}

/* Focus Styles */
button:focus,
input:focus,
textarea:focus,
select:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* Button Base Styles */
button {
  font-family: inherit;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 1px solid #0066cc;
  background: #ffffff;
  color: #0066cc;
  border-radius: 4px;
  transition: all 0.2s ease;
}

button:hover {
  background: #0066cc;
  color: #ffffff;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/* Form Elements */
input, textarea, select {
  font-family: inherit;
  padding: 0.5rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 1rem;
}

input:focus, textarea:focus, select:focus {
  border-color: #0066cc;
}
</style>
