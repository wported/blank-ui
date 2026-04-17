<template>
  <div class="demo-page">
    <h1>BlDrawer</h1>
    <p class="demo-description">Выдвижная панель.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <div class="demo-flex">
          <BlButton @click="drawerVisible = true">Открыть Drawer</BlButton>
        </div>
        <BlDrawer
          v-model="drawerVisible"
          title="Выдвижная панель"
          placement="right"
        >
          <p>Содержимое выдвижной панели</p>
          <p>Здесь может быть любая информация</p>
          <template #footer>
            <BlButton
              variant="secondary"
              @click="drawerVisible = false"
            >Закрыть</BlButton>
          </template>
        </BlDrawer>
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

const drawerVisible = ref(false)

const basicCode = `<BlButton @click="drawerVisible = true">Открыть Drawer</BlButton>
<BlDrawer v-model="drawerVisible" title="Выдвижная панель" placement="right">
  <p>Содержимое выдвижной панели</p>
  <template #footer>
    <BlButton variant="secondary" @click="drawerVisible = false">Закрыть</BlButton>
  </template>
</BlDrawer>`
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

.demo-flex {
  display: flex;
  gap: var(--bl-spacing-md);
}
</style>