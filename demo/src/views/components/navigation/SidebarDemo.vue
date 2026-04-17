<template>
  <div class="demo-page">
    <h1>BlSidebar</h1>
    <p class="demo-description">Боковая панель с возможностью сворачивания.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <div class="demo-sidebar-container">
          <BlSidebar
            ref="sidebarRef"
            title="Навигация"
            icon="☰"
            :collapsed="isCollapsed"
            @update:collapsed="handleCollapse"
          >
            <BlMenu
              :items="menuItems"
              variant="vertical"
            />
          </BlSidebar>
          <div class="demo-sidebar-content">
            <div class="demo-content-header">
              <button
                class="demo-toggle-btn"
                @click="toggleSidebar"
              >
                {{ isCollapsed ? '☰ Развернуть' : '← Свернуть' }}
              </button>
              <h3>Основной контент</h3>
            </div>
            <p>Здесь отображается основной контент страницы. При сворачивании боковой панели, контент занимает все
              доступное пространство.</p>
            <p>Текущее состояние: <strong>{{ isCollapsed ? 'Свернута' : 'Развернута' }}</strong></p>
            <div class="demo-info">
              <p>💡 <strong>Подсказка:</strong> Кнопка сворачивания находится внутри боковой панели.
                В развернутом состоянии это стрелка "←", в свернутом - иконка "☰".</p>
            </div>
            <div class="demo-card-grid">
              <div class="demo-card">
                <h4>Карточка 1</h4>
                <p>Пример контента</p>
              </div>
              <div class="demo-card">
                <h4>Карточка 2</h4>
                <p>Пример контента</p>
              </div>
              <div class="demo-card">
                <h4>Карточка 3</h4>
                <p>Пример контента</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </CodeViewer>

    <CodeViewer :code="withoutToggleCode">
      <template #preview>
        <div class="demo-sidebar-container">
          <BlSidebar
            title="Фиксированное меню"
            :collapsible="false"
          >
            <BlMenu
              :items="simpleMenu"
              variant="vertical"
            />
          </BlSidebar>
          <div class="demo-sidebar-content">
            <h3>Содержимое без кнопки сворачивания</h3>
            <p>Эта боковая панель не имеет кнопки сворачивания.</p>
          </div>
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

const isCollapsed = ref(false)
const sidebarRef = ref()

const menuItems = [
  { label: 'Дашборд', icon: '📊', action: () => console.log('Dashboard') },
  { label: 'Пользователи', icon: '👥', action: () => console.log('Users') },
  { label: 'Настройки', icon: '⚙️', action: () => console.log('Settings') },
  { label: 'Профиль', icon: '👤', action: () => console.log('Profile') },
  { label: 'Сообщения', icon: '💬', action: () => console.log('Messages') },
  { label: 'Выход', icon: '🚪', action: () => console.log('Logout') }
]

const simpleMenu = [
  { label: 'Главная', icon: '🏠' },
  { label: 'О нас', icon: 'ℹ️' },
  { label: 'Контакты', icon: '📞' }
]

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}

const handleCollapse = (collapsed: boolean) => {
  isCollapsed.value = collapsed
}

const basicCode = `<div class="demo-sidebar-container">
  <BlSidebar 
    title="Навигация" 
    icon="☰"
    :collapsed="isCollapsed"
    @update:collapsed="handleCollapse"
  >
    <BlMenu :items="menuItems" variant="vertical" />
  </BlSidebar>
  <div class="demo-sidebar-content">
    <div class="demo-content-header">
      <button class="demo-toggle-btn" @click="toggleSidebar">
        {{ isCollapsed ? '☰ Развернуть' : '← Свернуть' }}
      </button>
      <h3>Основной контент</h3>
    </div>
    <p>Текущее состояние: {{ isCollapsed ? 'Свернута' : 'Развернута' }}</p>
  </div>
</div>

<script setup>
const isCollapsed = ref(false)

const menuItems = [
  { label: 'Дашборд', icon: '📊' },
  { label: 'Пользователи', icon: '👥' },
  { label: 'Настройки', icon: '⚙️' }
]

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}

const handleCollapse = (collapsed) => {
  isCollapsed.value = collapsed
}
<\/script>`

const withoutToggleCode = `<div class="demo-sidebar-container">
  <BlSidebar title="Фиксированное меню" :collapsible="false">
    <BlMenu :items="[
      { label: 'Главная', icon: '🏠' },
      { label: 'О нас', icon: 'ℹ️' },
      { label: 'Контакты', icon: '📞' }
    ]" variant="vertical" />
  </BlSidebar>
  <div class="demo-sidebar-content">
    <h3>Содержимое без кнопки сворачивания</h3>
    <p>Эта боковая панель не имеет кнопки сворачивания.</p>
  </div>
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

.demo-sidebar-container {
  display: flex;
  min-height: 500px;
  border: 1px solid var(--bl-border-color);
  border-radius: var(--bl-border-radius-lg);
  overflow: hidden;
  background: var(--bl-bg-primary);
}

.demo-sidebar-content {
  flex: 1;
  padding: 24px;
  background: var(--bl-bg-primary);
  transition: all 0.3s ease;
}

.demo-content-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.demo-content-header h3 {
  margin: 0;
  color: var(--bl-text-primary);
}

.demo-toggle-btn {
  padding: 8px 16px;
  background: var(--bl-bg-secondary);
  border: 1px solid var(--bl-border-color);
  border-radius: 8px;
  cursor: pointer;
  color: var(--bl-text-primary);
  font-size: 14px;
  transition: all 0.2s ease;
}

.demo-toggle-btn:hover {
  background: var(--bl-color-primary);
  color: white;
  border-color: var(--bl-color-primary);
  transform: translateY(-1px);
}

.demo-info {
  padding: 16px;
  background: var(--bl-bg-secondary);
  border-radius: 8px;
  border-left: 4px solid var(--bl-color-primary);
  margin: 20px 0;
}

.demo-info p {
  margin: 0;
  color: var(--bl-text-secondary);
}

.demo-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.demo-card {
  padding: 16px;
  background: var(--bl-bg-secondary);
  border-radius: 8px;
  border: 1px solid var(--bl-border-color);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.demo-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--bl-shadow-md);
}

.demo-card h4 {
  margin: 0 0 8px 0;
  color: var(--bl-text-primary);
}

.demo-card p {
  margin: 0;
  color: var(--bl-text-secondary);
  font-size: 14px;
}
</style>