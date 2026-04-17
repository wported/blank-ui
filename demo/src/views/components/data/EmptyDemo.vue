<template>
  <div class="demo-page">
    <h1>BlEmpty</h1>
    <p class="demo-description">Компонент для отображения пустых состояний.</p>
    
    <div class="demo-section">
      <h2>Базовое использование</h2>
      <BlEmpty title="Нет данных" description="Здесь пока ничего нет" />
    </div>
    
    <div class="demo-section">
      <h2>С кастомной иконкой</h2>
      <div class="demo-grid">
        <BlEmpty title="Нет сообщений">
          <template #icon>
            <span style="font-size: 48px;">📭</span>
          </template>
        </BlEmpty>
        
        <BlEmpty title="Нет пользователей">
          <template #icon>
            <span style="font-size: 48px;">👥</span>
          </template>
        </BlEmpty>
        
        <BlEmpty title="Нет файлов">
          <template #icon>
            <span style="font-size: 48px;">📁</span>
          </template>
        </BlEmpty>
      </div>
    </div>
    
    <div class="demo-section">
      <h2>С действием</h2>
      <BlEmpty title="Нет элементов" description="Начните добавлять элементы">
        <template #action>
          <BlButton variant="primary" @click="handleAdd">Добавить элемент</BlButton>
        </template>
      </BlEmpty>
    </div>
    
    <div class="demo-section">
      <h2>Пример с фильтрацией</h2>
      <div class="demo-filter-example">
        <div class="demo-controls">
          <BlInput v-model="searchText" placeholder="Поиск..." />
          <BlButton @click="clearSearch" variant="secondary">Очистить</BlButton>
        </div>
        
        <div v-if="filteredItems.length === 0">
          <BlEmpty title="Ничего не найдено" description="Попробуйте изменить поисковый запрос">
            <template #icon>🔍</template>
          </BlEmpty>
        </div>
        
        <div v-else class="demo-items">
          <div v-for="item in filteredItems" :key="item" class="demo-item">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const searchText = ref('')

const items = [
  'Яблоко', 'Банан', 'Апельсин', 'Груша', 'Виноград',
  'Клубника', 'Манго', 'Киви', 'Ананас', 'Арбуз'
]

const filteredItems = computed(() => {
  if (!searchText.value) return items
  return items.filter(item => 
    item.toLowerCase().includes(searchText.value.toLowerCase())
  )
})

const handleAdd = () => {
  console.log('Add new item')
}

const clearSearch = () => {
  searchText.value = ''
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--bl-spacing-md);
}

.demo-controls {
  display: flex;
  gap: var(--bl-spacing-sm);
  margin-bottom: var(--bl-spacing-md);
}

.demo-items {
  margin-top: var(--bl-spacing-md);
}

.demo-item {
  padding: var(--bl-spacing-sm) var(--bl-spacing-md);
  border-bottom: 1px solid var(--bl-border-color);
  color: var(--bl-text-primary);
}

.demo-item:last-child {
  border-bottom: none;
}
</style>