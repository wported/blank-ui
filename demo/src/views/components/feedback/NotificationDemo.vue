<template>
  <div class="demo-page">
    <h1>BlNotification</h1>
    <p class="demo-description">Система уведомлений (обертка над BlToast с удобным API).</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <div class="demo-flex">
          <BlButton @click="showInfo">Info</BlButton>
          <BlButton
            variant="success"
            @click="showSuccess"
          >Success</BlButton>
          <BlButton
            variant="warning"
            @click="showWarning"
          >Warning</BlButton>
          <BlButton
            variant="danger"
            @click="showError"
          >Error</BlButton>
        </div>
        <BlNotification
          ref="notificationRef"
          position="top-right"
        />
      </template>
    </CodeViewer>

    <CodeViewer :code="customCode">
      <template #preview>
        <div class="demo-flex">
          <BlButton @click="showCustomDuration">5 секунд</BlButton>
          <BlButton
            variant="secondary"
            @click="showNoAutoClose"
          >Не закрывается</BlButton>
        </div>
        <BlNotification
          ref="notificationRef2"
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

const notificationRef = ref()
const notificationRef2 = ref()

const showInfo = () => {
  notificationRef.value?.info('Информационное сообщение')
}

const showSuccess = () => {
  notificationRef.value?.success('Операция выполнена успешно!')
}

const showWarning = () => {
  notificationRef.value?.warning('Внимание! Проверьте введенные данные')
}

const showError = () => {
  notificationRef.value?.error('Произошла ошибка. Попробуйте позже')
}

const showCustomDuration = () => {
  notificationRef2.value?.show({
    message: 'Это уведомление исчезнет через 5 секунд',
    type: 'info',
    duration: 5000
  })
}

const showNoAutoClose = () => {
  notificationRef2.value?.show({
    message: 'Это уведомление нужно закрыть вручную',
    type: 'warning',
    duration: 0,
    closable: true
  })
}

const basicCode = `<div class="demo-flex">
  <BlButton @click="showInfo">Info</BlButton>
  <BlButton variant="success" @click="showSuccess">Success</BlButton>
  <BlButton variant="warning" @click="showWarning">Warning</BlButton>
  <BlButton variant="danger" @click="showError">Error</BlButton>
</div>
<BlNotification ref="notificationRef" position="top-right" />

<script setup>
const notificationRef = ref()

const showInfo = () => {
  notificationRef.value?.info('Информационное сообщение')
}

const showSuccess = () => {
  notificationRef.value?.success('Операция выполнена успешно!')
}

const showWarning = () => {
  notificationRef.value?.warning('Внимание! Проверьте данные')
}

const showError = () => {
  notificationRef.value?.error('Произошла ошибка')
}
<\/script>`

const customCode = `<div class="demo-flex">
  <BlButton @click="showCustomDuration">5 секунд</BlButton>
  <BlButton variant="secondary" @click="showNoAutoClose">Не закрывается</BlButton>
</div>
<BlNotification ref="notificationRef2" position="bottom-right" />

<script setup>
const notificationRef2 = ref()

const showCustomDuration = () => {
  notificationRef2.value?.show({
    message: 'Уведомление на 5 секунд',
    type: 'info',
    duration: 5000
  })
}

const showNoAutoClose = () => {
  notificationRef2.value?.show({
    message: 'Закройте вручную',
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