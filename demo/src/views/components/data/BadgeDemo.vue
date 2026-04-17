<template>
  <div class="demo-page">
    <h1>BlBadge</h1>
    <p class="demo-description">Бейджи для отображения статусов и счетчиков.</p>
    
    <div class="demo-section">
      <h2>Варианты</h2>
      <div class="demo-grid">
        <BlBadge variant="default">Default</BlBadge>
        <BlBadge variant="primary">Primary</BlBadge>
        <BlBadge variant="success">Success</BlBadge>
        <BlBadge variant="warning">Warning</BlBadge>
        <BlBadge variant="danger">Danger</BlBadge>
        <BlBadge variant="info">Info</BlBadge>
      </div>
    </div>
    
    <div class="demo-section">
      <h2>Размеры</h2>
      <div class="demo-grid">
        <BlBadge size="small" variant="primary">Small</BlBadge>
        <BlBadge size="medium" variant="primary">Medium</BlBadge>
        <BlBadge size="large" variant="primary">Large</BlBadge>
      </div>
    </div>
    
    <div class="demo-section">
      <h2>Использование в контексте</h2>
      <div class="demo-context">
        <BlCard>
          <div class="demo-notification">
            <span>У вас есть новые сообщения</span>
            <BlBadge variant="danger">3</BlBadge>
          </div>
        </BlCard>
        
        <BlCard>
          <div class="demo-notification">
            <span>Статус заказа</span>
            <BlBadge variant="success">Доставлен</BlBadge>
          </div>
        </BlCard>
        
        <BlCard>
          <div class="demo-notification">
            <span>Уровень доступа</span>
            <BlBadge variant="warning">Требуется подтверждение</BlBadge>
          </div>
        </BlCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

.demo-context {
  display: flex;
  flex-direction: column;
  gap: var(--bl-spacing-md);
}

.demo-notification {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>