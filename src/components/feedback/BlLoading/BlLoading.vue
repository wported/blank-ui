<template>
  <div v-if="loading" class="bl-loading" :class="{ 'bl-loading--fullscreen': fullscreen }">
    <div class="bl-loading__spinner">
      <BlSpinner :size="size" />
    </div>
    <p v-if="text" class="bl-loading__text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import BlSpinner from '../../data/BlSpinner/BlSpinner.vue'

export interface BlLoadingProps {
  loading?: boolean
  text?: string
  size?: 'small' | 'medium' | 'large'
  fullscreen?: boolean
}

withDefaults(defineProps<BlLoadingProps>(), {
  loading: false,
  size: 'medium',
  fullscreen: false
})
</script>

<style scoped>
.bl-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: var(--bl-z-modal);
}

.bl-loading--fullscreen {
  position: fixed;
}

.bl-loading__text {
  margin-top: var(--bl-spacing-md);
  color: white;
  font-size: var(--bl-font-size-sm);
}
</style>