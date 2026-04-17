<template>
  <div class="demo-page">
    <h1>BlNavbar</h1>
    <p class="demo-description">Навигационная панель.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <BlNavbar brand="Мой сайт">
          <BlMenu
            :items="menuItems"
            variant="horizontal"
          />
          <template #actions>
            <BlButton size="small">Войти</BlButton>
          </template>
        </BlNavbar>
        <div style="padding: 40px; text-align: center;">
          <p>Содержимое страницы</p>
        </div>
      </template>
    </CodeViewer>
  </div>
</template>

<script
  setup
  lang="ts"
>
import CodeViewer from '../../../components/CodeViewer.vue'

const menuItems = [
  { label: 'Главная' },
  { label: 'О нас' },
  { label: 'Услуги' },
  { label: 'Контакты' }
]

const basicCode = `<BlNavbar brand="Мой сайт">
  <BlMenu :items="[
    { label: 'Главная' },
    { label: 'О нас' },
    { label: 'Услуги' },
    { label: 'Контакты' }
  ]" variant="horizontal" />
  <template #actions>
    <BlButton size="small">Войти</BlButton>
  </template>
</BlNavbar>`
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