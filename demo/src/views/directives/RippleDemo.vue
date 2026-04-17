<template>
  <div class="demo-page">
    <h1>🌊 v-ripple</h1>
    <p class="description">Директива для создания волнового эффекта при клике на элемент</p>

    <div class="demo-section">
      <h2>Базовое использование</h2>
      <CodeViewer :code="basicCode">
        <template #preview>
          <div class="demo-flex">
            <BlButton
              v-ripple
              variant="primary"
            >Кнопка с ripple</BlButton>
            <BlButton
              v-ripple
              variant="secondary"
            >Тоже с ripple</BlButton>
            <div
              v-ripple
              class="ripple-box"
            >Кликабельный блок с ripple</div>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>Кастомизация</h2>
      <CodeViewer :code="customCode">
        <template #preview>
          <div class="demo-flex">
            <BlButton
              v-ripple="{ color: 'rgba(255,255,255,0.8)', duration: 600 }"
              variant="primary"
            >
              Светлый ripple
            </BlButton>
            <BlButton
              v-ripple="{ color: 'rgba(0,0,0,0.3)', duration: 300 }"
              variant="secondary"
            >
              Темный быстрый
            </BlButton>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>Отключение эффекта</h2>
      <CodeViewer :code="disabledCode">
        <template #preview>
          <BlButton
            v-ripple="false"
            variant="primary"
          >Без ripple эффекта</BlButton>
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
            <td>color</td>
            <td>string</td>
            <td>rgba(0,0,0,0.1)</td>
            <td>Цвет волнового эффекта</td>
          </tr>
          <tr>
            <td>duration</td>
            <td>number</td>
            <td>400</td>
            <td>Длительность анимации (мс)</td>
          </tr>
          <tr>
            <td>opacity</td>
            <td>number</td>
            <td>0.3</td>
            <td>Прозрачность эффекта</td>
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
import CodeViewer from '../../components/CodeViewer.vue'

const basicCode = `<BlButton v-ripple variant="primary">Кнопка с ripple</BlButton>
<div v-ripple class="ripple-box">Кликабельный блок</div>`

const customCode = `<BlButton v-ripple="{ color: 'rgba(255,255,255,0.8)', duration: 600 }" variant="primary">
  Кастомный ripple
</BlButton>`

const disabledCode = `<BlButton v-ripple="false" variant="primary">Без ripple</BlButton>`
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
  gap: 16px;
  align-items: center;
}

.ripple-box {
  padding: 12px 24px;
  background: var(--bl-bg-secondary);
  border-radius: 8px;
  cursor: pointer;
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

.api-section th {
  font-weight: 600;
  color: var(--bl-text-primary);
}
</style>