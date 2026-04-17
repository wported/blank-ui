<template>
  <div class="demo-page">
    <h1>BlLoading</h1>
    <p class="demo-description">Индикатор загрузки.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <div class="demo-flex">
          <BlButton @click="startLoading">Показать загрузку</BlButton>
        </div>
        <div
          style="position: relative; min-height: 200px; margin-top: 20px; border: 1px solid var(--bl-border-color); border-radius: 8px;"
        >
          <div
            v-if="!isLoading"
            style="padding: 20px; text-align: center;"
          >
            <p>Загруженные данные</p>
            <p>Здесь отображается контент</p>
          </div>
          <BlLoading
            :loading="isLoading"
            text="Загрузка данных..."
          />
        </div>
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

const isLoading = ref(false)

const startLoading = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}

const basicCode = `<div style="position: relative; min-height: 200px;">
  <div v-if="!isLoading" style="padding: 20px;">
    <p>Загруженные данные</p>
  </div>
  <BlLoading :loading="isLoading" text="Загрузка данных..." />
</div>`
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
  gap: var(--bl-spacing-md);
}
</style>