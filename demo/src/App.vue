<template>
  <div class="demo-app">
    <!-- Sidebar -->
    <aside class="demo-sidebar">
      <div class="demo-sidebar__header">
        <div class="demo-logo">
          <div class="demo-logo__icon">🎨</div>
          <div class="demo-logo__text">
            <h2>Blank UI</h2>
            <p>Component Library</p>
          </div>
        </div>
      </div>
      
      <nav class="demo-nav">
        <div v-for="group in filteredMenu" :key="group.name" class="demo-nav-group">
          <div 
            class="demo-nav-group__title" 
            @click="toggleGroup(group.name)"
          >
            <span class="demo-nav-group__title-text">{{ group.title }}</span>
            <span class="demo-nav-group__arrow" :class="{ 'rotated': expandedGroups.includes(group.name) }">
              ▼
            </span>
          </div>
          
          <transition name="slide">
            <div v-show="expandedGroups.includes(group.name)" class="demo-nav-group__items">
              <router-link
                v-for="item in group.items"
                :key="item.path"
                :to="item.path"
                class="demo-nav-link"
                active-class="demo-nav-link--active"
              >
                {{ item.name }}
                <div v-if="item.isNew" class="demo-nav-link__badge">New</div>
              </router-link>
            </div>
          </transition>
        </div>
      </nav>
      
      <div class="demo-sidebar__footer">
        <div class="demo-theme">
          <button class="demo-theme__btn" @click="toggleTheme">
            <span>{{ isDark ? '🌙 Dark' : '☀️ Light' }}</span>
          </button>
        </div>
        <div class="demo-version">
          <span>v1.0.0</span>
        </div>
      </div>
    </aside>
    
    <!-- Main Content -->
    <main class="demo-main">
      <div class="demo-header">
        <div class="demo-header__left">
          <div class="demo-breadcrumb">
            <span class="demo-breadcrumb__item">Components</span>
            <span class="demo-breadcrumb__separator">/</span>
            <span class="demo-breadcrumb__item demo-breadcrumb__item--active">
              {{ currentComponent }}
            </span>
          </div>
        </div>
        
        <div class="demo-header__right">
          <div class="demo-search">
            <span class="demo-search__icon">🔍</span>
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Search components..."
              class="demo-search__input"
            />
          </div>
          <a 
            href="https://github.com/wported/blank-ui" 
            target="_blank"
            class="demo-github"
          >
            <span>⭐</span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
      
      <div class="demo-content">
        <router-view v-slot="{ Component }">
          <transition name="page" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '../../src/composables/useTheme'

const route = useRoute()
const { isDark, toggleTheme, initTheme } = useTheme()

// Состояние
const searchQuery = ref('')
const expandedGroups = ref<string[]>(['forms', 'data', 'navigation', 'feedback'])

