<template>
  <div class="demo-page">
    <h1>BlToast</h1>
    <p class="demo-description">Всплывающие уведомления.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <div class="demo-flex">
          <BlButton @click="showToast('info')">Info</BlButton>
          <BlButton
            variant="success"
            @click="showToast('success')"
          >Success</BlButton>
          <BlButton
            variant="warning"
            @click="showToast('warning')"
          >Warning</BlButton>
          <BlButton
            variant="danger"
            @click="showToast('error')"
          >Error</BlButton>
        </div>
        <BlToast
          ref="toastRef"
          position="top-right"
        />
      </template>
    </CodeViewer>

    <CodeViewer :code="customCode">
      <template #preview>
        <div class="demo-flex">
          <BlButton @click="showCustomToast">С кастомной длительностью</BlButton>
          <BlButton
            variant="secondary"
            @click="showLongToast"
          >Долгое уведомление</BlButton>
        </div>
        <BlToast
          ref="toastRef2"
          position="bottom-right"
        />
      </template>
    </CodeViewer>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { ref } from 'vue'
import CodeViewer from '../../../components/CodeViewer.vue'

const toastRef = ref()
const toastRef2 = ref()

const showToast = (type: string) => {
  const messages: Record<string, string> = {
    info: 'Информационное сообщение',
    success: 'Операция выполнена успешно!',
    warning: 'Внимание! Проверьте данные',
    error: 'Произошла ошибка. Попробуйте позже'
  }

  if (toastRef.value && toastRef.value.addToast) {
    toastRef.value.addToast({
      message: messages[type],
      type: type as 'info' | 'success' | 'warning' | 'error',
      duration: 3000,
      closable: true
    })
  }
}

const showCustomToast = () => {
  if (toastRef2.value && toastRef2.value.addToast) {
    toastRef2.value.addToast({
      message: 'Это уведомление исчезнет через 5 секунд',
      type: 'info',
      duration: 5000,
      closable: true
    })
  }
}

const showLongToast = () => {
  if (toastRef2.value && toastRef2.value.addToast) {
    toastRef2.value.addToast({
      message: 'Это очень длинное уведомление, которое не закроется автоматически',
      type: 'warning',
      duration: 0,
      closable: true
    })
  }
}

const basicCode = `<div class="demo-flex">
  <BlButton @click="showToast('info')">Info</BlButton>
  <BlButton variant="success" @click="showToast('success')">Success</BlButton>
  <BlButton variant="warning" @click="showToast('warning')">Warning</BlButton>
  <BlButton variant="danger" @click="showToast('error')">Error</BlButton>
</div>
<BlToast ref="toastRef" position="top-right" />

<script setup>
const toastRef = ref()

const showToast = (type) => {
  const messages = {
    info: 'Информационное сообщение',
    success: 'Операция выполнена успешно!',
    warning: 'Внимание! Проверьте данные',
    error: 'Произошла ошибка'
  }
  toastRef.value?.addToast({
    message: messages[type],
    type,
    duration: 3000,
    closable: true
  })
}
<\/script>`

const customCode = `<div class="demo-flex">
  <BlButton @click="showCustomToast">С кастомной длительностью</BlButton>
  <BlButton variant="secondary" @click="showLongToast">Долгое уведомление</BlButton>
</div>
<BlToast ref="toastRef2" position="bottom-right" />

<script setup>
const toastRef2 = ref()

const showCustomToast = () => {
  toastRef2.value?.addToast({
    message: 'Это уведомление исчезнет через 5 секунд',
    type: 'info',
    duration: 5000,
    closable: true
  })
}

const showLongToast = () => {
  toastRef2.value?.addToast({
    message: 'Это уведомление не закроется автоматически',
    type: 'warning',
    duration: 0,
    closable: true
  })
}
<\/script>`
</script>

<style scoped>
.demo-page {
  max-width: 800px;
  margin: 0 auto;
}

.demo-description {
  color: var(--bl-text-secondary);
  margin-bottom: var(--bl-spacing-xl);
}

.demo-flex {
  display: flex;
  flex-wrap: wrap;
  gap: var(--bl-spacing-md);
}
</style>