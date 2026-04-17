<template>
  <div class="bl-tabs">
    <div class="bl-tabs__header">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        class="bl-tabs__tab"
        :class="{ 'bl-tabs__tab--active': activeTab === index }"
        @click="activeTab = index"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="bl-tabs__content">
      <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
        <component :is="tab.component" v-bind="tab.props" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

export interface TabItem {
  label: string
  component: any
  props?: Record<string, any>
}

export interface BlTabsProps {
  tabs: TabItem[]
  defaultIndex?: number
}

const props = withDefaults(defineProps<BlTabsProps>(), {
  defaultIndex: 0
})

const activeTab = ref(props.defaultIndex)
</script>

<style scoped>
.bl-tabs__header {
  display: flex;
  gap: var(--bl-spacing-sm);
  border-bottom: 2px solid var(--bl-border-color);
  margin-bottom: var(--bl-spacing-md);
}

.bl-tabs__tab {
  padding: var(--bl-spacing-sm) var(--bl-spacing-md);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--bl-text-secondary);
  font-size: var(--bl-font-size-md);
  transition: all var(--bl-transition-fast);
}

.bl-tabs__tab:hover {
  color: var(--bl-color-primary);
}

.bl-tabs__tab--active {
  color: var(--bl-color-primary);
  border-bottom: 2px solid var(--bl-color-primary);
  margin-bottom: -2px;
}
</style>