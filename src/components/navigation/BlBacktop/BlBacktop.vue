<template>
  <transition name="bl-backtop-fade">
    <button
      v-if="visible"
      class="bl-backtop"
      @click="scrollToTop"
    >
      ↑
    </button>
  </transition>
</template>

<script
  setup
  lang="ts"
>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export interface BlBacktopProps {
  threshold?: number
  target?: string | HTMLElement
}

const props = withDefaults(defineProps<BlBacktopProps>(), {
  threshold: 200
})

const visible = ref(false)

const getScrollTarget = (): HTMLElement | Window => {
  if (props.target) {
    if (typeof props.target === 'string') {
      const element = document.querySelector(props.target)
      if (element) return element as HTMLElement
    } else if (props.target instanceof HTMLElement) {
      return props.target
    }
  }
  return window
}

const handleScroll = () => {
  const target = getScrollTarget()
  const scrollTop = target === window
    ? window.pageYOffset || document.documentElement.scrollTop
    : (target as HTMLElement).scrollTop
  visible.value = scrollTop > props.threshold
}

const scrollToTop = () => {
  const target = getScrollTarget()
  if (target === window) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    (target as HTMLElement).scrollTo({ top: 0, behavior: 'smooth' })
  }
}

onMounted(() => {
  const target = getScrollTarget()
  target.addEventListener('scroll', handleScroll)
  handleScroll() // Проверяем начальное состояние
})

onBeforeUnmount(() => {
  const target = getScrollTarget()
  target.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.bl-backtop {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: var(--bl-color-primary);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: all 0.3s ease;
  z-index: 1030;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.bl-backtop:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background-color: var(--bl-color-primary-hover);
}

.bl-backtop:active {
  transform: translateY(0);
}

.bl-backtop-fade-enter-active,
.bl-backtop-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.bl-backtop-fade-enter-from,
.bl-backtop-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>