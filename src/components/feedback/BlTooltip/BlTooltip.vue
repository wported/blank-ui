<template>
  <div class="bl-tooltip" @mouseenter="show" @mouseleave="hide">
    <slot />
    <transition name="bl-tooltip-fade">
      <div v-if="visible" class="bl-tooltip__content" :class="`bl-tooltip__content--${position}`">
        {{ content }}
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

export interface BlTooltipProps {
  content: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const props = withDefaults(defineProps<BlTooltipProps>(), {
  position: 'top'
})

const visible = ref(false)

const show = () => { visible.value = true }
const hide = () => { visible.value = false }
</script>

<style scoped>
.bl-tooltip {
  position: relative;
  display: inline-block;
}

.bl-tooltip__content {
  position: absolute;
  background-color: var(--bl-text-primary);
  color: var(--bl-bg-primary);
  padding: var(--bl-spacing-xs) var(--bl-spacing-sm);
  border-radius: var(--bl-border-radius-sm);
  font-size: var(--bl-font-size-xs);
  white-space: nowrap;
  z-index: var(--bl-z-tooltip);
  pointer-events: none;
}

.bl-tooltip__content--top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: var(--bl-spacing-xs);
}

.bl-tooltip__content--bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: var(--bl-spacing-xs);
}

.bl-tooltip__content--left {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: var(--bl-spacing-xs);
}

.bl-tooltip__content--right {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: var(--bl-spacing-xs);
}

.bl-tooltip-fade-enter-active,
.bl-tooltip-fade-leave-active {
  transition: opacity var(--bl-transition-fast);
}

.bl-tooltip-fade-enter-from,
.bl-tooltip-fade-leave-to {
  opacity: 0;
}
</style>