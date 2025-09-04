<template>
  <span class="typewriter">{{ displayText }}</span>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  delay: {
    type: Number,
    default: 100
  },
  startDelay: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['complete'])

const displayText = ref('')
let currentIndex = 0

const typeText = () => {
  if (currentIndex < props.text.length) {
    displayText.value += props.text.charAt(currentIndex)
    currentIndex++
    setTimeout(typeText, props.delay)
  } else {
    emit('complete')
  }
}

onMounted(() => {
  setTimeout(() => {
    typeText()
  }, props.startDelay)
})
</script>

<style scoped>
.typewriter {
  color: #00ff41;
  font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
  white-space: pre-wrap;
}
</style>
