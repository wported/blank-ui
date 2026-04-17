<template>
  <div :class="['bl-input', { 'bl-input--error': error, 'bl-input--disabled': disabled }]">
    <label v-if="label" :for="id" class="bl-input__label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      class="bl-input__field"
      :style="inputStyles"
      @input="handleInput"
      @blur="handleBlur"
    />
    <span v-if="error" class="bl-input__error">{{ error }}</span>
    <span v-if="hint && !error" class="bl-input__hint">{{ hint }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface BlInputProps {
  modelValue: string | number
  label?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel'
  placeholder?: string
  error?: string
  hint?: string
  disabled?: boolean
  required?: boolean
  id?: string
  width?: string | number
}

const props = withDefaults(defineProps<BlInputProps>(), {
  type: 'text',
  disabled: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  blur: [event: FocusEvent]
}>()

const inputStyles = computed(() => {
  const styles: Record<string, string> = {}
  if (props.width) {
    if (typeof props.width === 'number') {
      styles.width = `${props.width}px`
    } else {
      styles.width = props.width
    }
  }
  return styles
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}
</script>

<style scoped>
.bl-input {
  display: flex;
  flex-direction: column;
  gap: var(--bl-spacing-xs);
  width: 100%;
}

.bl-input__label {
  font-size: var(--bl-font-size-sm);
  font-weight: 500;
  color: var(--bl-text-primary);
  margin-bottom: var(--bl-spacing-xs);
}

.bl-input__field {
  padding: var(--bl-component-padding, var(--bl-spacing-sm) var(--bl-spacing-md));
  font-size: var(--bl-component-font-size, var(--bl-font-size-md));
  border: 1px solid var(--bl-border-color);
  border-radius: var(--bl-component-border-radius, var(--bl-border-radius-md));
  background-color: var(--bl-bg-primary);
  color: var(--bl-text-primary);
  transition: all var(--bl-transition-fast);
  height: var(--bl-component-height, 36px);
}

.bl-input__field:hover:not(:disabled) {
  border-color: var(--bl-color-primary);
}

.bl-input__field:focus {
  outline: none;
  border-color: var(--bl-color-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.bl-input__field:disabled {
  background-color: var(--bl-bg-tertiary);
  cursor: not-allowed;
  opacity: 0.6;
}

.bl-input--error .bl-input__field {
  border-color: var(--bl-color-danger);
}

.bl-input--error .bl-input__field:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.bl-input__error {
  font-size: var(--bl-font-size-xs);
  color: var(--bl-color-danger);
  margin-top: var(--bl-spacing-xs);
}

.bl-input__hint {
  font-size: var(--bl-font-size-xs);
  color: var(--bl-text-secondary);
  margin-top: var(--bl-spacing-xs);
}
</style>