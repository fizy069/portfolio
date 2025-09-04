<template>
  <div class="contact">
    <h1>Contact</h1>

    <p>Get in touch with me for collaboration opportunities, questions, or just to say hello.</p>

    <div class="contact-info">
      <h2>Contact Information</h2>
      <p><strong>Email:</strong> <a href="mailto:mf0tdnxo7@mozmail.com">mf0tdnxo7@mozmail.com</a></p>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mahirg/" target="_blank">https://www.linkedin.com/in/mahirg/</a></p>
      <p><strong>GitHub:</strong> <a href="https://github.com/fizy069" target="_blank">https://github.com/fizy069</a></p>
      <p><strong>Twitter:</strong> <a href="https://x.com/fizy_069" target="_blank">https://x.com/fizy_069</a></p>
    </div>

  </div>
</template>


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
