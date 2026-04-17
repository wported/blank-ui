<template>
  <span :class="['bl-tag', `bl-tag--${variant}`, `bl-tag--${size}`, { 'bl-tag--closable': closable }]">
    <slot />
    <button v-if="closable" class="bl-tag__close" @click="$emit('close')">✕</button>
  </span>
</template>

<script setup lang="ts">
export interface BlTagProps {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'small' | 'medium' | 'large'
  closable?: boolean
}

withDefaults(defineProps<BlTagProps>(), {
  variant: 'default',
  size: 'medium',
  closable: false
})

defineEmits<{
  close: []
}>()
</script>

<style scoped>
.bl-tag {
  display: inline-flex;
  align-items: center;
  gap: var(--bl-spacing-xs);
  border-radius: var(--bl-border-radius-sm);
  font-weight: 500;
  white-space: nowrap;
}

.bl-tag--small {
  padding: 2px 8px;
  font-size: var(--bl-font-size-xs);
}

.bl-tag--medium {
  padding: 4px 12px;
  font-size: var(--bl-font-size-sm);
}

.bl-tag--large {
  padding: 6px 16px;
  font-size: var(--bl-font-size-md);
}

.bl-tag--default {
  background-color: var(--bl-bg-tertiary);
  color: var(--bl-text-primary);
}

.bl-tag--primary {
  background-color: var(--bl-color-primary);
  color: white;
}

.bl-tag--success {
  background-color: var(--bl-color-success);
  color: white;
}

.bl-tag--warning {
  background-color: var(--bl-color-warning);
  color: white;
}

.bl-tag--danger {
  background-color: var(--bl-color-danger);
  color: white;
}

.bl-tag--info {
  background-color: var(--bl-color-info);
  color: white;
}

.bl-tag__close {
  background: none;
  border: none;
  cursor: pointer;
  color: currentColor;
  font-size: 14px;
  opacity: 0.7;
  transition: opacity var(--bl-transition-fast);
}

.bl-tag__close:hover {
  opacity: 1;
}
</style>