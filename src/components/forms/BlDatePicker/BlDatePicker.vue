<template>
  <div :class="['bl-date-picker', { 'bl-date-picker--disabled': disabled }]">
    <label v-if="label" class="bl-date-picker__label">{{ label }}</label>
    <input
      type="date"
      :value="modelValue"
      :min="min"
      :max="max"
      :disabled="disabled"
      class="bl-date-picker__input"
      @input="handleInput"
    />
  </div>
</template>

<script setup lang="ts">
export interface BlDatePickerProps {
  modelValue: string
  label?: string
  min?: string
  max?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<BlDatePickerProps>(), {
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: string]
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<style scoped>
.bl-date-picker {
  display: flex;
  flex-direction: column;
  gap: var(--bl-spacing-xs);
  width: 100%;
}

.bl-date-picker__label {
  font-size: var(--bl-font-size-sm);
  font-weight: 500;
  color: var(--bl-text-primary);
}

.bl-date-picker__input {
  padding: var(--bl-spacing-sm) var(--bl-spacing-md);
  font-size: var(--bl-font-size-md);
  border: 1px solid var(--bl-border-color);
  border-radius: var(--bl-border-radius-md);
  background-color: var(--bl-bg-primary);
  color: var(--bl-text-primary);
  transition: all var(--bl-transition-fast);
}

.bl-date-picker__input:focus {
  outline: none;
  border-color: var(--bl-color-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.bl-date-picker__input:disabled {
  background-color: var(--bl-bg-tertiary);
  cursor: not-allowed;
  opacity: 0.6;
}
</style>