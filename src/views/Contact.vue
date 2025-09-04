<template>
  <div class="contact">
    <h1>Contact</h1>
    
    <p>Get in touch with me for collaboration opportunities, questions, or just to say hello.</p>

    <div class="contact-info">
      <h2>Contact Information</h2>
      <p><strong>Email:</strong> <a href="mailto:hello@developer.dev">hello@developer.dev</a></p>
      <p><strong>LinkedIn:</strong> <a href="#" target="_blank">linkedin.com/in/developer</a></p>
      <p><strong>GitHub:</strong> <a href="#" target="_blank">github.com/developer</a></p>
      <p><strong>Twitter:</strong> <a href="#" target="_blank">twitter.com/dev_handle</a></p>
      <p><strong>Location:</strong> Remote / Available for travel</p>
      <p><strong>Response Time:</strong> Within 24 hours</p>
    </div>

    <!-- <div class="contact-form">
      <h2>Send a Message</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input 
            id="name"
            v-model="form.name"
            type="text"
            required
            placeholder="Your name"
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input 
            id="email"
            v-model="form.email"
            type="email"
            required
            placeholder="your.email@domain.com"
          />
        </div>

        <div class="form-group">
          <label for="subject">Subject</label>
          <input 
            id="subject"
            v-model="form.subject"
            type="text"
            required
            placeholder="Brief subject line"
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea 
            id="message"
            v-model="form.message"
            required
            placeholder="Your message here..."
            rows="6"
          ></textarea>
        </div>

        <div class="form-actions">
          <button type="submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
          <button type="button" @click="clearForm">
            Clear Form
          </button>
        </div>
      </form>

      <div v-if="submitMessage" class="submit-feedback" :class="{ success: isSuccess, error: !isSuccess }">
        {{ submitMessage }}
      </div>
    </div>-->
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isSubmitting = ref(false)
const submitMessage = ref('')
const isSuccess = ref(false)

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  // Simulate form submission
  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Simulate success
    isSuccess.value = true
    submitMessage.value = 'Message sent successfully! I\'ll get back to you soon.'
    
    // Clear form after successful submission
    setTimeout(() => {
      clearForm()
      submitMessage.value = ''
    }, 3000)
    
  } catch (error) {
    isSuccess.value = false
    submitMessage.value = 'Failed to send message. Please try again or contact me directly via email.'
  } finally {
    isSubmitting.value = false
  }
}

const clearForm = () => {
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
.contact-info {
  margin: 2rem 0;
}

.contact-info h2 {
  margin-bottom: 1rem;
}

.contact-info p {
  margin-bottom: 0.5rem;
}

.contact-form {
  margin-top: 3rem;
}

.contact-form h2 {
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #0066cc;
  outline: none;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
  line-height: 1.5;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.form-actions button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.form-actions button[type="submit"] {
  background: #0066cc;
  color: #ffffff;
  border: 1px solid #0066cc;
}

.form-actions button[type="submit"]:hover:not(:disabled) {
  background: #0052a3;
  border-color: #0052a3;
}

.form-actions button[type="submit"]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-actions button[type="button"] {
  background: #ffffff;
  color: #666666;
  border: 1px solid #cccccc;
}

.form-actions button[type="button"]:hover {
  background: #f5f5f5;
  border-color: #999999;
}

.submit-feedback {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
  font-weight: 600;
}

.submit-feedback.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.submit-feedback.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

@media (max-width: 768px) {
  .form-actions {
    flex-direction: column;
  }
  
  .form-actions button {
    width: 100%;
  }
}
</style>
