<template>
  <nav class="bl-breadcrumb">
    <ol>
      <li v-for="(item, index) in items" :key="index">
        <span v-if="item.link">
          <a :href="item.link">{{ item.label }}</a>
        </span>
        <span v-else class="bl-breadcrumb__current">{{ item.label }}</span>
        <span v-if="index < items.length - 1" class="bl-breadcrumb__separator">/</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
export interface BreadcrumbItem {
  label: string
  link?: string
}

export interface BlBreadcrumbProps {
  items: BreadcrumbItem[]
}

defineProps<BlBreadcrumbProps>()
</script>

<style scoped>
.bl-breadcrumb ol {
  display: flex;
  flex-wrap: wrap;
  gap: var(--bl-spacing-xs);
  list-style: none;
  padding: 0;
  margin: 0;
}

.bl-breadcrumb li {
  display: flex;
  align-items: center;
  gap: var(--bl-spacing-xs);
  font-size: var(--bl-font-size-sm);
}

.bl-breadcrumb a {
  color: var(--bl-color-primary);
  text-decoration: none;
  transition: color var(--bl-transition-fast);
}

.bl-breadcrumb a:hover {
  text-decoration: underline;
}

.bl-breadcrumb__current {
  color: var(--bl-text-secondary);
}

.bl-breadcrumb__separator {
  color: var(--bl-text-disabled);
}
</style>