<template>
  <div class="demo-page">
    <h1>BlAutocomplete</h1>
    <p class="demo-description">Поле ввода с автодополнением.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <BlAutocomplete
          v-model="selected"
          :options="options"
          label="Поиск города"
          placeholder="Начните вводить..."
        />
        <div class="demo-message">Выбрано: {{ selected || 'ничего' }}</div>
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

const selected = ref('')
const options = [
  { label: 'Москва', value: 'moscow' },
  { label: 'Санкт-Петербург', value: 'spb' },
  { label: 'Новосибирск', value: 'novosibirsk' },
  { label: 'Екатеринбург', value: 'ekaterinburg' },
  { label: 'Казань', value: 'kazan' },
  { label: 'Нижний Новгород', value: 'nnovgorod' }
]

const basicCode = `<BlAutocomplete 
  v-model="selected" 
  :options="[
    { label: 'Москва', value: 'moscow' },
    { label: 'Санкт-Петербург', value: 'spb' },
    { label: 'Новосибирск', value: 'novosibirsk' }
  ]" 
  label="Поиск города" 
  placeholder="Начните вводить..." 
/>`
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