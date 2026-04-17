<template>
  <div class="demo-page">
    <h1>🎯 v-focus</h1>
    <p class="description">Автоматически устанавливает фокус на элемент при загрузке</p>

    <div class="demo-section">
      <h2>Базовое использование</h2>
      <CodeViewer :code="basicCode">
        <template #preview>
          <div class="demo-grid">
            <BlInput
              v-focus
              v-model="basicText"
              label="Автофокус"
              placeholder="Я в фокусе при загрузке!"
            />
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>Фокус с задержкой</h2>
      <CodeViewer :code="delayCode">
        <template #preview>
          <div class="demo-grid">
            <BlInput
              v-focus="{ delay: 1000 }"
              v-model="delayText"
              label="Фокус через 1 секунду"
              placeholder="Подожди секунду..."
              hint="Фокус установится через 1 секунду после загрузки"
            />
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>Фокус с выделением текста</h2>
      <CodeViewer :code="selectCode">
        <template #preview>
          <div class="demo-grid">
            <BlInput
              v-focus="{ select: true }"
              v-model="selectText"
              label="Фокус + выделение"
              placeholder="Текст будет выделен"
              hint="При фокусе текст автоматически выделится"
            />
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="api-section">
      <h3>Параметры</h3>
      <table>
        <thead>
          <tr>
            <th>Параметр</th>
            <th>Тип</th>
            <th>По умолчанию</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>delay</td>
            <td>number</td>
            <td>0</td>
            <td>Задержка перед установкой фокуса (мс)</td>
          </tr>
          <tr>
            <td>select</td>
            <td>boolean</td>
            <td>false</td>
            <td>Выделять ли текст при фокусе</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { ref } from 'vue'
import CodeViewer from '../../components/CodeViewer.vue'

const basicText = ref('')
const delayText = ref('')
const selectText = ref('Текст для выделения')

const basicCode = `<BlInput v-focus label="Автофокус" placeholder="Я в фокусе!" />`
const delayCode = `<BlInput v-focus="{ delay: 1000 }" label="Фокус через 1 секунду" placeholder="Подожди..." />`
const selectCode = `<BlInput v-focus="{ select: true }" label="Фокус + выделение" placeholder="Текст будет выделен" />`
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

.demo-grid {
  max-width: 500px;
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

.api-section table {
  width: 100%;
  border-collapse: collapse;
}

.api-section th,
.api-section td {
  padding: 8px 12px;
  text-align: left;
  border-bottom: 1px solid var(--bl-border-color);
}
</style>