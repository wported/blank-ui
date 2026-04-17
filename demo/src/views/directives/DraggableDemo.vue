<template>
  <div class="demo-page">
    <h1>🖱️ v-draggable</h1>
    <p class="description">Делает элемент перетаскиваемым</p>

    <div class="demo-section">
      <h2>Свободное перемещение</h2>
      <CodeViewer :code="freeCode">
        <template #preview>
          <div class="draggable-container">
            <div
              v-draggable
              class="draggable-box free"
            >
              🎯 Перетащи меня
            </div>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>Ограничение по оси X</h2>
      <CodeViewer :code="axisCode">
        <template #preview>
          <div class="draggable-container">
            <div
              v-draggable="{ axis: 'x' }"
              class="draggable-box axis-x"
            >
              ↔️ Только по горизонтали
            </div>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>С заданной областью перетаскивания</h2>
      <CodeViewer :code="handleCode">
        <template #preview>
          <div class="draggable-container">
            <div
              v-draggable="{ handle: '.drag-handle' }"
              class="draggable-box with-handle"
            >
              <div class="drag-handle">⋮⋮ Перетащи за эту область ⋮⋮</div>
              <p>Содержимое можно перемещать только за handle</p>
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
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>axis</td>
            <td>'x' | 'y' | 'both'</td>
            <td>Ось перемещения</td>
          </tr>
          <tr>
            <td>handle</td>
            <td>string</td>
            <td>CSS селектор элемента, за который можно перетаскивать</td>
          </tr>
          <tr>
            <td>bounds</td>
            <td>'parent' | 'window' | HTMLElement</td>
            <td>Ограничение области перемещения</td>
          </tr>
          <tr>
            <td>onDragStart</td>
            <td>Function</td>
            <td>Колбэк начала перетаскивания</td>
          </tr>
          <tr>
            <td>onDrag</td>
            <td>Function</td>
            <td>Колбэк во время перетаскивания</td>
          </tr>
          <tr>
            <td>onDragEnd</td>
            <td>Function</td>
            <td>Колбэк окончания перетаскивания</td>
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

const freeCode = `<div v-draggable class="draggable-box">
  🎯 Перетащи меня
</div>`

const axisCode = `<div v-draggable="{ axis: 'x' }" class="draggable-box">
  ↔️ Только по горизонтали
</div>`

const handleCode = `<div v-draggable="{ handle: '.drag-handle' }" class="draggable-box with-handle">
  <div class="drag-handle">⋮⋮ Перетащи за эту область ⋮⋮</div>
  <p>Содержимое можно перемещать только за handle</p>
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

.draggable-container {
  position: relative;
  min-height: 200px;
  background: var(--bl-bg-secondary);
  border-radius: 8px;
  margin-top: 20px;
}

.draggable-box {
  position: relative;
  display: inline-block;
  padding: 16px 24px;
  background: linear-gradient(135deg, var(--bl-color-primary), var(--bl-color-primary-hover));
  color: white;
  border-radius: 12px;
  cursor: grab;
  user-select: none;
  text-align: center;
}

.draggable-box:active {
  cursor: grabbing;
}

.free {
  background: linear-gradient(135deg, var(--bl-color-primary), var(--bl-color-primary-hover));
}

.axis-x {
  background: linear-gradient(135deg, var(--bl-color-success), var(--bl-color-success-hover));
}

.with-handle {
  background: linear-gradient(135deg, var(--bl-color-warning), var(--bl-color-warning-hover));
  flex-direction: column;
  gap: 12px;
}

.drag-handle {
  padding: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: grab;
  font-size: 14px;
  text-align: center;
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