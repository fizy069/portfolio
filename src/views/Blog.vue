<template>
  <div class="blog">
    <h1>blog</h1>
    
    <p>excerpts on my thoughts and some of the stuff i built.</p>

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
import articlesData from '@/data/articles.json'

const searchQuery = ref('')
const allArticles = ref(articlesData)

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
  margin-bottom: 1rem;
  padding: 0.6rem 0.7rem;
  background: #fafbfc;
  border-radius: 4px;
  border-left: 2px solid #0066cc;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-size: 0.92rem;
}

.article-item:hover {
  transform: translateY(-1px);
  box-shadow: 0 3px 15px rgba(0, 102, 204, 0.1);
}

.article-item h3 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.05rem;
  font-weight: 600;
}

.article-meta {
  color: #666666;
  font-size: 0.78rem;
  margin-bottom: 0.7rem;
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
  padding: 0.18rem 0.38rem;
  border-radius: 2px;
  font-size: 0.7rem;
  margin-right: 0.35rem;
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
