<template>
  <div class="demo-page">
    <h1>BlPopover</h1>
    <p class="demo-description">Всплывающая карточка с контентом.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <div class="demo-flex">
          <BlPopover placement="top">
            <template #trigger>
              <BlButton>Top</BlButton>
            </template>
            <div style="padding: 8px;">
              <p>Контент поповера</p>
              <BlButton size="small">Действие</BlButton>
            </div>
          </BlPopover>

          <BlPopover placement="bottom">
            <template #trigger>
              <BlButton>Bottom</BlButton>
            </template>
            <div style="padding: 8px;">Содержимое снизу</div>
          </BlPopover>
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

const basicCode = `<BlPopover placement="top">
  <template #trigger>
    <BlButton>Top</BlButton>
  </template>
  <div style="padding: 8px;">
    <p>Контент поповера</p>
    <BlButton size="small">Действие</BlButton>
  </div>
</BlPopover>

<BlPopover placement="bottom">
  <template #trigger>
    <BlButton>Bottom</BlButton>
  </template>
  <div style="padding: 8px;">Содержимое снизу</div>
</BlPopover>`
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
  justify-content: center;
}
</style>