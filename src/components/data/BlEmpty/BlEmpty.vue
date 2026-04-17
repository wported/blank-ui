<template>
  <div class="bl-empty">
    <div class="bl-empty__icon">
      <slot name="icon">📭</slot>
    </div>
    <h3 class="bl-empty__title">{{ title }}</h3>
    <p v-if="description" class="bl-empty__description">{{ description }}</p>
    <div v-if="$slots.action" class="bl-empty__action">
      <slot name="action" />
    </div>
  </div>
</template>

<script setup lang="ts">
export interface BlEmptyProps {
  title?: string
  description?: string
}

withDefaults(defineProps<BlEmptyProps>(), {
  title: 'Нет данных'
})
</script>

<style scoped>
.bl-empty {
  text-align: center;
  padding: var(--bl-spacing-xl);
  background-color: var(--bl-bg-secondary);
  border-radius: var(--bl-border-radius-lg);
}

.bl-empty__icon {
  font-size: 48px;
  margin-bottom: var(--bl-spacing-md);
  opacity: 0.5;
}

.bl-empty__title {
  margin: 0 0 var(--bl-spacing-sm) 0;
  color: var(--bl-text-primary);
  font-size: var(--bl-font-size-lg);
}

.bl-empty__description {
  margin: 0;
  color: var(--bl-text-secondary);
  font-size: var(--bl-font-size-sm);
}

.bl-empty__action {
  margin-top: var(--bl-spacing-lg);
}
</style>