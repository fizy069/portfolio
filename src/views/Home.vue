<template>
  <div class="home">
    <section class="hero">
      <h1>mahir</h1>
      <p class="description">
        i'm a final year student at bits pilani, goa campus, with hands-on experience in mobile app development, backend systems, web3, and applied ai.
      </p>
      <p class="contact-link-intro">
        <router-link to="/contact">get in touch →</router-link>
      </p>
    </section>

    <section class="content-grid">
      <div class="recent-work">
        <h2>Recent Work</h2>
        <div class="work-list">
          <div class="work-item">
            <h4>E-commerce Platform Redesign</h4>
            <p>Led frontend development for a complete platform overhaul, resulting in 40% improvement in conversion rates.</p>
          </div>
          <div class="work-item">
            <h4>Real-time Analytics Dashboard</h4>
            <p>Built a Vue.js dashboard with WebSocket integration for live data visualization and reporting.</p>
          </div>
          <!-- <div class="work-item">
            <h4>API Microservices Architecture</h4>
            <p>Designed and implemented scalable Node.js microservices handling 10M+ requests daily.</p>
          </div> -->
        </div>
        <p class="view-more">
          <router-link to="/projects">View all projects →</router-link>
        </p>
      </div>

      <div class="latest-writing">
        <h2>Latest Writing</h2>
        <div class="article-preview">
          <h4>Building Modern Web Applications with Vue.js 3</h4>
          <p>Exploring the latest features including Composition API and performance improvements...</p>
          <span class="article-date">March 15, 2024</span>
        </div>
        <div class="article-preview">
          <h4>Mastering CSS Grid: A Complete Guide</h4>
          <p>Comprehensive guide to CSS Grid Layout. From basic concepts to advanced techniques...</p>
          <span class="article-date">March 10, 2024</span>
        </div>
        <p class="view-more">
          <router-link to="/blog">Read all articles →</router-link>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  /* Use global main-content styling from App.vue */
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
}

.hero h1 {
  font-size: 2.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 1.5rem auto;
}

.contact-link-intro {
  margin-top: 1rem;
}

.contact-link-intro a {
  color: #0066cc;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 1px solid #0066cc;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.contact-link-intro a:hover {
  background: #0066cc;
  color: white;
  text-decoration: none;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.recent-work, .latest-writing {
  margin-bottom: 2rem;
}

.recent-work h2, .latest-writing h2 {
  color: #333;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.work-list {
  margin-bottom: 1.5rem;
}

.work-item {
  margin-bottom: 1.2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 3px solid #0066cc;
}

.work-item h4 {
  color: #333;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.work-item p {
  color: #666;
  line-height: 1.5;
  font-size: 0.85rem;
}

.article-preview {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
  margin-bottom: 1.2rem;
  border-left: 3px solid #0066cc;
}

.article-preview h4 {
  color: #333;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.article-preview p {
  color: #666;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
}

.article-date {
  color: #0066cc;
  font-size: 0.75rem;
  font-weight: 500;
}

.view-more {
  text-align: right;
}

.view-more a {
  color: #0066cc;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
}

.view-more a:hover {
  text-decoration: underline;
}

@media (max-width: 900px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .hero {
    margin-bottom: 2rem;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .description {
    font-size: 1rem;
  }
  
  .content-grid {
    gap: 2rem;
  }
  
  .work-item {
    padding: 0.8rem;
  }
  
  .work-item h4 {
    font-size: 0.9rem;
  }
  
  .work-item p {
    font-size: 0.8rem;
  }
  
  .article-preview {
    padding: 0.8rem;
  }
  
  .article-preview h4 {
    font-size: 0.9rem;
  }
  
  .article-preview p {
    font-size: 0.8rem;
  }
}
</style>
