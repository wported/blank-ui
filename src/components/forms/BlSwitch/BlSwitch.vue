<template>
  <label :class="['bl-switch', { 'bl-switch--disabled': disabled }]">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="bl-switch__input"
      @change="handleChange"
    />
    <span class="bl-switch__slider"></span>
    <span v-if="label" class="bl-switch__label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
export interface BlSwitchProps {
  modelValue: boolean
  label?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<BlSwitchProps>(), {
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
.bl-switch {
  display: inline-flex;
  align-items: center;
  gap: var(--bl-spacing-sm);
  cursor: pointer;
  position: relative;
}

.bl-switch--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.bl-switch__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.bl-switch__slider {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  background-color: var(--bl-bg-tertiary);
  border-radius: 24px;
  transition: all var(--bl-transition-fast);
}

.bl-switch__slider::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  left: 2px;
  top: 2px;
  background-color: white;
  border-radius: 50%;
  transition: transform var(--bl-transition-fast);
}

.bl-switch__input:checked + .bl-switch__slider {
  background-color: var(--bl-color-primary);
}

.bl-switch__input:checked + .bl-switch__slider::before {
  transform: translateX(20px);
}

.bl-switch__input:focus + .bl-switch__slider {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.bl-switch__label {
  font-size: var(--bl-font-size-md);
  color: var(--bl-text-primary);
}
</style>