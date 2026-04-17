<template>
  <div class="demo-page">
    <h1>BlSelect</h1>
    <p class="demo-description">Выпадающий список для выбора опций.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <div style="max-width: 400px;">
          <BlSelect
            v-model="selected1"
            :options="options"
            label="Выберите опцию"
            placeholder="Выберите значение"
          />
        </div>
      </template>
    </CodeViewer>

    <CodeViewer :code="sizesCode">
      <template #preview>
        <div class="demo-sizes-container">
          <div class="demo-size-card">
            <div class="demo-size-label">Small</div>
            <BlSelect
              v-bl-size="'small'"
              v-model="selectedSmall"
              :options="options"
              placeholder="Small"
            />
          </div>
          <div class="demo-size-card">
            <div class="demo-size-label">Medium</div>
            <BlSelect
              v-bl-size="'medium'"
              v-model="selectedMedium"
              :options="options"
              placeholder="Medium"
            />
          </div>
          <div class="demo-size-card">
            <div class="demo-size-label">Large</div>
            <BlSelect
              v-bl-size="'large'"
              v-model="selectedLarge"
              :options="options"
              placeholder="Large"
            />
          </div>
          <div class="demo-size-card">
            <div class="demo-size-label">XLarge</div>
            <BlSelect
              v-bl-size="'xlarge'"
              v-model="selectedXlarge"
              :options="options"
              placeholder="XLarge"
            />
          </div>
        </div>
      </template>
    </CodeViewer>

    <CodeViewer :code="widthCode">
      <template #preview>
        <div class="demo-width-container">
          <div class="demo-width-card">
            <div class="demo-width-label">200px</div>
            <BlSelect
              v-bl-size="{ size: 'medium', width: 'sm' }"
              v-model="selectedSm"
              :options="options"
              placeholder="200px"
            />
          </div>
          <div class="demo-width-card">
            <div class="demo-width-label">300px</div>
            <BlSelect
              v-bl-size="{ size: 'medium', width: 'md' }"
              v-model="selectedMd"
              :options="options"
              placeholder="300px"
            />
          </div>
          <div class="demo-width-card">
            <div class="demo-width-label">400px</div>
            <BlSelect
              v-bl-size="{ size: 'medium', width: 'lg' }"
              v-model="selectedLg"
              :options="options"
              placeholder="400px"
            />
          </div>
          <div class="demo-width-card">
            <div class="demo-width-label">100%</div>
            <BlSelect
              v-bl-size="{ size: 'medium', width: 'full' }"
              v-model="selectedFull"
              :options="options"
              placeholder="100%"
            />
          </div>
        </div>
      </template>
    </CodeViewer>

    <CodeViewer :code="statesCode">
      <template #preview>
        <div class="demo-states-container">
          <div class="demo-state-card">
            <div class="demo-state-label">Disabled</div>
            <BlSelect
              v-model="selectedDisabled"
              :options="options"
              placeholder="Отключен"
              disabled
            />
          </div>
          <div class="demo-state-card">
            <div class="demo-state-label">Error</div>
            <BlSelect
              v-model="selectedError"
              :options="options"
              placeholder="С ошибкой"
              error="Пожалуйста, выберите значение"
            />
          </div>
          <div class="demo-state-card">
            <div class="demo-state-label">With Hint</div>
            <BlSelect
              v-model="selectedHint"
              :options="options"
              placeholder="С подсказкой"
              hint="Выберите один из вариантов"
            />
          </div>
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

const options = [
  { label: 'Опция 1', value: '1' },
  { label: 'Опция 2', value: '2' },
  { label: 'Опция 3', value: '3' },
  { label: 'Опция 4', value: '4' },
  { label: 'Опция 5', value: '5' }
]

const selected1 = ref('')
const selectedSmall = ref('')
const selectedMedium = ref('')
const selectedLarge = ref('')
const selectedXlarge = ref('')
const selectedSm = ref('')
const selectedMd = ref('')
const selectedLg = ref('')
const selectedFull = ref('')
const selectedDisabled = ref('')
const selectedError = ref('')
const selectedHint = ref('')

