<script setup>
import { onMounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import { useTheme } from '@/composables/useTheme.js'

const { initializeTheme } = useTheme()

onMounted(() => {
  initializeTheme()
})
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

/* CSS Variables for Theme */
:root {
  /* Light theme (default) */
  --bg-color: #ffffff;
  --text-color: #333333;
  --text-secondary: #666666;
  --border-color: #e0e0e0;
  --border-hover: #cccccc;
  --primary-color: #0066cc;
  --primary-hover: #004499;
  --hover-bg: #f5f5f5;
  --selection-bg: #e6f3ff;
  --selection-text: #333333;
  --navbar-bg: #ffffff;
  --navbar-border: #e0e0e0;
  --shadow: rgba(0, 0, 0, 0.1);
  --card-bg: #ffffff;
  --card-border: #e0e0e0;
}

[data-theme="dark"] {
  /* Dark theme */
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
  --text-secondary: #d0d0d0;
  --border-color: #404040;
  --border-hover: #606060;
  --primary-color: #66aaff;
  --primary-hover: #4488dd;
  --hover-bg: #2a2a2a;
  --selection-bg: #2d5a87;
  --selection-text: #ffffff;
  --navbar-bg: #1a1a1a;
  --navbar-border: #404040;
  --shadow: rgba(255, 255, 255, 0.1);
  --card-bg: #2a2a2a;
  --card-border: #404040;
}

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
  background: var(--bg-color);
  color: var(--text-color);
  line-height: 1.6;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;
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
  color: var(--text-color);
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
  color: var(--text-color);
  font-size: 1.1rem;
}

/* Global Link Styles */
a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  text-decoration: underline;
  color: var(--primary-hover);
}

/* Lists */
ul, ol {
  margin-bottom: 1rem;
  padding-left: 2rem;
}

li {
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

/* Simple horizontal rule */
hr {
  border: none;
  border-top: 1px solid var(--border-color);
  margin: 2rem 0;
}

/* Selection Color */
::selection {
  background: var(--selection-bg);
  color: var(--selection-text);
}

::-moz-selection {
  background: var(--selection-bg);
  color: var(--selection-text);
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
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* Button Base Styles */
button {
  font-family: inherit;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 1px solid var(--primary-color);
  background: var(--bg-color);
  color: var(--primary-color);
  border-radius: 4px;
  transition: all 0.2s ease;
}

button:hover {
  background: var(--primary-color);
  color: var(--bg-color);
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/* Form Elements */
input, textarea, select {
  font-family: inherit;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 1rem;
  background: var(--bg-color);
  color: var(--text-color);
  transition: border-color 0.2s ease;
}

input:focus, textarea:focus, select:focus {
  border-color: var(--primary-color);
}

/* Global Card Styles */
.card, .project-card, .blog-card, .experience-card, .work-item, .article-item {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px var(--shadow);
}

.card:hover, .project-card:hover, .blog-card:hover, .experience-card:hover, .work-item:hover, .article-item:hover {
  border-color: var(--border-hover);
  box-shadow: 0 4px 8px var(--shadow);
}

/* Card headers */
.card h2, .card h3, .project-card h2, .project-card h3, .blog-card h2, .blog-card h3, 
.experience-card h2, .experience-card h3, .work-item h2, .work-item h3, 
.article-item h2, .article-item h3 {
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

/* Card text content */
.card p, .project-card p, .blog-card p, .experience-card p, .work-item p, .article-item p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

/* Card links */
.card a, .project-card a, .blog-card a, .experience-card a, .work-item a, .article-item a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.2s ease;
}

.card a:hover, .project-card a:hover, .blog-card a:hover, .experience-card a:hover, 
.work-item a:hover, .article-item a:hover {
  color: var(--primary-hover);
  text-decoration: underline;
}
</style>