// Меню
const menu = [
  {
    name: 'forms',
    title: 'Формы',
    items: [
      { name: 'BlButton', path: '/forms/button', isNew: false },
      { name: 'BlInput', path: '/forms/input', isNew: false },
      { name: 'BlSelect', path: '/forms/select', isNew: false },
      { name: 'BlCheckbox', path: '/forms/checkbox', isNew: false },
      { name: 'BlRadio', path: '/forms/radio', isNew: false },
      { name: 'BlSwitch', path: '/forms/switch', isNew: true },
      { name: 'BlSlider', path: '/forms/slider', isNew: true },
      { name: 'BlDatePicker', path: '/forms/date-picker', isNew: true },
      { name: 'BlTimePicker', path: '/forms/time-picker', isNew: true },
      { name: 'BlFileUpload', path: '/forms/file-upload', isNew: true },
      { name: 'BlRating', path: '/forms/rating', isNew: true },
      { name: 'BlAutocomplete', path: '/forms/autocomplete', isNew: true },
      { name: 'BlColorPicker', path: '/forms/color-picker', isNew: true },
      { name: 'BlPhoneInput', path: '/forms/phone-input', isNew: true },
      { name: 'BlTextarea', path: '/forms/textarea', isNew: true }
    ]
  },
  {
    name: 'data',
    title: 'Данные',
    items: [
      { name: 'BlTable', path: '/data/table', isNew: true },
      { name: 'BlTag', path: '/data/tag', isNew: true },
      { name: 'BlBadge', path: '/data/badge', isNew: false },
      { name: 'BlAvatar', path: '/data/avatar', isNew: true },
      { name: 'BlProgress', path: '/data/progress', isNew: true },
      { name: 'BlPagination', path: '/data/pagination', isNew: true },
      { name: 'BlEmpty', path: '/data/empty', isNew: true },
      { name: 'BlSkeleton', path: '/data/skeleton', isNew: true },
      { name: 'BlSpinner', path: '/data/spinner', isNew: false },
      { name: 'BlCard', path: '/data/card', isNew: false }
    ]
  },
  {
    name: 'navigation',
    title: 'Навигация',
    items: [
      { name: 'BlTabs', path: '/navigation/tabs', isNew: true },
      { name: 'BlAccordion', path: '/navigation/accordion', isNew: true },
      { name: 'BlMenu', path: '/navigation/menu', isNew: true },
      { name: 'BlSteps', path: '/navigation/steps', isNew: true },
      { name: 'BlSidebar', path: '/navigation/sidebar', isNew: true },
      { name: 'BlNavbar', path: '/navigation/navbar', isNew: true },
      { name: 'BlBacktop', path: '/navigation/backtop', isNew: true },
      { name: 'BlBreadcrumb', path: '/navigation/breadcrumb', isNew: true },
      { name: 'BlDrawer', path: '/navigation/drawer', isNew: true },
      { name: 'BlModal', path: '/navigation/modal', isNew: false }
    ]
  },
  {
    name: 'feedback',
    title: 'Обратная связь',
    items: [
      { name: 'BlAlert', path: '/feedback/alert', isNew: false },
      { name: 'BlToast', path: '/feedback/toast', isNew: false },
      { name: 'BlTooltip', path: '/feedback/tooltip', isNew: true },
      { name: 'BlPopover', path: '/feedback/popover', isNew: true },
      { name: 'BlNotification', path: '/feedback/notification', isNew: true },
      { name: 'BlConfirmDialog', path: '/feedback/confirm-dialog', isNew: true },
      { name: 'BlLoading', path: '/feedback/loading', isNew: true }
    ]
  }
]

// Фильтрация меню по поиску
const filteredMenu = computed(() => {
  if (!searchQuery.value) return menu
  
  const query = searchQuery.value.toLowerCase()
  return menu
    .map(group => ({
      ...group,
      items: group.items.filter(item => 
        item.name.toLowerCase().includes(query)
      )
    }))
    .filter(group => group.items.length > 0)
})

// Текущий компонент для breadcrumb
const currentComponent = computed(() => {
  const path = route.path
  for (const group of menu) {
    const item = group.items.find(i => i.path === path)
    if (item) return item.name
  }
  return 'Components'
})

// Методы
const toggleGroup = (groupName: string) => {
  const index = expandedGroups.value.indexOf(groupName)
  if (index === -1) {
    expandedGroups.value.push(groupName)
  } else {
    expandedGroups.value.splice(index, 1)
  }
}

// Сохраняем состояние в localStorage
watch(expandedGroups, (val) => {
  localStorage.setItem('demo-expanded-groups', JSON.stringify(val))
}, { deep: true })

onMounted(() => {
  initTheme()
  
  // Восстанавливаем состояние
  const savedGroups = localStorage.getItem('demo-expanded-groups')
  if (savedGroups !== null) {
    expandedGroups.value = JSON.parse(savedGroups)
  }
})
</script>

<style scoped>
/* Основные переменные */
.demo-app {
  display: flex;
  min-height: 100vh;
  background-color: var(--bl-bg-primary);
}

/* ========== Sidebar ========== */
.demo-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  background: linear-gradient(135deg, var(--bl-bg-secondary) 0%, var(--bl-bg-primary) 100%);
  border-right: 1px solid var(--bl-border-color);
  display: flex;
  flex-direction: column;
  z-index: 100;
  overflow-y: auto;
}

/* Стилизация скроллбара */
.demo-sidebar::-webkit-scrollbar {
  width: 4px;
}

.demo-sidebar::-webkit-scrollbar-track {
  background: var(--bl-bg-tertiary);
}

.demo-sidebar::-webkit-scrollbar-thumb {
  background: var(--bl-color-primary);
  border-radius: 4px;
}

.demo-sidebar__header {
  padding: 28px 24px;
  border-bottom: 1px solid var(--bl-border-color);
}

.demo-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.demo-logo__icon {
  font-size: 36px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.demo-logo__text h2 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  background: linear-gradient(135deg, var(--bl-color-primary), var(--bl-color-primary-hover));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.demo-logo__text p {
  margin: 4px 0 0;
  font-size: 12px;
  color: var(--bl-text-secondary);
}

/* Navigation */
.demo-nav {
  flex: 1;
  padding: 20px 16px;
}

.demo-nav-group {
  margin-bottom: 16px;
}

.demo-nav-group__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: var(--bl-bg-tertiary);
  margin-bottom: 4px;
}

