<template>
  <div class="demo-page">
    <h1>BlFileUpload</h1>
    <p class="demo-description">Загрузка файлов.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <BlFileUpload
          v-model="files"
          label="Загрузите файл"
          hint="Поддерживаются любые форматы"
        />
      </template>
    </CodeViewer>

    <CodeViewer :code="multipleCode">
      <template #preview>
        <BlFileUpload
          v-model="multipleFiles"
          label="Несколько файлов"
          multiple
          hint="Выберите несколько файлов"
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

const files = ref<File[]>([])
const multipleFiles = ref<File[]>([])

const basicCode = `<BlFileUpload v-model="files" label="Загрузите файл" hint="Поддерживаются любые форматы" />`

const multipleCode = `<BlFileUpload v-model="files" label="Несколько файлов" multiple hint="Выберите несколько файлов" />`
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
</style>