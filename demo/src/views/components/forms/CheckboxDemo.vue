<template>
  <div class="demo-page">
    <h1>BlCheckbox</h1>
    <p class="demo-description">Чекбокс для выбора нескольких вариантов.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <BlCheckbox
          v-model="checked1"
          label="Обычный чекбокс"
        />
      </template>
    </CodeViewer>

    <CodeViewer :code="groupCode">
      <template #preview>
        <div class="demo-group">
          <BlCheckbox
            v-model="option1"
            label="Опция 1"
          />
          <BlCheckbox
            v-model="option2"
            label="Опция 2"
          />
          <BlCheckbox
            v-model="option3"
            label="Опция 3"
          />
        </div>
        <div class="demo-message">
          Выбрано: {{ selectedOptions }}
        </div>
      </template>
    </CodeViewer>

    <CodeViewer :code="disabledCode">
      <template #preview>
        <BlCheckbox
          v-model="checked2"
          label="Отключенный чекбокс"
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
import { ref, computed } from 'vue'
import CodeViewer from '../../../components/CodeViewer.vue'

const checked1 = ref(false)
const checked2 = ref(true)
const option1 = ref(false)
const option2 = ref(false)
const option3 = ref(false)

const selectedOptions = computed(() => {
  const selected = []
  if (option1.value) selected.push('Опция 1')
  if (option2.value) selected.push('Опция 2')
  if (option3.value) selected.push('Опция 3')
  return selected.length ? selected.join(', ') : 'ничего'
})

const basicCode = `<BlCheckbox v-model="checked" label="Обычный чекбокс" />`

const groupCode = `<BlCheckbox v-model="option1" label="Опция 1" />
<BlCheckbox v-model="option2" label="Опция 2" />
<BlCheckbox v-model="option3" label="Опция 3" />`

const disabledCode = `<BlCheckbox v-model="checked" label="Отключенный чекбокс" disabled />`
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