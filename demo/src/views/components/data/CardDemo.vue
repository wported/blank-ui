<template>
  <div class="demo-page">
    <h1>BlCard</h1>
    <p class="demo-description">Карточки для группировки контента.</p>
    
    <CodeViewer :code="basicCardCode">
      <template #preview>
        <div class="demo-grid">
          <BlCard variant="default">
            <h3>Default карточка</h3>
            <p>Стандартная карточка с границей</p>
          </BlCard>
          
          <BlCard variant="outlined">
            <h3>Outlined карточка</h3>
            <p>Карточка с выделенной границей</p>
          </BlCard>
          
          <BlCard variant="elevated">
            <h3>Elevated карточка</h3>
            <p>Карточка с тенью</p>
          </BlCard>
        </div>
      </template>
    </CodeViewer>
    
    <CodeViewer :code="clickableCardCode">
      <template #preview>
        <div class="demo-grid">
          <BlCard variant="elevated" clickable @click="handleCardClick('Product')">
            <h3>Товар</h3>
            <p>Нажмите для просмотра деталей</p>
          </BlCard>
        </div>
      </template>
    </CodeViewer>
    
    <CodeViewer :code="slotsCardCode">
      <template #preview>
        <BlCard variant="elevated">
          <template #header>
            <div class="card-header">
              <h3>Заголовок карточки</h3>
              <BlBadge variant="primary">Новый</BlBadge>
            </div>
          </template>
          
          <p>Основной контент карточки. Здесь может быть любая информация.</p>
          
          <template #footer>
            <div class="card-footer">
              <BlButton size="small">Подробнее</BlButton>
              <BlButton size="small" variant="secondary">Отмена</BlButton>
            </div>
          </template>
        </BlCard>
      </template>
    </CodeViewer>
    
    <CodeViewer :code="productsCardCode">
      <template #preview>
        <div class="demo-products">
          <BlCard v-for="product in products" :key="product.id" variant="elevated" clickable>
            <div class="product-image">🖼️</div>
            <h3>{{ product.name }}</h3>
            <p class="product-price">{{ product.price }} ₽</p>
          </BlCard>
        </div>
      </template>
    </CodeViewer>
  </div>
</template>

<script setup lang="ts">
import CodeViewer from '../../../components/CodeViewer.vue'

const products = [
  { id: 1, name: 'Ноутбук', price: 50000, rating: 5 },
  { id: 2, name: 'Смартфон', price: 30000, rating: 4 },
  { id: 3, name: 'Наушники', price: 5000, rating: 4 },
  { id: 4, name: 'Клавиатура', price: 3000, rating: 3 }
]

const handleCardClick = (type: string) => {
  console.log(`Clicked on ${type} card`)
}

const basicCardCode = `<BlCard variant="default">
  <h3>Default карточка</h3>
  <p>Стандартная карточка с границей</p>
</BlCard>

<BlCard variant="outlined">
  <h3>Outlined карточка</h3>
  <p>Карточка с выделенной границей</p>
</BlCard>

<BlCard variant="elevated">
  <h3>Elevated карточка</h3>
  <p>Карточка с тенью</p>
</BlCard>`

const clickableCardCode = `<BlCard variant="elevated" clickable @click="handleClick">
  <h3>Товар</h3>
  <p>Нажмите для просмотра деталей</p>
</BlCard>`

const slotsCardCode = `<BlCard variant="elevated">
  <template #header>
    <div class="card-header">
      <h3>Заголовок карточки</h3>
      <BlBadge variant="primary">Новый</BlBadge>
    </div>
  </template>
  
  <p>Основной контент карточки...</p>
  
  <template #footer>
    <BlButton size="small">Подробнее</BlButton>
    <BlButton size="small" variant="secondary">Отмена</BlButton>
  </template>
</BlCard>`

const productsCardCode = `<div class="products-grid">
  <BlCard v-for="product in products" :key="product.id" variant="elevated" clickable>
    <div class="product-image">🖼️</div>
    <h3>{{ product.name }}</h3>
    <p class="product-price">{{ product.price }} ₽</p>
  </BlCard>
</div>`
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

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--bl-spacing-lg);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h3 {
  margin: 0;
}

.card-footer {
  display: flex;
  gap: var(--bl-spacing-sm);
  justify-content: flex-end;
}

.demo-products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--bl-spacing-lg);
}

.product-image {
  font-size: 48px;
  text-align: center;
  margin-bottom: var(--bl-spacing-md);
}

.product-price {
  font-size: var(--bl-font-size-lg);
  font-weight: bold;
  color: var(--bl-color-primary);
}
</style>