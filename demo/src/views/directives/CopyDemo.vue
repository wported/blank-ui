<template>
  <div class="demo-page">
    <h1>📋 v-copy</h1>
    <p class="description">Копирует указанный текст в буфер обмена при клике на элемент</p>

    <div class="demo-section">
      <h2>📝 Базовое использование</h2>
      <CodeViewer :code="basicCode">
        <template #preview>
          <div class="demo-flex">
            <BlCard
              v-copy="'Текст для копирования'"
              class="copy-card"
            >
              <p>📋 Нажмите на эту карточку, чтобы скопировать текст:</p>
              <code>"Текст для копирования"</code>
            </BlCard>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>✅ С уведомлением об успехе</h2>
      <CodeViewer :code="notificationCode">
        <template #preview>
          <div class="demo-flex">
            <BlCard
              v-copy="copyWithNotification"
              class="copy-card success"
            >
              <p>🎉 Нажмите для копирования с уведомлением</p>
              <code>"Скопировано с сообщением!"</code>
            </BlCard>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>📝 Копирование из поля ввода</h2>
      <CodeViewer :code="inputCode">
        <template #preview>
          <div class="demo-flex">
            <BlInput
              v-model="copyText"
              label="Текст для копирования"
              placeholder="Введите любой текст"
            />
            <BlButton
              v-copy="copyButtonConfig"
              variant="primary"
            >
              📋 Скопировать текст
            </BlButton>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>🔗 Копирование ссылки</h2>
      <CodeViewer :code="linkCode">
        <template #preview>
          <div class="demo-flex">
            <div
              v-copy="linkCopyConfig"
              class="link-card"
            >
              <span>🔗 https://blank-ui.dev</span>
              <span class="copy-icon">📋</span>
            </div>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>🔄 С кастомным действием</h2>
      <CodeViewer :code="callbackCode">
        <template #preview>
          <div class="demo-flex">
            <BlButton
              v-copy="customCopyConfig"
              variant="primary"
            >
              📋 Копировать с кастомным действием
            </BlButton>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="api-section">
      <h3>📖 Параметры</h3>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Параметр</th>
              <th>Тип</th>
              <th>Описание</th>
              <th>Пример</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>text</td>
              <td>string</td>
              <td>Текст для копирования</td>
              <td><code>v-copy="{ text: 'текст' }"</code></td>
            </tr>
            <tr>
              <td>successMessage</td>
              <td>string</td>
              <td>Сообщение при успешном копировании</td>
              <td><code>v-copy="{ text: 'текст', successMessage: 'Готово!' }"</code></td>
            </tr>
            <tr>
              <td>onSuccess</td>
              <td>Function</td>
              <td>Колбэк при успешном копировании</td>
              <td><code>v-copy="{ text: 'текст', onSuccess: () => {...} }"</code></td>
            </tr>
            <tr>
              <td>errorMessage</td>
              <td>string</td>
              <td>Сообщение при ошибке</td>
              <td><code>v-copy="{ text: 'текст', errorMessage: 'Ошибка!' }"</code></td>
            </tr>
            <tr>
              <td>onError</td>
              <td>Function</td>
              <td>Колбэк при ошибке</td>
              <td><code>v-copy="{ text: 'текст', onError: () => {...} }"</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="tip-box">
        <strong>💡 Совет:</strong> Для показа уведомлений используйте параметр <code>onSuccess</code> вместе с
        <code>showToast</code>:
        <pre><code>const copyConfig = {
        text: 'текст',
        onSuccess: () => showToast('success', 'Скопировано!')
        }</code></pre>
      </div>
    </div>

    <BlToast
      ref="toastRef"
      position="top-right"
    />
  </div>
</template>

<script
  setup
  lang="ts"
>
import { ref, computed } from 'vue'
import CodeViewer from '../../components/CodeViewer.vue'

const toastRef = ref()
const copyText = ref('Пример текста для копирования')

const showToast = (type: string, message: string) => {
  toastRef.value?.addToast({
    message,
    type,
    duration: 2000,
    closable: true
  })
}

