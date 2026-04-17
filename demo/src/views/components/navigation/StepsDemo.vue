<template>
  <div class="demo-page">
    <h1>BlSteps</h1>
    <p class="demo-description">Индикатор шагов.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <BlSteps
          :steps="steps"
          :current-step="currentStep"
        />
        <div class="demo-controls">
          <BlButton
            @click="currentStep--"
            :disabled="currentStep === 0"
          >Назад</BlButton>
          <BlButton
            @click="currentStep++"
            :disabled="currentStep === steps.length - 1"
          >Вперед</BlButton>
        </div>
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

const currentStep = ref(1)
const steps = [
  { title: 'Шаг 1', description: 'Информация' },
  { title: 'Шаг 2', description: 'Детали' },
  { title: 'Шаг 3', description: 'Подтверждение' }
]

const basicCode = `<BlSteps :steps="[
  { title: 'Шаг 1', description: 'Информация' },
  { title: 'Шаг 2', description: 'Детали' },
  { title: 'Шаг 3', description: 'Подтверждение' }
]" :current-step="currentStep" />`
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

.demo-controls {
  margin-top: var(--bl-spacing-lg);
  display: flex;
  gap: var(--bl-spacing-md);
  justify-content: center;
}
</style>