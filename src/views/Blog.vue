<template>
  <div class="blog">
    <h1>Writing</h1>
    
    <p>Articles and thoughts about web development, programming, and technology.</p>

    <div class="search-section">
      <input 
        v-model="searchQuery"
        placeholder="Search articles..."
        class="search-input"
      />
    </div>

    <div class="articles-list">
      <article 
        v-for="article in filteredArticles" 
        :key="article.id"
        class="article-item"
      >
        <h3>{{ article.title }}</h3>
        <div class="article-meta">
          <span class="article-date">{{ article.date }}</span> • 
          <span class="article-readtime">{{ article.readTime }} min read</span>
        </div>
        <p>{{ article.excerpt }}</p>
        <div class="article-tags">
          <span v-for="tag in article.tags" :key="tag" class="tag">#{{ tag }}</span>
        </div>
        <p><a href="#" class="read-more">Read more →</a></p>
      </article>
    </div>

    <div v-if="filteredArticles.length === 0" class="no-results">
      <p>No articles found matching your search.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')

const allArticles = ref([
  {
    id: 1,
    title: 'Building Modern Web Applications with Vue.js 3',
    date: '2024-03-15',
    readTime: 8,
    tags: ['vue', 'javascript', 'frontend'],
    excerpt: 'Explore the latest features of Vue.js 3 including the Composition API, better TypeScript support, and improved performance. Learn how to build scalable applications with modern development practices.'
  },
  {
    id: 2,
    title: 'Mastering CSS Grid: A Complete Guide',
    date: '2024-03-10',
    readTime: 12,
    tags: ['css', 'layout', 'responsive'],
    excerpt: 'Comprehensive guide to CSS Grid Layout. From basic concepts to advanced techniques, learn how to create complex, responsive layouts with minimal code.'
  },
  {
    id: 3,
    title: 'Node.js Performance Optimization Strategies',
    date: '2024-03-05',
    readTime: 15,
    tags: ['nodejs', 'performance', 'backend'],
    excerpt: 'Deep dive into Node.js performance optimization. Learn about event loop optimization, memory management, caching strategies, and monitoring tools.'
  },
  {
    id: 4,
    title: 'TypeScript Best Practices for Large Projects',
    date: '2024-02-28',
    readTime: 10,
    tags: ['typescript', 'best-practices', 'architecture'],
    excerpt: 'Essential TypeScript patterns and practices for maintainable large-scale applications. Cover type safety, modular architecture, and testing strategies.'
  },
  {
    id: 5,
    title: 'Understanding JavaScript Closures and Scope',
    date: '2024-02-20',
    readTime: 6,
    tags: ['javascript', 'fundamentals', 'concepts'],
    excerpt: 'Master one of JavaScript\'s most important concepts. Learn how closures work, their practical applications, and common pitfalls to avoid.'
  },
  {
    id: 6,
    title: 'Building RESTful APIs with Express.js',
    date: '2024-02-15',
    readTime: 14,
    tags: ['express', 'api', 'backend'],
    excerpt: 'Complete guide to building robust RESTful APIs using Express.js. Cover routing, middleware, authentication, error handling, and testing.'
  }
])

const filteredArticles = computed(() => {
  if (!searchQuery.value) return allArticles.value
  
  const query = searchQuery.value.toLowerCase()
  return allArticles.value.filter(article => 
    article.title.toLowerCase().includes(query) ||
    article.tags.some(tag => tag.toLowerCase().includes(query)) ||
    article.excerpt.toLowerCase().includes(query)
  )
})
</script>

<style scoped>
.search-section {
  margin: 2rem 0;
}

.search-input {
  width: 100%;
  max-width: 400px;
  padding: 0.5rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-family: inherit;
}

.search-input:focus {
  border-color: #0066cc;
  outline: none;
}

.articles-list {
  margin-top: 2rem;
}

.article-item {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #fafbfc;
  border-radius: 6px;
  border-left: 3px solid #0066cc;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.article-item:hover {
  transform: translateY(-1px);
  box-shadow: 0 3px 15px rgba(0, 102, 204, 0.1);
}

.article-item h3 {
  color: #333;
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.article-meta {
  color: #666666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.article-date {
  color: #0066cc;
}

.article-tags {
  margin: 1rem 0;
}

.tag {
  background-color: #f0f0f0;
  color: #666666;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
}

.read-more {
  color: #0066cc;
  text-decoration: none;
}

.read-more:hover {
  text-decoration: underline;
}

.no-results {
  text-align: center;
  color: #666666;
  margin-top: 3rem;
}
</style>
