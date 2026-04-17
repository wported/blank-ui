<template>
  <div
    class="bl-sidebar"
    :class="{ 'bl-sidebar--collapsed': isCollapsed }"
  >
    <div class="bl-sidebar__header">
      <div class="bl-sidebar__title">
        <slot name="header">
          <span
            v-if="!isCollapsed"
            class="bl-sidebar__title-text"
          >{{ title }}</span>
        </slot>
      </div>
      <button
        v-if="collapsible"
        class="bl-sidebar__toggle"
        @click.stop="toggleCollapse"
        :title="isCollapsed ? 'Развернуть' : 'Свернуть'"
      >
        {{ isCollapsed ? '☰' : '←' }}
      </button>
    </div>
    <div class="bl-sidebar__content">
      <slot />
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { ref, watch } from 'vue'

export interface BlSidebarProps {
  title?: string
  icon?: string
  collapsed?: boolean
  collapsible?: boolean
}

const props = withDefaults(defineProps<BlSidebarProps>(), {
  title: 'Меню',
  icon: '☰',
  collapsible: true,
  collapsed: false
})

const emit = defineEmits<{
  'update:collapsed': [value: boolean]
}>()

const isCollapsed = ref(props.collapsed)

// Следим за изменением props.collapsed извне
watch(() => props.collapsed, (newVal) => {
  if (newVal !== isCollapsed.value) {
    isCollapsed.value = newVal
  }
})

const toggleCollapse = () => {
  const newValue = !isCollapsed.value
  isCollapsed.value = newValue
  emit('update:collapsed', newValue)
}
</script>

<style scoped>
.bl-sidebar {
  width: 260px;
  background: var(--bl-bg-secondary);
  border-right: 1px solid var(--bl-border-color);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.bl-sidebar--collapsed {
  width: 68px;
}

.bl-sidebar__header {
  padding: 20px 16px;
  border-bottom: 1px solid var(--bl-border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  background: var(--bl-bg-primary);
}

.bl-sidebar--collapsed .bl-sidebar__header {
  padding: 20px 12px;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
}

.bl-sidebar__title {
  flex: 1;
  overflow: hidden;
}

.bl-sidebar--collapsed .bl-sidebar__title {
  flex: none;
}

.bl-sidebar__title-text {
  font-size: 18px;
  font-weight: 600;
  background: linear-gradient(135deg, var(--bl-color-primary), var(--bl-color-primary-hover));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bl-sidebar__title-icon {
  font-size: 28px;
  display: block;
  text-align: center;
}

.bl-sidebar__toggle {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--bl-bg-tertiary);
  border: 1px solid var(--bl-border-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: var(--bl-text-secondary);
  font-size: 16px;
  flex-shrink: 0;
}

.bl-sidebar--collapsed .bl-sidebar__toggle {
  background: var(--bl-color-primary);
  border-color: var(--bl-color-primary);
  color: white;
}

.bl-sidebar__toggle:hover {
  background: var(--bl-color-primary);
  color: white;
  border-color: var(--bl-color-primary);
  transform: scale(1.05);
}

.bl-sidebar__content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  overflow-x: hidden;
}

.bl-sidebar--collapsed .bl-sidebar__content {
  padding: 16px 8px;
}

/* Стилизация скроллбара */
.bl-sidebar__content::-webkit-scrollbar {
  width: 4px;
}

.bl-sidebar__content::-webkit-scrollbar-track {
  background: var(--bl-bg-tertiary);
}

.bl-sidebar__content::-webkit-scrollbar-thumb {
  background: var(--bl-color-primary);
  border-radius: 4px;
}

/* Адаптация для вложенных компонентов */
.bl-sidebar--collapsed .bl-sidebar__content :deep(.bl-menu__item) {
  justify-content: center;
  padding: 10px;
}

.bl-sidebar--collapsed .bl-sidebar__content :deep(.bl-menu__icon) {
  margin-right: 0;
  font-size: 20px;
}

.bl-sidebar--collapsed .bl-sidebar__content :deep(.bl-menu__label) {
  display: none;
}

.bl-sidebar--collapsed .bl-sidebar__content :deep(.bl-menu--vertical .bl-menu__item:not(:last-child)) {
  border-bottom: none;
}
</style>