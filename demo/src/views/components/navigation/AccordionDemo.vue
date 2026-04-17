<template>
  <div class="demo-page">
    <h1>BlAccordion</h1>
    <p class="demo-description">Аккордеон для сворачиваемых панелей.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <BlAccordion :items="items" />
      </template>
    </CodeViewer>
  </div>
</template>

<script
  setup
  lang="ts"
>
import CodeViewer from '../../../components/CodeViewer.vue'

const items = [
  { title: 'Раздел 1', component: { template: '<div>Содержимое раздела 1</div>' } },
  { title: 'Раздел 2', component: { template: '<div>Содержимое раздела 2</div>' } },
  { title: 'Раздел 3', component: { template: '<div>Содержимое раздела 3</div>' } }
]

const basicCode = `<BlAccordion :items="[
  { title: 'Раздел 1', component: { template: '<div>Содержимое раздела 1</div>' } },
  { title: 'Раздел 2', component: { template: '<div>Содержимое раздела 2</div>' } },
  { title: 'Раздел 3', component: { template: '<div>Содержимое раздела 3</div>' } }
]" />`
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
</style>