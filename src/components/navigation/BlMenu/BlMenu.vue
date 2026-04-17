<template>
  <div :class="['bl-menu', `bl-menu--${variant}`]">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="bl-menu__item"
      @click="handleClick(item)"
    >
      <span
        v-if="item.icon"
        class="bl-menu__icon"
      >{{ item.icon }}</span>
      <span class="bl-menu__label">{{ item.label }}</span>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
export interface MenuItem {
  label: string
  icon?: string
  action?: () => void
}

export interface BlMenuProps {
  items: MenuItem[]
  variant?: 'vertical' | 'horizontal'
}

withDefaults(defineProps<BlMenuProps>(), {
  variant: 'vertical'
})

const handleClick = (item: MenuItem) => {
  if (item.action) {
    item.action()
  }
}
</script>

<style scoped>
.bl-menu--vertical {
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: transparent;
}

.bl-menu--horizontal {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.bl-menu__item {
  padding: 10px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  transition: all 0.2s ease;
  color: var(--bl-text-primary);
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-weight: 500;
}

/* Разделители для вертикального меню */
.bl-menu--vertical .bl-menu__item:not(:last-child) {
  border-bottom: 1px solid var(--bl-border-color);
}

/* Разделители для горизонтального меню */
.bl-menu--horizontal .bl-menu__item:not(:last-child) {
  border-right: 1px solid var(--bl-border-color);
  padding-right: 16px;
  margin-right: 8px;
}

.bl-menu__item:hover {
  background-color: var(--bl-bg-secondary);
  color: var(--bl-color-primary);
}

.bl-menu__item:active {
  transform: scale(0.98);
}

.bl-menu__icon {
  font-size: 18px;
}

.bl-menu__label {
  flex: 1;
}
</style>