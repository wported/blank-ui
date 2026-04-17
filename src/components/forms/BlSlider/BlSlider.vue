<template>
  <div :class="['bl-slider', { 'bl-slider--disabled': disabled }]">
    <label v-if="label" class="bl-slider__label">{{ label }}</label>
    <input
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :value="modelValue"
      :disabled="disabled"
      class="bl-slider__input"
      @input="handleInput"
    />
    <div class="bl-slider__value" v-if="showValue">{{ modelValue }}</div>
  </div>
</template>

<script setup lang="ts">
export interface BlSliderProps {
  modelValue: number
  label?: string
  min?: number
  max?: number
  step?: number
  showValue?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<BlSliderProps>(), {
  min: 0,
  max: 100,
  step: 1,
  showValue: false,
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  change: [value: number]
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = Number(target.value)
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<style scoped>
.bl-slider {
  display: flex;
  align-items: center;
  gap: var(--bl-spacing-md);
  width: 100%;
}

.bl-slider__label {
  font-size: var(--bl-font-size-sm);
  color: var(--bl-text-primary);
  min-width: 60px;
}

.bl-slider__input {
  flex: 1;
  height: 4px;
  -webkit-appearance: none;
  background: var(--bl-bg-tertiary);
  border-radius: 2px;
  outline: none;
}

.bl-slider__input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background: var(--bl-color-primary);
  border-radius: 50%;
  cursor: pointer;
  transition: all var(--bl-transition-fast);
}

.bl-slider__input::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}

.bl-slider__input:focus {
  outline: none;
}

.bl-slider__value {
  min-width: 40px;
  font-size: var(--bl-font-size-sm);
  color: var(--bl-text-secondary);
  text-align: center;
}

.bl-slider--disabled {
  opacity: 0.6;
}

.bl-slider--disabled .bl-slider__input {
  cursor: not-allowed;
}
</style>