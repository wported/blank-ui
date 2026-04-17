<template>
  <div class="demo-page">
    <h1>BlColorPicker</h1>
    <p class="demo-description">Выбор цвета.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <BlColorPicker
          v-model="color"
          label="Выберите цвет"
        />
        <div class="demo-message">
          Выбран цвет: <span :style="{ color: color }">{{ color }}</span>
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

const color = ref('#3b82f6')

const basicCode = `<BlColorPicker v-model="color" label="Выберите цвет" />`
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