const basicCode = `<BlSelect v-model="selected" :options="options" label="Выберите опцию" placeholder="Выберите значение" />`

const sizesCode = `<div class="demo-sizes-container">
  <div class="demo-size-card">
    <div class="demo-size-label">Small</div>
    <BlSelect v-bl-size="'small'" v-model="selected" :options="options" placeholder="Small" />
  </div>
  <div class="demo-size-card">
    <div class="demo-size-label">Medium</div>
    <BlSelect v-bl-size="'medium'" v-model="selected" :options="options" placeholder="Medium" />
  </div>
  <div class="demo-size-card">
    <div class="demo-size-label">Large</div>
    <BlSelect v-bl-size="'large'" v-model="selected" :options="options" placeholder="Large" />
  </div>
  <div class="demo-size-card">
    <div class="demo-size-label">XLarge</div>
    <BlSelect v-bl-size="'xlarge'" v-model="selected" :options="options" placeholder="XLarge" />
  </div>
</div>`

const widthCode = `<div class="demo-width-container">
  <div class="demo-width-card">
    <div class="demo-width-label">200px</div>
    <BlSelect v-bl-size="{ size: 'medium', width: 'sm' }" v-model="selected" :options="options" placeholder="200px" />
  </div>
  <div class="demo-width-card">
    <div class="demo-width-label">300px</div>
    <BlSelect v-bl-size="{ size: 'medium', width: 'md' }" v-model="selected" :options="options" placeholder="300px" />
  </div>
  <div class="demo-width-card">
    <div class="demo-width-label">400px</div>
    <BlSelect v-bl-size="{ size: 'medium', width: 'lg' }" v-model="selected" :options="options" placeholder="400px" />
  </div>
  <div class="demo-width-card">
    <div class="demo-width-label">100%</div>
    <BlSelect v-bl-size="{ size: 'medium', width: 'full' }" v-model="selected" :options="options" placeholder="100%" />
  </div>
</div>`

const statesCode = `<div class="demo-states-container">
  <div class="demo-state-card">
    <div class="demo-state-label">Disabled</div>
    <BlSelect v-model="selected" :options="options" placeholder="Отключен" disabled />
  </div>
  <div class="demo-state-card">
    <div class="demo-state-label">Error</div>
    <BlSelect v-model="selected" :options="options" placeholder="С ошибкой" error="Пожалуйста, выберите значение" />
  </div>
  <div class="demo-state-card">
    <div class="demo-state-label">With Hint</div>
    <BlSelect v-model="selected" :options="options" placeholder="С подсказкой" hint="Выберите один из вариантов" />
  </div>
</div>`
</script>

<style scoped>
.demo-page {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-description {
  color: var(--bl-text-secondary);
  margin-bottom: var(--bl-spacing-xl);
}

/* Контейнер для размеров - горизонтальная сетка */
.demo-sizes-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  align-items: start;
}

.demo-size-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.demo-size-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--bl-text-primary);
  padding-left: 4px;
}

/* Контейнер для ширины - горизонтальная сетка */
.demo-width-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  align-items: start;
}

.demo-width-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.demo-width-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--bl-text-primary);
  padding-left: 4px;
}

/* Контейнер для состояний - горизонтальная сетка */
.demo-states-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: start;
}

.demo-state-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.demo-state-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--bl-text-primary);
  padding-left: 4px;
}

/* Адаптивность для мобильных устройств */
@media (max-width: 1024px) {
  .demo-sizes-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .demo-width-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .demo-states-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

@media (max-width: 640px) {
  .demo-sizes-container {
    grid-template-columns: 1fr;
  }

  .demo-width-container {
    grid-template-columns: 1fr;
  }

  .demo-states-container {
    grid-template-columns: 1fr;
  }
}
</style>