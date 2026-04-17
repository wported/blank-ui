<template>
  <div class="demo-page">
    <h1>BlTag</h1>
    <p class="demo-description">Теги для маркировки и группировки информации.</p>
    
    <div class="demo-section">
      <h2>Варианты</h2>
      <div class="demo-grid">
        <BlTag variant="default">Default</BlTag>
        <BlTag variant="primary">Primary</BlTag>
        <BlTag variant="success">Success</BlTag>
        <BlTag variant="warning">Warning</BlTag>
        <BlTag variant="danger">Danger</BlTag>
        <BlTag variant="info">Info</BlTag>
      </div>
    </div>
    
    <div class="demo-section">
      <h2>Размеры</h2>
      <div class="demo-grid">
        <BlTag size="small" variant="primary">Small</BlTag>
        <BlTag size="medium" variant="primary">Medium</BlTag>
        <BlTag size="large" variant="primary">Large</BlTag>
      </div>
    </div>
    
    <div class="demo-section">
      <h2>Закрываемые теги</h2>
      <div class="demo-grid">
        <BlTag v-for="tag in tags" :key="tag" closable @close="removeTag(tag)">
          {{ tag }}
        </BlTag>
      </div>
    </div>
    
    <div class="demo-section">
      <h2>Список тегов</h2>
      <div class="demo-tag-list">
        <BlTag variant="success">Активен</BlTag>
        <BlTag variant="warning">В ожидании</BlTag>
        <BlTag variant="danger">Заблокирован</BlTag>
        <BlTag variant="info">Новый</BlTag>
        <BlTag variant="primary">Рекомендуемый</BlTag>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tags = ref(['Vue', 'TypeScript', 'UI Kit', 'Компонент'])

const removeTag = (tag: string) => {
  tags.value = tags.value.filter(t => t !== tag)
}
</script>

<style scoped>
.demo-page {
  max-width: 1200px;
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
  gap: var(--bl-spacing-md);
  align-items: center;
}

.demo-tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--bl-spacing-sm);
}
</style>