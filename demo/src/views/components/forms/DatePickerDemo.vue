<template>
  <div class="demo-page">
    <h1>BlDatePicker</h1>
    <p class="demo-description">Выбор даты.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <BlDatePicker
          v-model="date"
          label="Выберите дату"
        />
        <div class="demo-message">Выбрано: {{ date || 'не выбрано' }}</div>
      </template>
    </CodeViewer>

    <CodeViewer :code="rangeCode">
      <template #preview>
        <BlDatePicker
          v-model="dateRange"
          label="Дата с ограничениями"
          min="2024-01-01"
          max="2024-12-31"
        />
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

const date = ref('')
const dateRange = ref('')

const basicCode = `<BlDatePicker v-model="date" label="Выберите дату" />`

const rangeCode = `<BlDatePicker v-model="date" label="Дата с ограничениями" min="2024-01-01" max="2024-12-31" />`
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