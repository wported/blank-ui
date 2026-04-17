<template>
  <div class="bl-pagination">
    <button
      class="bl-pagination__item"
      :disabled="current === 1"
      @click="$emit('update:current', current - 1)"
    >
      ←
    </button>
    
    <button
      v-for="page in visiblePages"
      :key="page"
      class="bl-pagination__item"
      :class="{ 'bl-pagination__item--active': page === current }"
      @click="typeof page === 'number' && $emit('update:current', page)"
    >
      {{ page }}
    </button>
    
    <button
      class="bl-pagination__item"
      :disabled="current === total"
      @click="$emit('update:current', current + 1)"
    >
      →
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface BlPaginationProps {
  total: number
  current: number
  siblingCount?: number
}

const props = withDefaults(defineProps<BlPaginationProps>(), {
  siblingCount: 1
})

defineEmits<{
  'update:current': [page: number]
}>()

const visiblePages = computed<(number | string)[]>(() => {
  const range: number[] = []
  const start = Math.max(1, props.current - props.siblingCount)
  const end = Math.min(props.total, props.current + props.siblingCount)
  
  for (let i = start; i <= end; i++) {
    range.push(i)
  }
  
  const result: (number | string)[] = [...range]
  
  if (start > 1) {
    result.unshift('...')
  }
  if (end < props.total) {
    result.push('...')
  }
  
  return result
})
</script>

<style scoped>
.bl-pagination {
  display: flex;
  gap: var(--bl-spacing-xs);
  align-items: center;
}

.bl-pagination__item {
  min-width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--bl-spacing-sm);
  border: 1px solid var(--bl-border-color);
  border-radius: var(--bl-border-radius-sm);
  background-color: var(--bl-bg-primary);
  color: var(--bl-text-primary);
  cursor: pointer;
  transition: all var(--bl-transition-fast);
}

.bl-pagination__item:hover:not(:disabled) {
  border-color: var(--bl-color-primary);
  color: var(--bl-color-primary);
}

.bl-pagination__item--active {
  background-color: var(--bl-color-primary);
  border-color: var(--bl-color-primary);
  color: white;
}

.bl-pagination__item:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>