<template>
  <Teleport to="body">
    <TransitionGroup
      name="bl-toast"
      tag="div"
      class="bl-toast-container"
      :class="`bl-toast-container--${position}`"
    >
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="['bl-toast', `bl-toast--${toast.type}`]"
      >
        <div class="bl-toast__content">
          <span class="bl-toast__message">{{ toast.message }}</span>
          <button
            v-if="toast.closable"
            class="bl-toast__close"
            @click="removeToast(toast.id)"
          >
            ✕
          </button>
        </div>
        <div
          v-if="toast.duration"
          class="bl-toast__progress"
          :style="{ animationDuration: `${toast.duration}ms` }"
        ></div>
      </div>
    </TransitionGroup>
  </Teleport>
</template>

<script
  setup
  lang="ts"
>
import { ref, type Ref } from 'vue'

export interface Toast {
  id: string | number
  message: string
  type?: 'info' | 'success' | 'warning' | 'error'
  duration?: number
  closable?: boolean
}

export interface BlToastProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'
}

const props = withDefaults(defineProps<BlToastProps>(), {
  position: 'top-right'
})

const toasts: Ref<Toast[]> = ref([])

let nextId = 0

const addToast = (toast: Omit<Toast, 'id'>) => {
  const id = nextId++
  const newToast: Toast = {
    ...toast,
    id,
    closable: toast.closable !== false,
    type: toast.type || 'info'
  }
  toasts.value.push(newToast)

  if (newToast.duration && newToast.duration > 0) {
    setTimeout(() => {
      removeToast(id)
    }, newToast.duration)
  }

  return id
}

const removeToast = (id: string | number) => {
  const index = toasts.value.findIndex(t => t.id === id)
  if (index !== -1) {
    toasts.value.splice(index, 1)
  }
}

const clearAll = () => {
  toasts.value = []
}

defineExpose({ addToast, removeToast, clearAll })
</script>

<style scoped>
.bl-toast-container {
  position: fixed;
  z-index: 1080;
  display: flex;
  flex-direction: column;
  gap: var(--bl-spacing-sm);
  pointer-events: none;
}

.bl-toast-container--top-right {
  top: var(--bl-spacing-lg);
  right: var(--bl-spacing-lg);
}

.bl-toast-container--top-left {
  top: var(--bl-spacing-lg);
  left: var(--bl-spacing-lg);
}

.bl-toast-container--bottom-right {
  bottom: var(--bl-spacing-lg);
  right: var(--bl-spacing-lg);
}

.bl-toast-container--bottom-left {
  bottom: var(--bl-spacing-lg);
  left: var(--bl-spacing-lg);
}

.bl-toast-container--top-center {
  top: var(--bl-spacing-lg);
  left: 50%;
  transform: translateX(-50%);
}

.bl-toast-container--bottom-center {
  bottom: var(--bl-spacing-lg);
  left: 50%;
  transform: translateX(-50%);
}

.bl-toast {
  min-width: 300px;
  background-color: var(--bl-bg-primary);
  border-radius: var(--bl-border-radius-md);
  box-shadow: var(--bl-shadow-lg);
  overflow: hidden;
  border-left: 4px solid;
  pointer-events: auto;
  animation: bl-toast-slide-in 0.3s ease;
}

.bl-toast--info {
  border-left-color: var(--bl-color-info);
}

.bl-toast--success {
  border-left-color: var(--bl-color-success);
}

.bl-toast--warning {
  border-left-color: var(--bl-color-warning);
}

.bl-toast--error {
  border-left-color: var(--bl-color-danger);
}

.bl-toast__content {
  padding: var(--bl-spacing-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--bl-spacing-md);
}

.bl-toast__message {
  flex: 1;
  color: var(--bl-text-primary);
  font-size: var(--bl-font-size-sm);
}

.bl-toast__close {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--bl-text-secondary);
  font-size: 18px;
  transition: color var(--bl-transition-fast);
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bl-toast__close:hover {
  color: var(--bl-text-primary);
}

.bl-toast__progress {
  height: 3px;
  background-color: currentColor;
  animation: bl-toast-progress linear forwards;
}

.bl-toast--info .bl-toast__progress {
  background-color: var(--bl-color-info);
}

.bl-toast--success .bl-toast__progress {
  background-color: var(--bl-color-success);
}

.bl-toast--warning .bl-toast__progress {
  background-color: var(--bl-color-warning);
}

.bl-toast--error .bl-toast__progress {
  background-color: var(--bl-color-danger);
}

@keyframes bl-toast-slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes bl-toast-progress {
  from {
    width: 100%;
  }

  to {
    width: 0%;
  }
}

/* Анимация удаления */
.bl-toast-move,
.bl-toast-enter-active,
.bl-toast-leave-active {
  transition: all 0.3s ease;
}

.bl-toast-leave-active {
  position: absolute;
}

.bl-toast-enter-from,
.bl-toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>