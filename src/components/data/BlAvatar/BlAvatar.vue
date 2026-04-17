<template>
  <div :class="['bl-avatar', `bl-avatar--${size}`, { 'bl-avatar--circle': circle }]" :style="avatarStyle">
    <img v-if="src" :src="src" :alt="alt" />
    <span v-else-if="initials">{{ initials }}</span>
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface BlAvatarProps {
  src?: string
  alt?: string
  name?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  circle?: boolean
  bgColor?: string
}

const props = withDefaults(defineProps<BlAvatarProps>(), {
  size: 'md',
  circle: true
})

const initials = computed(() => {
  if (!props.name) return ''
  return props.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})

const sizeMap = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64
}

const avatarStyle = computed(() => ({
  width: `${sizeMap[props.size]}px`,
  height: `${sizeMap[props.size]}px`,
  backgroundColor: props.bgColor || 'var(--bl-color-primary)'
}))
</script>

<style scoped>
.bl-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--bl-color-primary);
  color: white;
  font-weight: 600;
}

.bl-avatar--circle {
  border-radius: 50%;
}

.bl-avatar:not(.bl-avatar--circle) {
  border-radius: var(--bl-border-radius-md);
}

.bl-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bl-avatar span {
  font-size: calc(var(--bl-component-height, 40px) * 0.4);
}
</style>