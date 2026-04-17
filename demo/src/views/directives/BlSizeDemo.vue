<template>
  <div class="demo-page">
    <h1>📏 v-bl-size</h1>
    <p class="description">Директива для управления размером и шириной компонентов</p>

    <div class="demo-section">
      <h2>Размеры кнопок</h2>
      <CodeViewer :code="buttonSizesCode">
        <template #preview>
          <div class="demo-flex">
            <BlButton
              v-bl-size="'small'"
              variant="primary"
            >Small</BlButton>
            <BlButton
              v-bl-size="'medium'"
              variant="primary"
            >Medium</BlButton>
            <BlButton
              v-bl-size="'large'"
              variant="primary"
            >Large</BlButton>
            <BlButton
              v-bl-size="'xlarge'"
              variant="primary"
            >XLarge</BlButton>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>Размеры полей ввода</h2>
      <CodeViewer :code="inputSizesCode">
        <template #preview>
          <div class="demo-grid">
            <BlInput
              v-bl-size="'small'"
              placeholder="Small input"
            />
            <BlInput
              v-bl-size="'medium'"
              placeholder="Medium input"
            />
            <BlInput
              v-bl-size="'large'"
              placeholder="Large input"
            />
            <BlInput
              v-bl-size="'xlarge'"
              placeholder="XLarge input"
            />
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>Размеры выпадающих списков</h2>
      <CodeViewer :code="selectSizesCode">
        <template #preview>
          <div class="demo-grid">
            <BlSelect
              v-bl-size="'small'"
              :options="options"
              placeholder="Small select"
            />
            <BlSelect
              v-bl-size="'medium'"
              :options="options"
              placeholder="Medium select"
            />
            <BlSelect
              v-bl-size="'large'"
              :options="options"
              placeholder="Large select"
            />
            <BlSelect
              v-bl-size="'xlarge'"
              :options="options"
              placeholder="XLarge select"
            />
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>Управление шириной</h2>
      <CodeViewer :code="widthCode">
        <template #preview>
          <div class="demo-grid">
            <BlInput
              v-bl-size="{ width: 'sm' }"
              placeholder="Ширина 200px"
            />
            <BlInput
              v-bl-size="{ width: 'md' }"
              placeholder="Ширина 300px"
            />
            <BlInput
              v-bl-size="{ width: 'lg' }"
              placeholder="Ширина 400px"
            />
            <BlInput
              v-bl-size="{ width: 'full' }"
              placeholder="Ширина 100%"
            />
            <BlInput
              v-bl-size="{ width: 250 }"
              placeholder="Кастомная ширина 250px"
            />
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>Комбинация размера и ширины</h2>
      <CodeViewer :code="combinedCode">
        <template #preview>
          <div class="demo-grid">
            <BlInput
              v-bl-size="{ size: 'large', width: 'md' }"
              placeholder="Large + 300px"
              label="Большое поле с шириной 300px"
            />
            <BlSelect
              v-bl-size="{ size: 'xlarge', width: 'lg' }"
              :options="options"
              placeholder="XLarge + 400px"
              label="Очень большой селект с шириной 400px"
            />
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>Динамическое изменение размера</h2>
      <CodeViewer :code="dynamicCode">
        <template #preview>
          <div class="dynamic-demo">
            <div class="demo-flex">
              <BlButton
                :v-bl-size="currentSize"
                variant="primary"
                @click="cycleSize"
              >
                Текущий размер: {{ currentSize }}
              </BlButton>
              <BlButton
                variant="secondary"
                @click="resetSize"
              >
                Сбросить
              </BlButton>
            </div>
            <BlInput
              :v-bl-size="{ size: currentSize, width: 'auto' }"
              v-model="dynamicText"
              :label="`Поле с динамическим размером: ${currentSize}`"
              placeholder="Введите текст"
            />
            <BlSelect
              :v-bl-size="{ size: currentSize, width: 'auto' }"
              :options="options"
              :label="`Селект с динамическим размером: ${currentSize}`"
              placeholder="Выберите опцию"
            />
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="api-section">
      <h3>Параметры</h3>

      <h4>Размеры (size)</h4>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Значение</th>
              <th>Описание</th>
              <th>Высота</th>
              <th>Отступы</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>small</td>
              <td>Маленький</td>
              <td>28px</td>
              <td>4px 8px</td>
            </tr>
            <tr>
              <td>medium</td>
              <td>Средний (по умолчанию)</td>
              <td>36px</td>
              <td>8px 16px</td>
            </tr>
            <tr>
              <td>large</td>
              <td>Большой</td>
              <td>44px</td>
              <td>12px 24px</td>
            </tr>
            <tr>
              <td>xlarge</td>
              <td>Очень большой</td>
              <td>52px</td>
              <td>16px 32px</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>Ширина (width)</h4>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Значение</th>
              <th>Ширина</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>auto</td>
              <td>auto</td>
              <td>Автоматическая (по содержимому)</td>
            </tr>
            <tr>
              <td>full</td>
              <td>100%</td>
              <td>На всю ширину родителя</td>
            </tr>
            <tr>
              <td>sm</td>
              <td>200px</td>
              <td>Маленькая</td>
            </tr>
            <tr>
              <td>md</td>
              <td>300px</td>
              <td>Средняя</td>
            </tr>
            <tr>
              <td>lg</td>
              <td>400px</td>
              <td>Большая</td>
            </tr>
            <tr>
              <td>xl</td>
              <td>500px</td>
              <td>Очень большая</td>
            </tr>
            <tr>
              <td>number</td>
              <td>число px</td>
              <td>Кастомная ширина</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { ref, computed } from 'vue'
