<template>
  <div :class="['bl-spinner', `bl-spinner--${size}`]" :style="{ color: color }">
    <div class="bl-spinner__circle"></div>
  </div>
</template>

<script setup lang="ts">
export interface BlSpinnerProps {
  size?: 'small' | 'medium' | 'large'
  color?: string
}

withDefaults(defineProps<BlSpinnerProps>(), {
  size: 'medium'
})
</script>

<style scoped>
.bl-spinner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.bl-spinner__circle {
  border: 3px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: bl-spin 0.8s linear infinite;
}

.bl-spinner--small .bl-spinner__circle {
  width: 16px;
  height: 16px;
  border-width: 2px;
}

.bl-spinner--medium .bl-spinner__circle {
  width: 32px;
  height: 32px;
  border-width: 3px;
}

.bl-spinner--large .bl-spinner__circle {
  width: 48px;
  height: 48px;
  border-width: 4px;
}

@keyframes bl-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>