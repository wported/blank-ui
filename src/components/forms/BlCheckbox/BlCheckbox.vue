<template>
  <label :class="['bl-checkbox', { 'bl-checkbox--disabled': disabled }]">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="bl-checkbox__input"
      @change="handleChange"
    />
    <span class="bl-checkbox__checkmark"></span>
    <span class="bl-checkbox__label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
export interface BlCheckboxProps {
  modelValue: boolean
  label?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<BlCheckboxProps>(), {
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  change: [value: boolean]
}>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.checked
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<style scoped>
.bl-checkbox {
  display: inline-flex;
  align-items: center;
  gap: var(--bl-spacing-sm);
  cursor: pointer;
  position: relative;
  user-select: none;
}

.bl-checkbox--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.bl-checkbox__input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.bl-checkbox__checkmark {
  width: 20px;
  height: 20px;
  border: 2px solid var(--bl-border-color-dark);
  border-radius: var(--bl-border-radius-sm);
  background-color: var(--bl-bg-primary);
  transition: all var(--bl-transition-fast);
  position: relative;
}

.bl-checkbox__input:checked + .bl-checkbox__checkmark {
  background-color: var(--bl-color-primary);
  border-color: var(--bl-color-primary);
}

.bl-checkbox__input:checked + .bl-checkbox__checkmark::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 2px;
  width: 6px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.bl-checkbox__input:focus + .bl-checkbox__checkmark {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.bl-checkbox__label {
  font-size: var(--bl-font-size-md);
  color: var(--bl-text-primary);
}
</style>