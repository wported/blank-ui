<template>
  <div class="demo-page">
    <h1>BlBreadcrumb</h1>
    <p class="demo-description">Хлебные крошки для навигации.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <BlBreadcrumb :items="breadcrumbs" />
      </template>
    </CodeViewer>
  </div>
</template>

<script
  setup
  lang="ts"
>
import CodeViewer from '../../../components/CodeViewer.vue'

const breadcrumbs = [
  { label: 'Главная', link: '/' },
  { label: 'Каталог', link: '/catalog' },
  { label: 'Товары' }
]

const basicCode = `<BlBreadcrumb :items="[
  { label: 'Главная', link: '/' },
  { label: 'Каталог', link: '/catalog' },
  { label: 'Товары' }
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