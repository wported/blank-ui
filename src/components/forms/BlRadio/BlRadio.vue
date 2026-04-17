<template>
  <label :class="['bl-radio', { 'bl-radio--disabled': disabled }]">
    <input
      type="radio"
      :checked="modelValue === value"
      :value="value"
      :disabled="disabled"
      :name="name"
      class="bl-radio__input"
      @change="handleChange"
    />
    <span class="bl-radio__circle"></span>
    <span class="bl-radio__label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
export interface BlRadioProps {
  modelValue: string | number
  value: string | number
  label?: string
  name?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<BlRadioProps>(), {
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  change: [value: string | number]
}>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<style scoped>
.bl-radio {
  display: inline-flex;
  align-items: center;
  gap: var(--bl-spacing-sm);
  cursor: pointer;
  position: relative;
  user-select: none;
}

.bl-radio--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.bl-radio__input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.bl-radio__circle {
  width: 20px;
  height: 20px;
  border: 2px solid var(--bl-border-color-dark);
  border-radius: 50%;
  background-color: var(--bl-bg-primary);
  transition: all var(--bl-transition-fast);
  position: relative;
}

.bl-radio__input:checked + .bl-radio__circle {
  border-color: var(--bl-color-primary);
}

.bl-radio__input:checked + .bl-radio__circle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--bl-color-primary);
}

.bl-radio__input:focus + .bl-radio__circle {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.bl-radio__label {
  font-size: var(--bl-font-size-md);
  color: var(--bl-text-primary);
}
</style>