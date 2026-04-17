<template>
  <div class="demo-page">
    <h1>BlBacktop</h1>
    <p class="demo-description">Кнопка прокрутки наверх.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <div style="height: 200px; overflow-y: auto; border: 1px solid var(--bl-border-color); padding: 20px;">
          <div style="height: 600px;">
            <p>Прокрутите вниз, чтобы увидеть кнопку "Наверх"</p>
            <p style="margin-top: 300px;">↓ Прокрутите еще ↓</p>
          </div>
          <BlBacktop :threshold="100" />
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

const basicCode = `<div style="height: 200px; overflow-y: auto;">
  <div style="height: 600px;">
    <p>Прокрутите вниз, чтобы увидеть кнопку "Наверх"</p>
  </div>
  <BlBacktop :threshold="100" />
</div>`
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