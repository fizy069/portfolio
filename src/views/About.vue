<template>
  <div class="about">
    <div class="about-intro">
      <h1>a bit more about me</h1>
      <!-- <p>
        i work on what
      </p> -->
    </div>

    <div class="about-content">

      <section class="experience">
        <h2>experience</h2>
        <div class="experience-list">
          <div class="experience-item">
            <div class="role-header">
              <h3>Technical Intern</h3>
              <span class="company">Cisco, Bangalore</span>
              <span class="duration">May 2025 – July 2025</span>
            </div>
            <p>Developing an advanced AI agent for Excel analytics as part of Cisco’s RAG and internal AI initiatives, capable of performing deep analytical queries and summarizations over structured financial and operational spreadsheets. Engineered a functional tool-calling architecture that dynamically converts Excel data into SQL-like structures, enabling precise data retrieval and semantic reasoning across complex sheets.</p>
          </div>
          
          <div class="experience-item">
            <div class="role-header">
              <h3>AI Consultant</h3>
              <span class="company">Formidium</span>
              <span class="duration">Mar 2025 – May 2025</span>
            </div>
            <p>Built an enterprise-grade RAG platform for financial document Q&A, supporting multi-format inputs (PDF, DOCX, Excel, CSV) and enabling contextual queries on complex fund documents. Developed advanced document pipelines with for table/image parsing and chunking strategies tailored to financial text, integrated with GPT-4 and embedding models for summarization and semantic search. Deployed using Pinecone for vector search, MongoDB Atlas for metadata storage, FastAPI with async endpoints, and Docker for portability and scalability.</p>
          </div>

          <div class="experience-item">
            <div class="role-header">
              <h3>Head of App Development</h3>
              <span class="company">Developers’ Society, BITS Goa</span>
              <span class="duration">May 2024 – May 2025</span>
            </div>
            <p>Led a team of 40+ core members of the club who work on impactful software projects. Maintainer for the repositories containing essential research projects and other campus-level projects.</p>
          </div>
        </div>
      </section>

      <section class="achievements">
        <h2>hackathons</h2>
        <ul>
          <li><strong>Dezerv Hackathon Winner:</strong> Built Splitwise on steroids, with automated UPI payment tracking and Agentic AI based expense analysis.</li>
          <li><strong>Quark National Hackathon:</strong> Developed a platform using the Reclaim Protocol to streamline order data and deliver actionable analytics to clients.</li>
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
