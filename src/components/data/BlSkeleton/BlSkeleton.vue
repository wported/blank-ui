<template>
  <div :class="['bl-skeleton', `bl-skeleton--${variant}`]">
    <div
      v-for="n in rows"
      :key="n"
      class="bl-skeleton__item"
      :style="{ width: Array.isArray(width) ? width[n-1] : width }"
    />
  </div>
</template>

<script setup lang="ts">
export interface BlSkeletonProps {
  rows?: number
  width?: string | string[]
  variant?: 'text' | 'circle' | 'rect'
}

withDefaults(defineProps<BlSkeletonProps>(), {
  rows: 3,
  width: '100%',
  variant: 'text'
})
</script>

<style scoped>
.bl-skeleton {
  display: flex;
  flex-direction: column;
  gap: var(--bl-spacing-sm);
}

.bl-skeleton__item {
  background: linear-gradient(
    90deg,
    var(--bl-bg-tertiary) 25%,
    var(--bl-bg-secondary) 50%,
    var(--bl-bg-tertiary) 75%
  );
  background-size: 200% 100%;
  animation: bl-skeleton-loading 1.5s ease-in-out infinite;
}

.bl-skeleton--text .bl-skeleton__item {
  height: 16px;
  border-radius: var(--bl-border-radius-sm);
}

.bl-skeleton--circle .bl-skeleton__item {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.bl-skeleton--rect .bl-skeleton__item {
  height: 100px;
  border-radius: var(--bl-border-radius-md);
}

@keyframes bl-skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>