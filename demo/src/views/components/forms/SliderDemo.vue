<template>
  <div class="demo-page">
    <h1>BlSlider</h1>
    <p class="demo-description">Ползунок для выбора значения в диапазоне.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <BlSlider
          v-model="sliderValue"
          label="Значение"
        />
        <div class="demo-message">Текущее значение: {{ sliderValue }}</div>
      </template>
    </CodeViewer>

    <CodeViewer :code="rangeCode">
      <template #preview>
        <BlSlider
          v-model="rangeValue"
          :min="0"
          :max="200"
          :step="10"
          label="Диапазон"
          show-value
        />
      </template>
    </CodeViewer>

    <CodeViewer :code="disabledCode">
      <template #preview>
        <BlSlider
          v-model="disabledValue"
          label="Отключенный"
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

const sliderValue = ref(50)
const rangeValue = ref(100)
const disabledValue = ref(75)

const basicCode = `<BlSlider v-model="sliderValue" label="Значение" />`

const rangeCode = `<BlSlider v-model="rangeValue" :min="0" :max="200" :step="10" label="Диапазон" show-value />`

const disabledCode = `<BlSlider v-model="disabledValue" label="Отключенный" disabled />`
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