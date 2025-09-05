<template>
  <div class="about">
    <div class="about-intro">
      <h1>{{ content.intro.title }}</h1>
    </div>

    <div class="about-content">

      <section class="experience">
        <h2>{{ content.experience.title }}</h2>
        <div class="experience-list">
          <div v-for="item in content.experience.items" :key="item.role" class="experience-item">
            <div class="role-header">
              <h3>{{ item.role }}</h3>
              <span class="company">{{ item.company }}</span>
              <span class="duration">{{ item.duration }}</span>
            </div>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </section>

      <section class="achievements">
        <h2>{{ content.achievements.title }}</h2>
        <ul>
          <li v-for="item in content.achievements.items" :key="item" v-html="item"></li>
        </ul>
      </section>

      <!-- <section class="skills">
        <h2>Technical Skills</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Frontend Development</h3>
            <p>JavaScript, TypeScript, Vue.js, React, HTML5, CSS3, SCSS</p>
          </div>
          <div class="skill-category">
            <h3>Backend Development</h3>
            <p>Node.js, Express.js, Python, REST APIs, GraphQL</p>
          </div>
          <div class="skill-category">
            <h3>Databases & Tools</h3>
            <p>PostgreSQL, MongoDB, Git, Docker, AWS, Testing frameworks</p>
          </div>
        </div>
      </section> -->

      <!-- <section class="interests">
        <h2>Beyond Coding</h2>
        <p>
          When I'm not writing code, you'll find me reading about emerging technologies, 
          contributing to open source projects, or experimenting with new frameworks. 
          I'm particularly interested in web performance optimization, accessibility, 
          and the intersection of design and development.
        </p>
        <p>
          I also enjoy photography, hiking, and occasionally writing about technology 
          and development practices on my blog.
        </p>
      </section> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import aboutContentData from '@/data/aboutContent.json'

const content = ref(aboutContentData)
</script>

<style scoped>
.about-intro {
  margin-bottom: 3rem;
}

.about-intro h1 {
  margin-bottom: 1.5rem;
}

.lead {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
}

.about-content section {
  margin-bottom: 3rem;
}

.about-content h2 {
  color: #333;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
}

.journey p {
  margin-bottom: 1.2rem;
  line-height: 1.7;
  color: #555;
}

.experience-list {
  margin-top: 1.5rem;
}

.experience-item {
  margin-bottom: 2rem;
  padding: 1.2rem;
  background: #fafbfc;
  border-radius: 8px;
  border-left: 4px solid #0066cc;
}

.role-header {
  margin-bottom: 0.75rem;
}

.role-header h3 {
  color: #333;
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
  font-weight: 600;
}

.company {
  color: #0066cc;
  font-weight: 600;
  margin-right: 1rem;
  font-size: 0.95rem;
}

.duration {
  color: #777;
  font-size: 0.85rem;
}

.experience-item p {
  color: #555;
  line-height: 1.5;
  font-size: 0.95rem;
}

.achievements ul {
  list-style-type: disc;
  padding-left: 20px;
  color: #555;
  line-height: 1.7;
}

.achievements li {
  margin-bottom: 0.8rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.skill-category {
  padding: 1.5rem;
  background: #fafbfc;
  border-radius: 8px;
}

.skill-category h3 {
  color: #0066cc;
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.skill-category p {
  color: #555;
  line-height: 1.5;
}

.interests p {
  margin-bottom: 1.2rem;
  line-height: 1.7;
  color: #555;
}

@media (max-width: 768px) {
  .lead {
    font-size: 1.1rem;
  }
  
  .about-content h2 {
    font-size: 1.3rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .experience-item {
    padding: 1.2rem;
  }
  
  .role-header h3 {
    font-size: 1.1rem;
  }
}
</style>
