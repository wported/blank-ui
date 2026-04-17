<template>
  <div class="demo-page">
    <h1>BlTooltip</h1>
    <p class="demo-description">Всплывающие подсказки.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <div class="demo-flex">
          <BlTooltip content="Подсказка сверху">
            <BlButton>Top</BlButton>
          </BlTooltip>
          <BlTooltip
            content="Подсказка снизу"
            position="bottom"
          >
            <BlButton>Bottom</BlButton>
          </BlTooltip>
          <BlTooltip
            content="Подсказка слева"
            position="left"
          >
            <BlButton>Left</BlButton>
          </BlTooltip>
          <BlTooltip
            content="Подсказка справа"
            position="right"
          >
            <BlButton>Right</BlButton>
          </BlTooltip>
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

const basicCode = `<BlTooltip content="Подсказка сверху">
  <BlButton>Top</BlButton>
</BlTooltip>
<BlTooltip content="Подсказка снизу" position="bottom">
  <BlButton>Bottom</BlButton>
</BlTooltip>
<BlTooltip content="Подсказка слева" position="left">
  <BlButton>Left</BlButton>
</BlTooltip>
<BlTooltip content="Подсказка справа" position="right">
  <BlButton>Right</BlButton>
</BlTooltip>`
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
  flex-wrap: wrap;
  gap: var(--bl-spacing-md);
  align-items: center;
}
</style>