<template>
  <div class="projects">
    <div class="projects-header">
      <h1>Projects</h1>
      <p class="projects-intro">
        A collection of projects that showcase my skills and experience in web development. 
        Each project represents a unique challenge and learning opportunity.
      </p>
    </div>

    <div class="project-list">
      <div 
        v-for="project in projects" 
        :key="project.id"
        class="project-item"
      >
        <div class="project-header">
          <h3>{{ project.name }}</h3>
          <span v-if="project.status" class="project-status" :class="project.status">
            {{ project.status === 'in-progress' ? 'In Progress' : 'Completed' }}
          </span>
        </div>
        <p class="project-description">{{ project.description }}</p>
        <div class="project-tech">
          <strong>Built with:</strong> 
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

const projects = ref([
  {
    id: 1,
    name: 'Portfolio Website',
    description: 'A responsive portfolio website built with Vue.js featuring clean design and smooth user experience.',
    technologies: ['Vue.js', 'CSS3', 'JavaScript', 'Vite'],
    status: 'completed',
    demo: '#',
    github: '#'
  },
  {
    id: 2,
    name: 'Task Manager App',
    description: 'Full-stack task management application with real-time updates and collaborative features.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    status: 'completed',
    demo: '#',
    github: '#'
  },
  {
    id: 3,
    name: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with location-based forecasts and interactive charts.',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'SCSS'],
    status: 'completed',
    demo: '#',
    github: '#'
  },
  {
    id: 4,
    name: 'E-commerce Platform',
    description: 'Modern e-commerce platform with payment integration and admin dashboard.',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
    status: 'in-progress',
    demo: null,
    github: '#'
  },
  {
    id: 5,
    name: 'Blog CMS',
    description: 'Headless CMS for blog management with markdown support and SEO optimization.',
    technologies: ['Nuxt.js', 'Strapi', 'Markdown', 'Cloudinary'],
    status: 'completed',
    demo: '#',
    github: '#'
  },
  {
    id: 6,
    name: 'Chat Application',
    description: 'Real-time chat application with rooms, file sharing, and emoji reactions.',
    technologies: ['Socket.io', 'Express.js', 'Redis', 'JWT'],
    status: 'completed',
    demo: '#',
    github: '#'
  }
])
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
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #fafbfc;
  border-radius: 6px;
  border-left: 3px solid #0066cc;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
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
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
}

.project-status {
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
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
  line-height: 1.6;
  margin-bottom: 1.2rem;
  font-size: 1rem;
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
  padding: 0.5rem 1rem;
  border: 1px solid #0066cc;
  border-radius: 5px;
  transition: all 0.2s ease;
  font-size: 0.9rem;
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
