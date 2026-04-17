<template>
  <div class="demo-page">
    <h1>BlMenu</h1>
    <p class="demo-description">Меню для навигации.</p>

    <CodeViewer :code="verticalCode">
      <template #preview>
        <BlMenu
          :items="verticalItems"
          variant="vertical"
        />
      </template>
    </CodeViewer>

    <CodeViewer :code="horizontalCode">
      <template #preview>
        <BlMenu
          :items="horizontalItems"
          variant="horizontal"
        />
      </template>
    </CodeViewer>
  </div>
</template>

<script
  setup
  lang="ts"
>
import CodeViewer from '../../../components/CodeViewer.vue'

const verticalItems = [
  { label: 'Профиль', icon: '👤', action: () => console.log('Profile') },
  { label: 'Настройки', icon: '⚙️', action: () => console.log('Settings') },
  { label: 'Выход', icon: '🚪', action: () => console.log('Logout') }
]

const horizontalItems = [
  { label: 'Главная', action: () => console.log('Home') },
  { label: 'О нас', action: () => console.log('About') },
  { label: 'Контакты', action: () => console.log('Contacts') }
]

const verticalCode = `<BlMenu :items="[
  { label: 'Профиль', icon: '👤', action: () => console.log('Profile') },
  { label: 'Настройки', icon: '⚙️', action: () => console.log('Settings') },
  { label: 'Выход', icon: '🚪', action: () => console.log('Logout') }
]" variant="vertical" />`

const horizontalCode = `<BlMenu :items="[
  { label: 'Главная', action: () => console.log('Home') },
  { label: 'О нас', action: () => console.log('About') },
  { label: 'Контакты', action: () => console.log('Contacts') }
]" variant="horizontal" />`
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