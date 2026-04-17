<template>
  <div :class="['bl-progress', `bl-progress--${variant}`]">
    <div v-if="showLabel" class="bl-progress__label">
      <span>{{ label || 'Прогресс' }}</span>
      <span>{{ value }}%</span>
    </div>
    <div class="bl-progress__bar">
      <div class="bl-progress__fill" :style="{ width: `${value}%` }">
        <span v-if="showPercentage && !showLabel" class="bl-progress__percentage">{{ value }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface BlProgressProps {
  value: number
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  showLabel?: boolean
  showPercentage?: boolean
  label?: string
}

withDefaults(defineProps<BlProgressProps>(), {
  variant: 'primary',
  showLabel: false,
  showPercentage: false
})
</script>

<style scoped>
.bl-progress {
  width: 100%;
}

.bl-progress__label {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--bl-spacing-xs);
  font-size: var(--bl-font-size-sm);
  color: var(--bl-text-secondary);
}

.bl-progress__bar {
  background-color: var(--bl-bg-tertiary);
  border-radius: var(--bl-border-radius-sm);
  overflow: hidden;
  height: 8px;
}

.bl-progress__fill {
  height: 100%;
  transition: width var(--bl-transition-base);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.bl-progress--default .bl-progress__fill {
  background-color: var(--bl-bg-tertiary);
}

.bl-progress--primary .bl-progress__fill {
  background-color: var(--bl-color-primary);
}

.bl-progress--success .bl-progress__fill {
  background-color: var(--bl-color-success);
}

.bl-progress--warning .bl-progress__fill {
  background-color: var(--bl-color-warning);
}

.bl-progress--danger .bl-progress__fill {
  background-color: var(--bl-color-danger);
}

.bl-progress__percentage {
  font-size: var(--bl-font-size-xs);
  color: white;
  position: absolute;
  right: var(--bl-spacing-xs);
}
</style>