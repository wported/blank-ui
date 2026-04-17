<template>
  <div class="demo-page">
    <h1>⚡ v-throttle</h1>
    <p class="description">Ограничивает частоту вызова функции - не чаще одного раза за указанный промежуток времени</p>

    <div class="demo-section">
      <h2>Скролл - отслеживание позиции</h2>
      <CodeViewer :code="scrollCode">
        <template #preview>
          <div class="scroll-demo">
            <div
              v-throttle:200="handleScroll"
              class="scroll-box"
              @scroll="handleScroll"
            >
              <div style="height: 800px; padding: 20px;">
                <p>📊 Количество вызовов: <strong>{{ scrollCount }}</strong></p>
                <p>📈 Последняя позиция: <strong>{{ scrollPosition }}px</strong></p>
                <p class="hint">Событие scroll срабатывает не чаще 1 раза в 200ms</p>
                <div style="height: 400px;"></div>
                <p>Продолжайте прокручивать...</p>
              </div>
            </div>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>Изменение размера окна</h2>
      <CodeViewer :code="resizeCode">
        <template #preview>
          <div class="resize-demo">
            <div class="resize-info">
              <p>📐 Размер окна: <strong>{{ windowSize.width }} x {{ windowSize.height }}</strong></p>
              <p>📊 Количество resize событий: <strong>{{ resizeCount }}</strong></p>
              <p class="hint">Resize срабатывает не чаще 1 раза в 300ms</p>
            </div>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>Движение мыши</h2>
      <CodeViewer :code="mousemoveCode">
        <template #preview>
          <div class="mousemove-demo">
            <div
              v-throttle:100="handleMouseMove"
              class="track-area"
              @mousemove="handleMouseMove"
            >
              <p>Перемещайте мышь по этой области</p>
              <p>📊 Координаты: <strong>{{ mouseX }}, {{ mouseY }}</strong></p>
              <p>📈 Количество обновлений: <strong>{{ mouseMoveCount }}</strong></p>
              <p class="hint">Обновление не чаще 1 раза в 100ms</p>
            </div>
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
            <td>300</td>
            <td>Минимальный интервал между вызовами (мс)</td>
          </tr>
          <tr>
            <td>handler</td>
            <td>Function</td>
            <td>-</td>
            <td>Функция, вызываемая с ограничением</td>
          </tr>
        </tbody>
      </table>
      <p class="usage-hint">💡 Используйте синтаксис: <code>v-throttle:200="handler"</code> или <code>v-throttle="{ delay:
      200, handler }"</code></p>
      <p class="usage-hint">📌 Отличие от debounce: throttle гарантирует выполнение не чаще N мс, а debounce ждет паузу
      </p>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { ref, onMounted, onUnmounted } from 'vue'
import CodeViewer from '../../components/CodeViewer.vue'

const scrollCount = ref(0)
const scrollPosition = ref(0)
const resizeCount = ref(0)
const windowSize = ref({ width: 0, height: 0 })
const mouseX = ref(0)
const mouseY = ref(0)
const mouseMoveCount = ref(0)

const handleScroll = (event: Event) => {
  scrollCount.value++
  const target = event.target as HTMLElement
  scrollPosition.value = target.scrollTop
}

const handleResize = () => {
  resizeCount.value++
  windowSize.value = {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

const handleMouseMove = (event: MouseEvent) => {
  mouseMoveCount.value++
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const scrollCode = `<div v-throttle:200="handleScroll" class="scroll-box" @scroll="handleScroll">
  <div style="height: 800px; padding: 20px;">
    <p>Количество вызовов: {{ scrollCount }}</p>
    <p>Последняя позиция: {{ scrollPosition }}px</p>
    <p class="hint">Событие scroll срабатывает не чаще 1 раза в 200ms</p>
  </div>
</div>`

const resizeCode = `<div class="resize-info">
  <p>Размер окна: {{ windowSize.width }} x {{ windowSize.height }}</p>
  <p>Количество resize событий: {{ resizeCount }}</p>
  <p class="hint">Resize срабатывает не чаще 1 раза в 300ms</p>
</div>`

const mousemoveCode = `<div v-throttle:100="handleMouseMove" class="track-area" @mousemove="handleMouseMove">
  <p>Перемещайте мышь по этой области</p>
  <p>Координаты: {{ mouseX }}, {{ mouseY }}</p>
  <p>Количество обновлений: {{ mouseMoveCount }}</p>
  <p class="hint">Обновление не чаще 1 раза в 100ms</p>
</div>`
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

.scroll-box {
  height: 300px;
  overflow-y: auto;
  background: var(--bl-bg-secondary);
  border-radius: 8px;
  border: 1px solid var(--bl-border-color);
}

.resize-info,
.track-area {
  padding: 20px;
  background: var(--bl-bg-secondary);
  border-radius: 8px;
  text-align: center;
}

.track-area {
  min-height: 200px;
  cursor: crosshair;
}

.hint {
  font-size: 12px;
  color: var(--bl-text-secondary);
  margin-top: 8px;
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

.usage-hint {
  margin-top: 16px;
  padding: 12px;
  background: var(--bl-bg-primary);
  border-radius: 8px;
  font-size: 14px;
}

.usage-hint code {
  background: var(--bl-bg-tertiary);
  padding: 2px 6px;
  border-radius: 4px;
}
</style>