<template>
  <div class="demo-page">
    <h1>BlSwitch</h1>
    <p class="demo-description">Переключатель для включения/выключения опций.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <div class="demo-group">
          <BlSwitch
            v-model="switch1"
            label="Обычный переключатель"
          />
          <div class="demo-message">Состояние: {{ switch1 ? 'Вкл' : 'Выкл' }}</div>
        </div>
      </template>
    </CodeViewer>

    <CodeViewer :code="disabledCode">
      <template #preview>
        <BlSwitch
          v-model="switch2"
          label="Отключенный переключатель"
          disabled
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

const switch1 = ref(false)
const switch2 = ref(true)

const basicCode = `<BlSwitch v-model="switchValue" label="Обычный переключатель" />`

const disabledCode = `<BlSwitch v-model="switchValue" label="Отключенный переключатель" disabled />`
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

.demo-group {
  display: flex;
  flex-direction: column;
  gap: var(--bl-spacing-md);
}

.demo-message {
  margin-top: var(--bl-spacing-sm);
  padding: var(--bl-spacing-sm);
  background: var(--bl-bg-secondary);
  border-radius: var(--bl-border-radius-md);
}
</style>