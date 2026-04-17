<template>
  <span :class="['bl-badge', `bl-badge--${variant}`, `bl-badge--${size}`]">
    <slot />
  </span>
</template>

<script setup lang="ts">
export interface BlBadgeProps {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'small' | 'medium' | 'large'
}

withDefaults(defineProps<BlBadgeProps>(), {
  variant: 'default',
  size: 'medium'
})
</script>

<style scoped>
.bl-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  font-weight: 500;
  white-space: nowrap;
}

.bl-badge--default {
  background-color: var(--bl-bg-tertiary);
  color: var(--bl-text-primary);
}

.bl-badge--primary {
  background-color: var(--bl-color-primary);
  color: white;
}

.bl-badge--success {
  background-color: var(--bl-color-success);
  color: white;
}

.bl-badge--warning {
  background-color: var(--bl-color-warning);
  color: white;
}

.bl-badge--danger {
  background-color: var(--bl-color-danger);
  color: white;
}

.bl-badge--info {
  background-color: var(--bl-color-info);
  color: white;
}

.bl-badge--small {
  padding: 2px 8px;
  font-size: var(--bl-font-size-xs);
}

.bl-badge--medium {
  padding: 4px 12px;
  font-size: var(--bl-font-size-sm);
}

.bl-badge--large {
  padding: 6px 16px;
  font-size: var(--bl-font-size-md);
}
</style>