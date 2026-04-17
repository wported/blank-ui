<template>
  <div class="demo-page">
    <h1>BlSpinner</h1>
    <p class="demo-description">Спиннер для отображения процесса загрузки.</p>
    
    <div class="demo-section">
      <h2>Размеры</h2>
      <div class="demo-grid">
        <div class="demo-spinner-item">
          <BlSpinner size="small" />
          <span>Small</span>
        </div>
        <div class="demo-spinner-item">
          <BlSpinner size="medium" />
          <span>Medium</span>
        </div>
        <div class="demo-spinner-item">
          <BlSpinner size="large" />
          <span>Large</span>
        </div>
      </div>
    </div>
    
    <div class="demo-section">
      <h2>Цвета</h2>
      <div class="demo-grid">
        <div class="demo-spinner-item">
          <BlSpinner color="#3b82f6" />
          <span>Синий</span>
        </div>
        <div class="demo-spinner-item">
          <BlSpinner color="#10b981" />
          <span>Зеленый</span>
        </div>
        <div class="demo-spinner-item">
          <BlSpinner color="#ef4444" />
          <span>Красный</span>
        </div>
        <div class="demo-spinner-item">
          <BlSpinner color="#f59e0b" />
          <span>Оранжевый</span>
        </div>
      </div>
    </div>
    
    <div class="demo-section">
      <h2>Пример с загрузкой</h2>
      <div class="demo-loading">
        <div class="demo-controls">
          <BlButton @click="startLoading" :disabled="isLoading">Загрузить данные</BlButton>
          <BlButton @click="stopLoading" variant="secondary" :disabled="!isLoading">Остановить</BlButton>
        </div>
        
        <div v-if="isLoading" class="demo-overlay">
          <BlSpinner size="large" />
          <p>Загрузка данных...</p>
        </div>
        
        <div v-else-if="loadedData" class="demo-data">
          <div v-for="item in loadedData" :key="item.id" class="demo-item">
            <strong>{{ item.name }}</strong> - {{ item.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isLoading = ref(false)
const loadedData = ref<any[] | null>(null)

const startLoading = async () => {
  isLoading.value = true
  loadedData.value = null
  
  // Симуляция загрузки
  setTimeout(() => {
    loadedData.value = [
      { id: 1, name: 'Данные 1', value: 'Значение 1' },
      { id: 2, name: 'Данные 2', value: 'Значение 2' },
      { id: 3, name: 'Данные 3', value: 'Значение 3' }
    ]
    isLoading.value = false
  }, 2000)
}

const stopLoading = () => {
  isLoading.value = false
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

.demo-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--bl-spacing-xl);
  align-items: flex-end;
}

.demo-spinner-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--bl-spacing-sm);
  color: var(--bl-text-secondary);
}

.demo-loading {
  position: relative;
  min-height: 200px;
}

.demo-controls {
  display: flex;
  gap: var(--bl-spacing-sm);
  margin-bottom: var(--bl-spacing-md);
}

.demo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--bl-bg-overlay);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--bl-spacing-md);
  border-radius: var(--bl-border-radius-lg);
  color: white;
}

.demo-data {
  display: flex;
  flex-direction: column;
  gap: var(--bl-spacing-sm);
}

.demo-item {
  padding: var(--bl-spacing-sm) var(--bl-spacing-md);
  background-color: var(--bl-bg-secondary);
  border-radius: var(--bl-border-radius-md);
  color: var(--bl-text-primary);
}
</style>