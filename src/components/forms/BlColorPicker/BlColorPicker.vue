<template>
  <div class="bl-color-picker">
    <label v-if="label" class="bl-color-picker__label">{{ label }}</label>
    <div class="bl-color-picker__wrapper">
      <input
        type="color"
        :value="modelValue"
        class="bl-color-picker__input"
        @input="handleInput"
      />
      <input
        type="text"
        :value="modelValue"
        class="bl-color-picker__text"
        @input="handleTextInput"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
export interface BlColorPickerProps {
  modelValue: string
  label?: string
}

const props = defineProps<BlColorPickerProps>()
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

const handleTextInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value
  if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
    emit('update:modelValue', value)
    emit('change', value)
  }
}
</script>

<style scoped>
.bl-color-picker {
  display: flex;
  flex-direction: column;
  gap: var(--bl-spacing-xs);
  width: 100%;
}

.bl-color-picker__label {
  font-size: var(--bl-font-size-sm);
  font-weight: 500;
  color: var(--bl-text-primary);
}

.bl-color-picker__wrapper {
  display: flex;
  gap: var(--bl-spacing-sm);
  align-items: center;
}

.bl-color-picker__input {
  width: 50px;
  height: 40px;
  border: 1px solid var(--bl-border-color);
  border-radius: var(--bl-border-radius-md);
  cursor: pointer;
}

.bl-color-picker__text {
  flex: 1;
  padding: var(--bl-spacing-sm) var(--bl-spacing-md);
  font-size: var(--bl-font-size-md);
  border: 1px solid var(--bl-border-color);
  border-radius: var(--bl-border-radius-md);
  background-color: var(--bl-bg-primary);
  color: var(--bl-text-primary);
}
</style>