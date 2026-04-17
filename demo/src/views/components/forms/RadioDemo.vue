<template>
  <div class="demo-page">
    <h1>BlRadio</h1>
    <p class="demo-description">Радио кнопки для выбора одного варианта.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <div class="demo-group">
          <BlRadio
            v-model="selected1"
            value="1"
            label="Вариант 1"
            name="radio1"
          />
          <BlRadio
            v-model="selected1"
            value="2"
            label="Вариант 2"
            name="radio1"
          />
          <BlRadio
            v-model="selected1"
            value="3"
            label="Вариант 3"
            name="radio1"
          />
        </div>
        <div class="demo-message">Выбрано: {{ selected1 }}</div>
      </template>
    </CodeViewer>

    <CodeViewer :code="disabledCode">
      <template #preview>
        <BlRadio
          v-model="selected2"
          value="1"
          label="Отключенный радио"
          name="radio2"
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

const selected1 = ref('1')
const selected2 = ref('1')

const basicCode = `<BlRadio v-model="selected" value="1" label="Вариант 1" name="radio" />
<BlRadio v-model="selected" value="2" label="Вариант 2" name="radio" />
<BlRadio v-model="selected" value="3" label="Вариант 3" name="radio" />`

const disabledCode = `<BlRadio v-model="selected" value="1" label="Отключенный радио" disabled />`
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
  gap: var(--bl-spacing-sm);
}

.demo-message {
  margin-top: var(--bl-spacing-md);
  padding: var(--bl-spacing-sm);
  background: var(--bl-bg-secondary);
  border-radius: var(--bl-border-radius-md);
}
</style>