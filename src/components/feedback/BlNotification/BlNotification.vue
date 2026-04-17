<template>
  <div class="bl-notification">
    <BlToast
      ref="toastRef"
      :position="position"
    />
  </div>
</template>

<script
  setup
  lang="ts"
>
import { ref } from 'vue'
import BlToast from '../BlToast/BlToast.vue'

export interface BlNotificationProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'
}

const props = withDefaults(defineProps<BlNotificationProps>(), {
  position: 'top-right'
})

const toastRef = ref<InstanceType<typeof BlToast>>()

const show = (options: {
  message: string
  type?: 'info' | 'success' | 'warning' | 'error'
  duration?: number
  closable?: boolean
}) => {
  toastRef.value?.addToast({
    message: options.message,
    type: options.type || 'info',
    duration: options.duration || 3000,
    closable: options.closable !== false
  })
}

const info = (message: string, duration?: number) => {
  show({ message, type: 'info', duration })
}

const success = (message: string, duration?: number) => {
  show({ message, type: 'success', duration })
}

const warning = (message: string, duration?: number) => {
  show({ message, type: 'warning', duration })
}

const error = (message: string, duration?: number) => {
  show({ message, type: 'error', duration })
}

defineExpose({ show, info, success, warning, error })
</script>

<style scoped>
.bl-notification {
  display: block;
}
</style>