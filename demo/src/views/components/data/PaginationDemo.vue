<template>
  <div class="demo-page">
    <h1>BlPagination</h1>
    <p class="demo-description">Пагинация для навигации по страницам.</p>
    
    <div class="demo-section">
      <h2>Базовая пагинация</h2>
      <BlPagination :total="10" :current="currentPage1" @update:current="currentPage1 = $event" />
      <div class="demo-info">Текущая страница: {{ currentPage1 }}</div>
    </div>
    
    <div class="demo-section">
      <h2>С разным количеством страниц</h2>
      <div class="demo-pagination-list">
        <div>
          <label>5 страниц</label>
          <BlPagination :total="5" :current="page5" @update:current="page5 = $event" />
        </div>
        <div>
          <label>10 страниц</label>
          <BlPagination :total="10" :current="page10" @update:current="page10 = $event" />
        </div>
        <div>
          <label>20 страниц</label>
          <BlPagination :total="20" :current="page20" @update:current="page20 = $event" />
        </div>
      </div>
    </div>
    
    <div class="demo-section">
      <h2>С разным siblingCount</h2>
      <div class="demo-pagination-list">
        <div>
          <label>siblingCount = 1</label>
          <BlPagination :total="20" :current="pageS1" :sibling-count="1" @update:current="pageS1 = $event" />
        </div>
        <div>
          <label>siblingCount = 2</label>
          <BlPagination :total="20" :current="pageS2" :sibling-count="2" @update:current="pageS2 = $event" />
        </div>
        <div>
          <label>siblingCount = 3</label>
          <BlPagination :total="20" :current="pageS3" :sibling-count="3" @update:current="pageS3 = $event" />
        </div>
      </div>
    </div>
    
    <div class="demo-section">
      <h2>Интерактивный пример с данными</h2>
      <div class="demo-data">
        <div class="demo-items">
          <div v-for="item in paginatedItems" :key="item.id" class="demo-item">
            {{ item.name }}
          </div>
        </div>
        <BlPagination :total="totalPages" :current="currentDataPage" @update:current="currentDataPage = $event" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const currentPage1 = ref(1)
const page5 = ref(1)
const page10 = ref(1)
const page20 = ref(1)
const pageS1 = ref(5)
const pageS2 = ref(5)
const pageS3 = ref(5)
const currentDataPage = ref(1)

const items = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Элемент ${i + 1}`
}))

const itemsPerPage = 10
const totalPages = Math.ceil(items.length / itemsPerPage)

const paginatedItems = computed(() => {
  const start = (currentDataPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return items.slice(start, end)
})
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

.demo-info {
  margin-top: var(--bl-spacing-sm);
  padding: var(--bl-spacing-sm);
  background-color: var(--bl-bg-secondary);
  border-radius: var(--bl-border-radius-md);
  text-align: center;
  color: var(--bl-text-secondary);
}

.demo-pagination-list {
  display: flex;
  flex-direction: column;
  gap: var(--bl-spacing-lg);
}

.demo-pagination-list label {
  display: block;
  margin-bottom: var(--bl-spacing-xs);
  color: var(--bl-text-secondary);
  font-size: var(--bl-font-size-sm);
}

.demo-data {
  display: flex;
  flex-direction: column;
  gap: var(--bl-spacing-md);
}

.demo-items {
  border: 1px solid var(--bl-border-color);
  border-radius: var(--bl-border-radius-md);
  overflow: hidden;
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