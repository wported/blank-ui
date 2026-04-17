<template>
  <div class="demo-page">
    <h1>BlConfirmDialog</h1>
    <p class="demo-description">Диалог подтверждения действия.</p>
    
    <CodeViewer :code="basicCode">
      <template #preview>
        <BlButton @click="showConfirm">Удалить элемент</BlButton>
        <BlConfirmDialog ref="confirmRef" title="Подтверждение удаления" message="Вы уверены, что хотите удалить этот элемент?" />
        <div v-if="confirmed" class="demo-message">Действие подтверждено!</div>
        <div v-if="cancelled" class="demo-message demo-message--error">Действие отменено!</div>
      </template>
    </CodeViewer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CodeViewer from '../../../components/CodeViewer.vue'

const confirmRef = ref()
const confirmed = ref(false)
const cancelled = ref(false)

const showConfirm = async () => {
  confirmed.value = false
  cancelled.value = false
  const result = await confirmRef.value?.open()
  if (result) {
    confirmed.value = true
    setTimeout(() => { confirmed.value = false }, 3000)
  } else {
    cancelled.value = true
    setTimeout(() => { cancelled.value = false }, 3000)
  }
}

const basicCode = `<BlButton @click="showConfirm">Удалить элемент</BlButton>
<BlConfirmDialog ref="confirmRef" title="Подтверждение удаления" message="Вы уверены?" />

<script setup>
const confirmRef = ref()
const showConfirm = async () => {
  const result = await confirmRef.value?.open()
  if (result) {
    // Действие подтверждено
  }
}
<\/script>`
</script>

<style scoped>
.demo-page { max-width: 800px; margin: 0 auto; }
.demo-description { color: var(--bl-text-secondary); margin-bottom: var(--bl-spacing-xl); }
.demo-message { margin-top: var(--bl-spacing-md); padding: var(--bl-spacing-sm); background: var(--bl-color-success); color: white; border-radius: var(--bl-border-radius-md); text-align: center; }
.demo-message--error { background: var(--bl-color-danger); }
</style>