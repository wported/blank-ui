<template>
  <div :class="['bl-card', `bl-card--${variant}`, { 'bl-card--clickable': clickable }]" @click="handleClick">
    <div v-if="$slots.header" class="bl-card__header">
      <slot name="header" />
    </div>
    <div class="bl-card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="bl-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
export interface BlCardProps {
  variant?: 'default' | 'outlined' | 'elevated'
  clickable?: boolean
}

const props = withDefaults(defineProps<BlCardProps>(), {
  variant: 'default',
  clickable: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (props.clickable) {
    emit('click', event)
  }
}
</script>

<style scoped>
.bl-card {
  background-color: var(--bl-bg-primary);
  border-radius: var(--bl-border-radius-lg);
  overflow: hidden;
}

.bl-card--default {
  border: 1px solid var(--bl-border-color);
}

.bl-card--outlined {
  border: 2px solid var(--bl-border-color);
}

.bl-card--elevated {
  box-shadow: var(--bl-shadow-md);
}

.bl-card--clickable {
  cursor: pointer;
  transition: transform var(--bl-transition-fast), box-shadow var(--bl-transition-fast);
}

.bl-card--clickable:hover {
  transform: translateY(-2px);
  box-shadow: var(--bl-shadow-lg);
}

.bl-card__header {
  padding: var(--bl-spacing-md);
  border-bottom: 1px solid var(--bl-border-color);
}

.bl-card__body {
  padding: var(--bl-spacing-md);
}

.bl-card__footer {
  padding: var(--bl-spacing-md);
  border-top: 1px solid var(--bl-border-color);
}
</style>