import CodeViewer from '../../components/CodeViewer.vue'
import type { BlSize } from '../../../../src/directives/size'

const dynamicText = ref('')
const currentSizeIndex = ref(1)
const sizes: BlSize[] = ['small', 'medium', 'large', 'xlarge']

const currentSize = computed(() => sizes[currentSizeIndex.value])

const options = [
  { label: 'Опция 1', value: '1' },
  { label: 'Опция 2', value: '2' },
  { label: 'Опция 3', value: '3' },
  { label: 'Опция 4', value: '4' }
]

const cycleSize = () => {
  currentSizeIndex.value = (currentSizeIndex.value + 1) % sizes.length
}

const resetSize = () => {
  currentSizeIndex.value = 1 // medium
}

const buttonSizesCode = `<BlButton v-bl-size="'small'" variant="primary">Small</BlButton>
<BlButton v-bl-size="'medium'" variant="primary">Medium</BlButton>
<BlButton v-bl-size="'large'" variant="primary">Large</BlButton>
<BlButton v-bl-size="'xlarge'" variant="primary">XLarge</BlButton>`

const inputSizesCode = `<BlInput v-bl-size="'small'" placeholder="Small input" />
<BlInput v-bl-size="'medium'" placeholder="Medium input" />
<BlInput v-bl-size="'large'" placeholder="Large input" />
<BlInput v-bl-size="'xlarge'" placeholder="XLarge input" />`

const selectSizesCode = `<BlSelect v-bl-size="'small'" :options="options" placeholder="Small select" />
<BlSelect v-bl-size="'medium'" :options="options" placeholder="Medium select" />
<BlSelect v-bl-size="'large'" :options="options" placeholder="Large select" />
<BlSelect v-bl-size="'xlarge'" :options="options" placeholder="XLarge select" />`

const widthCode = `<BlInput v-bl-size="{ width: 'sm' }" placeholder="Ширина 200px" />
<BlInput v-bl-size="{ width: 'md' }" placeholder="Ширина 300px" />
<BlInput v-bl-size="{ width: 'lg' }" placeholder="Ширина 400px" />
<BlInput v-bl-size="{ width: 'full' }" placeholder="Ширина 100%" />
<BlInput v-bl-size="{ width: 250 }" placeholder="Кастомная ширина 250px" />`

const combinedCode = `<BlInput v-bl-size="{ size: 'large', width: 'md' }" placeholder="Large + 300px" label="Большое поле" />
<BlSelect v-bl-size="{ size: 'xlarge', width: 'lg' }" :options="options" placeholder="XLarge + 400px" label="Очень большой селект" />`

const dynamicCode = `<div class="demo-flex">
  <BlButton :v-bl-size="currentSize" variant="primary" @click="cycleSize">
    Текущий размер: {{ currentSize }}
  </BlButton>
</div>
<BlInput :v-bl-size="{ size: currentSize, width: 'auto' }" v-model="dynamicText" :label="'Поле с динамическим размером'" />
<BlSelect :v-bl-size="{ size: currentSize, width: 'auto' }" :options="options" :label="'Селект с динамическим размером'" />`
</script>

<style scoped>
.demo-page {
  max-width: 1200px;
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

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  align-items: start;
}

.dynamic-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: var(--bl-bg-secondary);
  border-radius: 12px;
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

.api-section h4 {
  margin: 20px 0 12px 0;
  font-size: 16px;
}

.table-wrapper {
  overflow-x: auto;
}

.api-section table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.api-section th,
.api-section td {
  padding: 10px 12px;
  text-align: left;
  border-bottom: 1px solid var(--bl-border-color);
}

.api-section th {
  font-weight: 600;
  background: var(--bl-bg-tertiary);
}
</style>