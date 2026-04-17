<template>
  <div class="demo-page">
    <h1>BlTimePicker</h1>
    <p class="demo-description">Выбор времени.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <BlTimePicker
          v-model="time"
          label="Выберите время"
        />
        <div class="demo-message">Выбрано: {{ time || 'не выбрано' }}</div>
      </template>
    </CodeViewer>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { ref } from 'vue'
import CodeViewer from '../../../components/CodeViewer.vue'

const time = ref('')

const basicCode = `<BlTimePicker v-model="time" label="Выберите время" />`
</script>

<style scoped>
.demo-page {
  max-width: 800px;
  margin: 0 auto;
}

.demo-description {
  color: var(--bl-text-secondary);
  margin-bottom: var(--bl-spacing-xl);
}

.demo-message {
  margin-top: var(--bl-spacing-md);
  padding: var(--bl-spacing-sm);
  background: var(--bl-bg-secondary);
  border-radius: var(--bl-border-radius-md);
}
</style>