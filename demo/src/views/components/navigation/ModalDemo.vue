<template>
  <div class="demo-page">
    <h1>BlModal</h1>
    <p class="demo-description">Модальное окно для диалогов.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <BlButton @click="modalVisible = true">Открыть модальное окно</BlButton>
        <BlModal
          v-model="modalVisible"
          title="Заголовок"
        >
          <p>Содержимое модального окна</p>
          <template #footer>
            <BlButton
              variant="secondary"
              @click="modalVisible = false"
            >Закрыть</BlButton>
          </template>
        </BlModal>
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

const modalVisible = ref(false)

const basicCode = `<BlButton @click="modalVisible = true">Открыть модальное окно</BlButton>
<BlModal v-model="modalVisible" title="Заголовок">
  <p>Содержимое модального окна</p>
  <template #footer>
    <BlButton variant="secondary" @click="modalVisible = false">Закрыть</BlButton>
  </template>
</BlModal>`
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