<template>
  <div class="bl-popover" ref="triggerRef" @click="toggle">
    <slot name="trigger" />
    <transition name="bl-popover-fade">
      <div v-if="visible" class="bl-popover__content" :class="`bl-popover__content--${placement}`">
        <div class="bl-popover__arrow"></div>
        <div class="bl-popover__inner">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

export interface BlPopoverProps {
  placement?: 'top' | 'bottom' | 'left' | 'right'
  trigger?: 'click' | 'hover'
}

const props = withDefaults(defineProps<BlPopoverProps>(), {
  placement: 'top',
  trigger: 'click'
})

const visible = ref(false)
const triggerRef = ref<HTMLElement>()

const toggle = () => {
  if (props.trigger === 'click') {
    visible.value = !visible.value
  }
}

const handleClickOutside = (event: MouseEvent) => {
  if (triggerRef.value && !triggerRef.value.contains(event.target as Node)) {
    visible.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.bl-popover {
  position: relative;
  display: inline-block;
}

.bl-popover__content {
  position: absolute;
  background-color: var(--bl-bg-primary);
  border: 1px solid var(--bl-border-color);
  border-radius: var(--bl-border-radius-md);
  box-shadow: var(--bl-shadow-lg);
  z-index: var(--bl-z-popover);
  min-width: 200px;
}

.bl-popover__content--top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: var(--bl-spacing-sm);
}

.bl-popover__content--bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: var(--bl-spacing-sm);
}

.bl-popover__content--left {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: var(--bl-spacing-sm);
}

.bl-popover__content--right {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: var(--bl-spacing-sm);
}

.bl-popover__arrow {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: var(--bl-bg-primary);
  border: 1px solid var(--bl-border-color);
  transform: rotate(45deg);
}

.bl-popover__content--top .bl-popover__arrow {
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-top: none;
  border-left: none;
}

.bl-popover__content--bottom .bl-popover__arrow {
  top: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-bottom: none;
  border-right: none;
}

.bl-popover__content--left .bl-popover__arrow {
  right: -6px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  border-left: none;
  border-bottom: none;
}

.bl-popover__content--right .bl-popover__arrow {
  left: -6px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  border-right: none;
  border-top: none;
}

.bl-popover__inner {
  padding: var(--bl-spacing-md);
  color: var(--bl-text-primary);
}

.bl-popover-fade-enter-active,
.bl-popover-fade-leave-active {
  transition: opacity var(--bl-transition-fast);
}

.bl-popover-fade-enter-from,
.bl-popover-fade-leave-to {
  opacity: 0;
}
</style>