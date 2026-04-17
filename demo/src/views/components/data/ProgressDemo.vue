<template>
  <div class="demo-page">
    <h1>BlProgress</h1>
    <p class="demo-description">Индикатор прогресса для отображения выполнения задач.</p>
    
    <div class="demo-section">
      <h2>Варианты</h2>
      <div class="demo-progress-list">
        <div>
          <label>Default</label>
          <BlProgress :value="45" variant="default" />
        </div>
        <div>
          <label>Primary</label>
          <BlProgress :value="60" variant="primary" />
        </div>
        <div>
          <label>Success</label>
          <BlProgress :value="75" variant="success" />
        </div>
        <div>
          <label>Warning</label>
          <BlProgress :value="50" variant="warning" />
        </div>
        <div>
          <label>Danger</label>
          <BlProgress :value="30" variant="danger" />
        </div>
      </div>
    </div>
    
    <div class="demo-section">
      <h2>С подписью</h2>
      <div class="demo-progress-list">
        <BlProgress :value="65" show-label label="Загрузка файлов" />
        <BlProgress :value="80" show-label label="Обработка данных" />
        <BlProgress :value="45" show-label label="Установка компонентов" />
      </div>
    </div>
    
    <div class="demo-section">
      <h2>С процентом</h2>
      <div class="demo-progress-list">
        <BlProgress :value="33" show-percentage />
        <BlProgress :value="66" show-percentage />
        <BlProgress :value="100" show-percentage variant="success" />
      </div>
    </div>
    
    <div class="demo-section">
      <h2>Интерактивный пример</h2>
      <div class="demo-interactive">
        <BlProgress :value="progressValue" show-label show-percentage label="Прогресс" />
        <div class="demo-controls">
          <BlButton @click="decreaseProgress">-10</BlButton>
          <span>{{ progressValue }}%</span>
          <BlButton @click="increaseProgress">+10</BlButton>
          <BlButton @click="resetProgress" variant="secondary">Сброс</BlButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const progressValue = ref(50)

const increaseProgress = () => {
  if (progressValue.value < 100) {
    progressValue.value = Math.min(100, progressValue.value + 10)
  }
}

const decreaseProgress = () => {
  if (progressValue.value > 0) {
    progressValue.value = Math.max(0, progressValue.value - 10)
  }
}

const resetProgress = () => {
  progressValue.value = 0
}
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

.demo-section {
  margin-bottom: var(--bl-spacing-xl);
  padding-bottom: var(--bl-spacing-xl);
  border-bottom: 1px solid var(--bl-border-color);
}

.demo-section h2 {
  margin-bottom: var(--bl-spacing-md);
  color: var(--bl-text-primary);
  font-size: var(--bl-font-size-lg);
}

.demo-progress-list {
  display: flex;
  flex-direction: column;
  gap: var(--bl-spacing-lg);
}

.demo-progress-list label {
  display: block;
  margin-bottom: var(--bl-spacing-xs);
  color: var(--bl-text-secondary);
  font-size: var(--bl-font-size-sm);
}

.demo-interactive {
  display: flex;
  flex-direction: column;
  gap: var(--bl-spacing-md);
}

.demo-controls {
  display: flex;
  gap: var(--bl-spacing-sm);
  align-items: center;
  justify-content: center;
}
</style>