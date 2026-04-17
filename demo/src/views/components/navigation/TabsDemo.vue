<template>
  <div class="demo-page">
    <h1>BlTabs</h1>
    <p class="demo-description">Вкладки для переключения между разными контентом.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <BlTabs :tabs="tabs" />
      </template>
    </CodeViewer>
  </div>
</template>

<script
  setup
  lang="ts"
>
import CodeViewer from '../../../components/CodeViewer.vue'

const tabs = [
  { label: 'Вкладка 1', component: { template: '<div>Содержимое вкладки 1</div>' } },
  { label: 'Вкладка 2', component: { template: '<div>Содержимое вкладки 2</div>' } },
  { label: 'Вкладка 3', component: { template: '<div>Содержимое вкладки 3</div>' } }
]

const basicCode = `<BlTabs :tabs="[
  { label: 'Вкладка 1', component: { template: '<div>Содержимое вкладки 1</div>' } },
  { label: 'Вкладка 2', component: { template: '<div>Содержимое вкладки 2</div>' } },
  { label: 'Вкладка 3', component: { template: '<div>Содержимое вкладки 3</div>' } }
]" />`
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
</style>