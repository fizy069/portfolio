<template>
  <div class="projects">
    <div class="projects-header">
      <h1>projects</h1>
      <p class="projects-intro">
        gist of some of the projects i've worked on lately.
      </p>
    </div>

    <div class="project-list">
      <div v-for="project in projects" :key="project.id" class="project-item">
        <div class="project-header">
          <h3>{{ project.name }}</h3>
          <span v-if="project.status" class="project-status" :class="project.status">
            {{ project.status === 'in-progress' ? 'In Progress' : 'Completed' }}
          </span>
        </div>
        <p class="project-description">{{ project.description }}</p>
        <div class="project-tech">
          <strong>Built with: </strong>
          <span class="tech-list">{{ project.technologies.join(', ') }}</span>
        </div>
        <div class="project-links">
          <a v-if="project.demo" :href="project.demo" target="_blank" class="project-link demo">
            View Live Demo →
          </a>
          <a v-if="project.github" :href="project.github" target="_blank" class="project-link github">
            Source Code →
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import projectsData from '@/data/projects.json'

const projects = ref(projectsData)
</script>

<style scoped>
.projects-header {
  margin-bottom: 3rem;
}

.projects-intro {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-top: 1rem;
}

.project-list {
  margin-top: 2rem;
}

.project-item {
  margin-bottom: 1rem;
  padding: 0.6rem 0.7rem;
  background: #fafbfc;
  border-radius: 4px;
  border-left: 2px solid #0066cc;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-size: 0.92rem;
}

.project-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 102, 204, 0.1);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-header h3 {
  color: #333;
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0;
}

.project-status {
  padding: 0.18rem 0.5rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
}

.project-status.completed {
  background: #d4edda;
  color: #155724;
}

.project-status.in-progress {
  background: #fff3cd;
  color: #856404;
}

.project-description {
  color: #555;
  line-height: 1.5;
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
}

.project-tech {
  margin-bottom: 1.5rem;
  color: #555;
}

.project-tech strong {
  color: #333;
}

.tech-list {
  color: #0066cc;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-link {
  color: #0066cc;
  text-decoration: none;
  font-weight: 500;
  padding: 0.32rem 0.7rem;
  border: 1px solid #0066cc;
  border-radius: 3px;
  transition: all 0.2s ease;
  font-size: 0.8rem;
}

.project-link:hover {
  background: #0066cc;
  color: white;
  text-decoration: none;
}

.project-link.demo {
  background: #0066cc;
  color: white;
}

.project-link.demo:hover {
  background: #0052a3;
}

.project-link.github:hover {
  background: #0066cc;
  color: white;
}

@media (max-width: 768px) {
  .projects-intro {
    font-size: 1rem;
  }

  .project-item {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }

  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .project-header h3 {
    font-size: 1.2rem;
  }

  .project-links {
    flex-direction: column;
    gap: 0.5rem;
  }

  .project-link {
    text-align: center;
  }
}
</style>
