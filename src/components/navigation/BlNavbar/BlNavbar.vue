<template>
  <nav class="bl-navbar">
    <div class="bl-navbar__brand">
      <slot name="brand">{{ brand }}</slot>
    </div>
    <div class="bl-navbar__menu">
      <slot />
    </div>
    <div class="bl-navbar__actions">
      <slot name="actions" />
    </div>
  </nav>
</template>

<script
  setup
  lang="ts"
>
export interface BlNavbarProps {
  brand?: string
}

defineProps<BlNavbarProps>()
</script>

<style scoped>
.bl-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: var(--bl-bg-primary);
  border-bottom: 1px solid var(--bl-border-color);
  box-shadow: var(--bl-shadow-sm);
}

.bl-navbar__brand {
  font-size: 18px;
  font-weight: bold;
  color: var(--bl-text-primary);
}

.bl-navbar__menu {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Добавляем разделители между пунктами меню в navbar */
.bl-navbar__menu :deep(.bl-menu--horizontal .bl-menu__item) {
  position: relative;
}

.bl-navbar__menu :deep(.bl-menu--horizontal .bl-menu__item:not(:last-child)::after) {
  content: '';
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 20px;
  background-color: var(--bl-border-color);
}

.bl-navbar__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

@media (max-width: 768px) {
  .bl-navbar {
    flex-wrap: wrap;
    gap: 12px;
  }

  .bl-navbar__menu {
    order: 3;
    width: 100%;
    overflow-x: auto;
  }
}
</style>