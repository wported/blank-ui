<template>
  <div class="bl-accordion">
    <div v-for="(item, index) in items" :key="index" class="bl-accordion__item">
      <button class="bl-accordion__header" @click="toggle(index)">
        <span>{{ item.title }}</span>
        <span class="bl-accordion__icon">{{ openIndexes.includes(index) ? '▼' : '▶' }}</span>
      </button>
      <transition name="bl-accordion-slide">
        <div v-show="openIndexes.includes(index)" class="bl-accordion__content">
          <component :is="item.component" v-bind="item.props" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

export interface AccordionItem {
  title: string
  component: any
  props?: Record<string, any>
}

export interface BlAccordionProps {
  items: AccordionItem[]
  multiple?: boolean
  defaultOpen?: number[]
}

const props = withDefaults(defineProps<BlAccordionProps>(), {
  multiple: false,
  defaultOpen: () => []
})

const openIndexes = ref<number[]>([...props.defaultOpen])

const toggle = (index: number) => {
  if (props.multiple) {
    const idx = openIndexes.value.indexOf(index)
    if (idx === -1) {
      openIndexes.value.push(index)
    } else {
      openIndexes.value.splice(idx, 1)
    }
  } else {
    if (openIndexes.value.includes(index)) {
      openIndexes.value = []
    } else {
      openIndexes.value = [index]
    }
  }
}
</script>

<style scoped>
.bl-accordion__item {
  border: 1px solid var(--bl-border-color);
  border-radius: var(--bl-border-radius-md);
  margin-bottom: var(--bl-spacing-sm);
  overflow: hidden;
}

.bl-accordion__header {
  width: 100%;
  padding: var(--bl-spacing-md);
  background: none;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: var(--bl-font-size-md);
  font-weight: 500;
  color: var(--bl-text-primary);
  transition: background-color var(--bl-transition-fast);
}

.bl-accordion__header:hover {
  background-color: var(--bl-bg-secondary);
}

.bl-accordion__content {
  padding: var(--bl-spacing-md);
  border-top: 1px solid var(--bl-border-color);
  color: var(--bl-text-secondary);
}

.bl-accordion-slide-enter-active,
.bl-accordion-slide-leave-active {
  transition: all var(--bl-transition-base);
}

.bl-accordion-slide-enter-from,
.bl-accordion-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>