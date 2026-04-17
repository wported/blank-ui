<template>
  <div class="demo-page">
    <h1>BlAlert</h1>
    <p class="demo-description">Алерты для отображения сообщений.</p>

    <CodeViewer :code="variantsCode">
      <template #preview>
        <div class="demo-flex">
          <BlAlert
            variant="info"
            title="Информация"
          >Это информационное сообщение</BlAlert>
          <BlAlert
            variant="success"
            title="Успех"
          >Операция выполнена успешно</BlAlert>
          <BlAlert
            variant="warning"
            title="Внимание"
          >Обратите внимание на это</BlAlert>
          <BlAlert
            variant="error"
            title="Ошибка"
          >Произошла ошибка</BlAlert>
        </div>
      </template>
    </CodeViewer>

    <CodeViewer :code="closableCode">
      <template #preview>
        <BlAlert
          variant="info"
          closable
        >Закрываемое сообщение</BlAlert>
      </template>
    </CodeViewer>
  </div>
</template>

<script
  setup
  lang="ts"
>
import CodeViewer from '../../../components/CodeViewer.vue'

const variantsCode = `<BlAlert variant="info" title="Информация">Это информационное сообщение</BlAlert>
<BlAlert variant="success" title="Успех">Операция выполнена успешно</BlAlert>
<BlAlert variant="warning" title="Внимание">Обратите внимание на это</BlAlert>
<BlAlert variant="error" title="Ошибка">Произошла ошибка</BlAlert>`

const closableCode = `<BlAlert variant="info" closable>Закрываемое сообщение</BlAlert>`
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
  flex-direction: column;
  gap: var(--bl-spacing-md);
}
</style>