// Конфигурации для копирования
const copyWithNotification = {
  text: 'Скопировано с сообщением!',
  successMessage: '✅ Текст успешно скопирован!',
  onSuccess: () => showToast('success', '✅ Текст успешно скопирован!')
}

const copyButtonConfig = computed(() => ({
  text: copyText.value,
  successMessage: `Скопировано: "${copyText.value}"`,
  onSuccess: () => showToast('success', `Скопировано: "${copyText.value}"`)
}))

const linkCopyConfig = {
  text: 'https://blank-ui.dev',
  successMessage: 'Ссылка скопирована!',
  onSuccess: () => showToast('success', 'Ссылка скопирована!')
}

const customCopyConfig = {
  text: 'Текст с кастомным действием',
  onSuccess: () => {
    showToast('info', '✨ Кастомное действие после копирования!')
  }
}

const basicCode = `<BlCard v-copy="'Текст для копирования'" class="copy-card">
  <p>Нажмите на карточку, чтобы скопировать текст</p>
  <code>"Текст для копирования"</code>
</BlCard>`

const notificationCode = `<BlCard
  v-copy="{
    text: 'Скопировано с сообщением!',
    onSuccess: () => showToast('success', '✅ Текст успешно скопирован!')
  }"
  class="copy-card success"
>
  <p>Нажмите для копирования с уведомлением</p>
  <code>"Скопировано с сообщением!"</code>
</BlCard>`

const inputCode = `<BlInput v-model="copyText" label="Текст для копирования" />
<BlButton 
  v-copy="{
    text: copyText,
    onSuccess: () => showToast('success', 'Скопировано!')
  }" 
  variant="primary"
>
  Скопировать текст
</BlButton>`

const linkCode = `<div 
  v-copy="{
    text: 'https://blank-ui.dev',
    onSuccess: () => showToast('success', 'Ссылка скопирована!')
  }" 
  class="link-card"
>
  <span>🔗 https://blank-ui.dev</span>
  <span class="copy-icon">📋</span>
</div>`

const callbackCode = `<BlButton 
  v-copy="{
    text: 'Текст с кастомным действием',
    onSuccess: () => handleCustomCopy()
  }" 
  variant="primary"
>
  Копировать с кастомным действием
</BlButton>`
</script>

<style scoped>
.demo-page {
  max-width: 1000px;
  margin: 0 auto;
}

.description {
  color: var(--bl-text-secondary);
  margin-bottom: 32px;
}

.demo-section {
  margin-bottom: 48px;
}

.demo-section h2 {
  margin-bottom: 20px;
  font-size: 20px;
}

.demo-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-end;
}

.copy-card {
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  min-width: 250px;
}

.copy-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--bl-shadow-md);
}

.copy-card.success {
  border-left: 4px solid var(--bl-color-success);
}

.link-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 20px;
  background: var(--bl-bg-secondary);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid var(--bl-border-color);
  width: 100%;
}

.link-card:hover {
  background: var(--bl-bg-tertiary);
  transform: translateY(-1px);
}

.copy-icon {
  font-size: 18px;
  opacity: 0.6;
}

.api-section {
  margin-top: 48px;
  padding: 24px;
  background: var(--bl-bg-secondary);
  border-radius: 12px;
}

.api-section h3 {
  margin-top: 0;
  margin-bottom: 16px;
}

.table-wrapper {
  overflow-x: auto;
}

.api-section table {
  width: 100%;
  border-collapse: collapse;
}

.api-section th,
.api-section td {
  padding: 10px 12px;
  text-align: left;
  border-bottom: 1px solid var(--bl-border-color);
}

.api-section th {
  font-weight: 600;
  background: var(--bl-bg-tertiary);
}

.api-section code {
  background: var(--bl-bg-tertiary);
  padding: 2px 6px;
  border-radius: 4px;
}

.tip-box {
  margin-top: 20px;
  padding: 16px;
  background: var(--bl-bg-primary);
  border-radius: 8px;
  border-left: 4px solid var(--bl-color-primary);
}

.tip-box pre {
  margin: 8px 0 0 0;
  padding: 12px;
  background: var(--bl-bg-tertiary);
  border-radius: 8px;
  overflow-x: auto;
  font-size: 13px;
}

.tip-box code {
  background: transparent;
}
</style>