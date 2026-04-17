<template>
  <transition name="bl-alert-fade">
    <div v-if="visible" :class="['bl-alert', `bl-alert--${variant}`]">
      <div class="bl-alert__icon">
        <slot name="icon">{{ iconMap[variant] }}</slot>
      </div>
      <div class="bl-alert__content">
        <div class="bl-alert__title">{{ title }}</div>
        <div class="bl-alert__message"><slot /></div>
      </div>
      <button v-if="closable" class="bl-alert__close" @click="visible = false">✕</button>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

export interface BlAlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error'
  title?: string
  closable?: boolean
}

const props = withDefaults(defineProps<BlAlertProps>(), {
  variant: 'info',
  closable: false
})

const iconMap = {
  info: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  error: '❌'
}

const visible = ref(true)
</script>

<style scoped>
.bl-alert {
  display: flex;
  align-items: flex-start;
  gap: var(--bl-spacing-sm);
  padding: var(--bl-spacing-md);
  border-radius: var(--bl-border-radius-md);
  margin-bottom: var(--bl-spacing-md);
}

.bl-alert--info {
  background-color: rgba(59, 130, 246, 0.1);
  border-left: 4px solid var(--bl-color-info);
}

.bl-alert--success {
  background-color: rgba(16, 185, 129, 0.1);
  border-left: 4px solid var(--bl-color-success);
}

.bl-alert--warning {
  background-color: rgba(245, 158, 11, 0.1);
  border-left: 4px solid var(--bl-color-warning);
}

.bl-alert--error {
  background-color: rgba(239, 68, 68, 0.1);
  border-left: 4px solid var(--bl-color-danger);
}

.bl-alert__icon {
  font-size: 20px;
}

.bl-alert__content {
  flex: 1;
}

.bl-alert__title {
  font-weight: 600;
  margin-bottom: var(--bl-spacing-xs);
  color: var(--bl-text-primary);
}

.bl-alert__message {
  color: var(--bl-text-secondary);
  font-size: var(--bl-font-size-sm);
}

.bl-alert__close {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--bl-text-secondary);
  font-size: 18px;
}

.bl-alert-fade-enter-active,
.bl-alert-fade-leave-active {
  transition: opacity var(--bl-transition-base);
}

.bl-alert-fade-enter-from,
.bl-alert-fade-leave-to {
  opacity: 0;
}
</style>