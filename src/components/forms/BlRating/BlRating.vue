<template>
  <div :class="['bl-rating', { 'bl-rating--disabled': disabled }]">
    <label v-if="label" class="bl-rating__label">{{ label }}</label>
    <div class="bl-rating__stars">
      <span
        v-for="index in max"
        :key="index"
        class="bl-rating__star"
        :class="{ 'bl-rating__star--active': index <= modelValue }"
        @click="!disabled && setRating(index)"
      >
        ★
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface BlRatingProps {
  modelValue: number
  label?: string
  max?: number
  disabled?: boolean
}

const props = withDefaults(defineProps<BlRatingProps>(), {
  max: 5,
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  change: [value: number]
}>()

const setRating = (value: number) => {
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<style scoped>
.bl-rating {
  display: flex;
  flex-direction: column;
  gap: var(--bl-spacing-xs);
}

.bl-rating__label {
  font-size: var(--bl-font-size-sm);
  font-weight: 500;
  color: var(--bl-text-primary);
}

.bl-rating__stars {
  display: flex;
  gap: var(--bl-spacing-xs);
}

.bl-rating__star {
  font-size: 24px;
  cursor: pointer;
  color: var(--bl-bg-tertiary);
  transition: color var(--bl-transition-fast);
}

.bl-rating__star--active {
  color: #fbbf24;
}

.bl-rating__star:hover:not(.bl-rating--disabled) {
  transform: scale(1.1);
}

.bl-rating--disabled .bl-rating__star {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>