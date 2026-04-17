<template>
  <BlModal v-model="visible" :title="title" :width="width">
    <p>{{ message }}</p>
    <template #footer>
      <BlButton variant="secondary" @click="cancel">
        {{ cancelText }}
      </BlButton>
      <BlButton variant="primary" @click="confirm">
        {{ confirmText }}
      </BlButton>
    </template>
  </BlModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BlModal from '../../navigation/BlModal/BlModal.vue'
import BlButton from '../../forms/BlButton/BlButton.vue'

export interface BlConfirmDialogProps {
  title?: string
  message?: string
  confirmText?: string
  cancelText?: string
  width?: string
}

const props = withDefaults(defineProps<BlConfirmDialogProps>(), {
  title: 'Подтверждение',
  message: 'Вы уверены?',
  confirmText: 'Да',
  cancelText: 'Нет',
  width: '400px'
})

const visible = ref(false)
let resolvePromise: ((value: boolean) => void) | null = null

const open = (): Promise<boolean> => {
  visible.value = true
  return new Promise((resolve) => {
    resolvePromise = resolve
  })
}

const confirm = () => {
  visible.value = false
  if (resolvePromise) resolvePromise(true)
}

const cancel = () => {
  visible.value = false
  if (resolvePromise) resolvePromise(false)
}

defineExpose({ open })
</script>