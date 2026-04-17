<template>
  <div :class="['bl-textarea', { 'bl-textarea--error': error, 'bl-textarea--disabled': disabled }]">
    <label v-if="label" :for="id" class="bl-textarea__label">{{ label }}</label>
    <textarea
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      :disabled="disabled"
      :required="required"
      class="bl-textarea__field"
      @input="handleInput"
      @blur="handleBlur"
    />
    <span v-if="error" class="bl-textarea__error">{{ error }}</span>
    <span v-if="hint && !error" class="bl-textarea__hint">{{ hint }}</span>
  </div>
</template>

<script setup lang="ts">
export interface BlTextareaProps {
  modelValue: string
  label?: string
  placeholder?: string
  rows?: number
  error?: string
  hint?: string
  disabled?: boolean
  required?: boolean
  id?: string
}

const props = withDefaults(defineProps<BlTextareaProps>(), {
  rows: 3,
  disabled: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  blur: [event: FocusEvent]
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}
</script>

<style scoped>
.bl-textarea {
  display: flex;
  flex-direction: column;
  gap: var(--bl-spacing-xs);
  width: 100%;
}

.bl-textarea__label {
  font-size: var(--bl-font-size-sm);
  font-weight: 500;
  color: var(--bl-text-primary);
}

.bl-textarea__field {
  padding: var(--bl-spacing-sm) var(--bl-spacing-md);
  font-size: var(--bl-font-size-md);
  border: 1px solid var(--bl-border-color);
  border-radius: var(--bl-border-radius-md);
  background-color: var(--bl-bg-primary);
  color: var(--bl-text-primary);
  transition: all var(--bl-transition-fast);
  resize: vertical;
  font-family: inherit;
}

.bl-textarea__field:focus {
  outline: none;
  border-color: var(--bl-color-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.bl-textarea__field:disabled {
  background-color: var(--bl-bg-tertiary);
  cursor: not-allowed;
  opacity: 0.6;
}

.bl-textarea--error .bl-textarea__field {
  border-color: var(--bl-color-danger);
}

.bl-textarea__error {
  font-size: var(--bl-font-size-xs);
  color: var(--bl-color-danger);
}

.bl-textarea__hint {
  font-size: var(--bl-font-size-xs);
  color: var(--bl-text-secondary);
}
</style>