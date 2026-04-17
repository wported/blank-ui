<template>
  <button 
    :class="['bl-button', `bl-button--${variant}`, { 'bl-button--disabled': disabled }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
export interface BlButtonProps {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  disabled?: boolean
}

const props = withDefaults(defineProps<BlButtonProps>(), {
  variant: 'primary',
  size: 'medium',
  disabled: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
.bl-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all var(--bl-transition-fast);
  
  /* Используем CSS переменные для размера */
  padding: var(--bl-component-padding, var(--bl-spacing-sm) var(--bl-spacing-md));
  font-size: var(--bl-component-font-size, var(--bl-font-size-md));
  gap: var(--bl-component-gap, var(--bl-spacing-sm));
  border-radius: var(--bl-component-border-radius, var(--bl-border-radius-md));
}

/* Специфичные стили для вариантов */
.bl-button--primary {
  background-color: var(--bl-color-primary);
  color: white;
}

.bl-button--primary:hover:not(.bl-button--disabled) {
  background-color: var(--bl-color-primary-hover);
}

.bl-button--secondary {
  background-color: var(--bl-color-secondary);
  color: white;
}

.bl-button--secondary:hover:not(.bl-button--disabled) {
  background-color: var(--bl-color-secondary-hover);
}

.bl-button--danger {
  background-color: var(--bl-color-danger);
  color: white;
}

.bl-button--danger:hover:not(.bl-button--disabled) {
  background-color: var(--bl-color-danger-hover);
}

.bl-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>