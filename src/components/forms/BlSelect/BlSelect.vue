<template>
  <div :class="['bl-select', { 'bl-select--disabled': disabled, 'bl-select--error': error }]">
    <label
      v-if="label"
      :for="id"
      class="bl-select__label"
    >{{ label }}</label>
    <div class="bl-select__wrapper">
      <select
        :id="id"
        :value="modelValue"
        :disabled="disabled"
        class="bl-select__field"
        @change="handleChange"
      >
        <option
          v-if="placeholder"
          value=""
          disabled
          class="bl-select__placeholder"
        >
          {{ placeholder }}
        </option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :selected="modelValue === option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <span class="bl-select__arrow">▼</span>
    </div>
    <span
      v-if="error"
      class="bl-select__error"
    >{{ error }}</span>
    <span
      v-if="hint && !error"
      class="bl-select__hint"
    >{{ hint }}</span>
  </div>
</template>

<script
  setup
  lang="ts"
>
export interface SelectOption {
  label: string
  value: string | number
}

export interface BlSelectProps {
  modelValue: string | number
  options: SelectOption[]
  label?: string
  placeholder?: string
  error?: string
  hint?: string
  disabled?: boolean
  id?: string
}

const props = defineProps<BlSelectProps>()

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  change: [value: string | number]
}>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  const value = target.value
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<style scoped>
.bl-select {
  display: flex;
  flex-direction: column;
  gap: var(--bl-spacing-xs);
  width: 100%;
  min-width: 120px;
}

.bl-select__label {
  font-size: var(--bl-font-size-sm);
  font-weight: 500;
  color: var(--bl-text-primary);
  margin-bottom: var(--bl-spacing-xs);
}

.bl-select__wrapper {
  position: relative;
  width: 100%;
}

.bl-select__field {
  width: 100%;
  padding: var(--bl-spacing-sm) var(--bl-spacing-md);
  padding-right: 32px;
  font-size: var(--bl-font-size-md);
  border: 1px solid var(--bl-border-color);
  border-radius: var(--bl-border-radius-md);
  background-color: var(--bl-bg-primary);
  color: var(--bl-text-primary);
  appearance: none;
  cursor: pointer;
  transition: all var(--bl-transition-fast);
  height: 36px;
  line-height: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

/* Стили для разных размеров через CSS переменные */
.bl-select__field {
  padding: var(--bl-component-padding, var(--bl-spacing-sm) var(--bl-spacing-md));
  font-size: var(--bl-component-font-size, var(--bl-font-size-md));
  height: var(--bl-component-height, 36px);
  border-radius: var(--bl-component-border-radius, var(--bl-border-radius-md));
}

.bl-select__field option {
  padding: var(--bl-spacing-sm);
  white-space: normal;
  word-break: break-word;
}

.bl-select__field:hover:not(:disabled) {
  border-color: var(--bl-color-primary);
}

.bl-select__field:focus {
  outline: none;
  border-color: var(--bl-color-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.bl-select__field:disabled {
  background-color: var(--bl-bg-tertiary);
  cursor: not-allowed;
  opacity: 0.6;
}

/* Стили для выпадающего списка */
.bl-select__field option {
  background-color: var(--bl-bg-primary);
  color: var(--bl-text-primary);
  padding: var(--bl-spacing-sm) var(--bl-spacing-md);
  font-size: inherit;
}

.bl-select__field option:checked {
  background-color: var(--bl-color-primary);
  color: white;
}

.bl-select__field option:hover {
  background-color: var(--bl-bg-secondary);
}

.bl-select__placeholder {
  color: var(--bl-text-secondary);
}

.bl-select__arrow {
  position: absolute;
  right: var(--bl-spacing-md);
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  color: var(--bl-text-secondary);
  pointer-events: none;
  transition: transform var(--bl-transition-fast);
}

.bl-select__field:focus+.bl-select__arrow {
  transform: translateY(-50%) rotate(180deg);
}

.bl-select__error {
  font-size: var(--bl-font-size-xs);
  color: var(--bl-color-danger);
  margin-top: var(--bl-spacing-xs);
}

.bl-select__hint {
  font-size: var(--bl-font-size-xs);
  color: var(--bl-text-secondary);
  margin-top: var(--bl-spacing-xs);
}

.bl-select--error .bl-select__field {
  border-color: var(--bl-color-danger);
}

.bl-select--error .bl-select__field:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
</style>