.demo-nav-group__title:hover {
  background: var(--bl-bg-tertiary);
  opacity: 0.8;
}

.demo-nav-group__title-text {
  font-size: 14px;
  font-weight: 600;
  color: var(--bl-text-primary);
}

.demo-nav-group__arrow {
  font-size: 12px;
  color: var(--bl-text-secondary);
  transition: transform 0.3s ease;
}

.demo-nav-group__arrow.rotated {
  transform: rotate(-180deg);
}

.demo-nav-group__items {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-left: 8px;
  margin-top: 4px;
}

/* Ссылки навигации */
.demo-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-radius: 8px;
  color: var(--bl-text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 13px;
}

.demo-nav-link:hover {
  background: var(--bl-bg-tertiary);
  color: var(--bl-text-primary);
  transform: translateX(4px);
}

.demo-nav-link--active {
  background: linear-gradient(135deg, var(--bl-color-primary), var(--bl-color-primary-hover));
  color: white;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
}

.demo-nav-link__badge {
  padding: 2px 6px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  font-size: 10px;
  font-weight: 600;
}

.demo-nav-link--active .demo-nav-link__badge {
  background: rgba(255, 255, 255, 0.3);
}

/* Анимация сворачивания */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Footer */
.demo-sidebar__footer {
  padding: 20px 16px;
  border-top: 1px solid var(--bl-border-color);
}

.demo-theme__btn {
  width: 100%;
  padding: 10px 16px;
  border-radius: 10px;
  background: var(--bl-bg-tertiary);
  border: 1px solid var(--bl-border-color);
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--bl-text-primary);
  font-size: 14px;
  font-weight: 500;
}

.demo-theme__btn:hover {
  background: var(--bl-color-primary);
  color: white;
  transform: translateY(-2px);
}

.demo-version {
  text-align: center;
  margin-top: 12px;
  font-size: 12px;
  color: var(--bl-text-secondary);
}

/* ========== Main Content ========== */
.demo-main {
  flex: 1;
  margin-left: 280px;
  min-height: 100vh;
}

/* Header */
.demo-header {
  position: sticky;
  top: 0;
  background: var(--bl-bg-primary);
  border-bottom: 1px solid var(--bl-border-color);
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 90;
  backdrop-filter: blur(10px);
  background-color: rgba(var(--bl-bg-primary-rgb), 0.95);
}

.demo-header__left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.demo-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.demo-breadcrumb__item {
  color: var(--bl-text-secondary);
}

.demo-breadcrumb__item--active {
  color: var(--bl-color-primary);
  font-weight: 600;
}

.demo-breadcrumb__separator {
  color: var(--bl-text-disabled);
}

.demo-header__right {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* Поиск */
.demo-search {
  position: relative;
}

.demo-search__icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  color: var(--bl-text-secondary);
}

.demo-search__input {
  padding: 8px 12px 8px 36px;
  width: 260px;
  border: 1px solid var(--bl-border-color);
  border-radius: 10px;
  background: var(--bl-bg-secondary);
  color: var(--bl-text-primary);
  transition: all 0.3s ease;
  font-size: 14px;
}

.demo-search__input:focus {
  outline: none;
  border-color: var(--bl-color-primary);
  width: 320px;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.demo-search__input::placeholder {
  color: var(--bl-text-disabled);
}

/* GitHub кнопка */
.demo-github {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 10px;
  background: var(--bl-bg-secondary);
  color: var(--bl-text-primary);
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 14px;
  font-weight: 500;
}

.demo-github:hover {
  background: var(--bl-color-primary);
  color: white;
  transform: translateY(-2px);
}

/* Content */
.demo-content {
  padding: 32px;
  min-height: calc(100vh - 73px);
}

/* Анимация страницы */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Адаптивность */
@media (max-width: 768px) {
  .demo-sidebar {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 200;
  }
  
  .demo-sidebar.open {
    transform: translateX(0);
  }
  
  .demo-main {
    margin-left: 0;
  }
  
  .demo-search__input {
    width: 180px;
  }
  
  .demo-search__input:focus {
    width: 200px;
  }
  
  .demo-github span:last-child {
    display: none;
  }
  
  .demo-content {
    padding: 20px;
  }
  
  .demo-header {
    padding: 12px 20px;
  }
}
</style>