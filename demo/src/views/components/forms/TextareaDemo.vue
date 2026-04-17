<template>
  <div class="demo-page">
    <h1>BlTextarea</h1>
    <p class="demo-description">Многострочное поле ввода текста.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <BlTextarea
          v-model="text"
          label="Комментарий"
          placeholder="Введите ваш комментарий..."
          :rows="4"
        />
        <div class="demo-message">Длина: {{ text.length }} символов</div>
      </template>
    </CodeViewer>

    <CodeViewer :code="errorCode">
      <template #preview>
        <BlTextarea
          v-model="errorText"
          label="Поле с ошибкой"
          placeholder="Минимум 10 символов"
          :error="errorText.length > 0 && errorText.length < 10 ? 'Минимум 10 символов' : ''"
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

const text = ref('')
const errorText = ref('')

const basicCode = `<BlTextarea v-model="text" label="Комментарий" placeholder="Введите ваш комментарий..." :rows="4" />`

const errorCode = `<BlTextarea 
  v-model="text" 
  label="Поле с ошибкой" 
  placeholder="Минимум 10 символов"
  :error="text.length > 0 && text.length < 10 ? 'Минимум 10 символов' : ''"
/>`
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

.demo-message {
  margin-top: var(--bl-spacing-md);
  padding: var(--bl-spacing-sm);
  background: var(--bl-bg-secondary);
  border-radius: var(--bl-border-radius-md);
}
</style>