<template>
  <div class="demo-page">
    <h1>BlAvatar</h1>
    <p class="demo-description">Аватары для отображения пользователей.</p>
    
    <div class="demo-section">
      <h2>Размеры</h2>
      <div class="demo-grid">
        <BlAvatar size="xs" name="JD" />
        <BlAvatar size="sm" name="JD" />
        <BlAvatar size="md" name="JD" />
        <BlAvatar size="lg" name="JD" />
        <BlAvatar size="xl" name="JD" />
      </div>
    </div>
    
    <div class="demo-section">
      <h2>С инициалами</h2>
      <div class="demo-grid">
        <BlAvatar name="John Doe" />
        <BlAvatar name="Jane Smith" />
        <BlAvatar name="Alex Johnson" />
        <BlAvatar name="Maria Garcia" />
      </div>
    </div>
    
    <div class="demo-section">
      <h2>С изображением</h2>
      <div class="demo-grid">
        <BlAvatar src="https://i.pravatar.cc/150?img=1" />
        <BlAvatar src="https://i.pravatar.cc/150?img=2" />
        <BlAvatar src="https://i.pravatar.cc/150?img=3" />
        <BlAvatar src="https://i.pravatar.cc/150?img=4" />
      </div>
    </div>
    
    <div class="demo-section">
      <h2>С кастомным цветом</h2>
      <div class="demo-grid">
        <BlAvatar name="JD" bg-color="#3b82f6" />
        <BlAvatar name="AB" bg-color="#10b981" />
        <BlAvatar name="CV" bg-color="#ef4444" />
        <BlAvatar name="XY" bg-color="#f59e0b" />
      </div>
    </div>
    
    <div class="demo-section">
      <h2>Форма</h2>
      <div class="demo-grid">
        <BlAvatar name="Круглый" circle />
        <BlAvatar name="Квадратный" :circle="false" />
      </div>
    </div>
    
    <div class="demo-section">
      <h2>Группа аватаров</h2>
      <div class="demo-avatar-group">
        <BlAvatar name="JD" />
        <BlAvatar name="AB" />
        <BlAvatar name="CV" />
        <BlAvatar name="XY" />
        <BlAvatar name="+5" bg-color="#6b7280" />
      </div>
    </div>
  </div>
</template>

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

.demo-avatar-group {
  display: flex;
  gap: calc(-1 * var(--bl-spacing-sm));
}

.demo-avatar-group > * {
  border: 2px solid var(--bl-bg-primary);
  border-radius: 50%;
}
</style>