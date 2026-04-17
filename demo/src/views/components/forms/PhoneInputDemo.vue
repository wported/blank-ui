<template>
  <div class="demo-page">
    <h1>BlPhoneInput</h1>
    <p class="demo-description">Поле ввода телефонного номера с выбором кода страны.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <BlPhoneInput
          v-model="phone"
          label="Телефон"
          placeholder="123-456-789"
        />
        <div class="demo-message">Номер: {{ phone || 'не введен' }}</div>
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

const phone = ref('')

const basicCode = `<BlPhoneInput v-model="phone" label="Телефон" placeholder="123-456-789" />`
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

.demo-message {
  margin-top: var(--bl-spacing-md);
  padding: var(--bl-spacing-sm);
  background: var(--bl-bg-secondary);
  border-radius: var(--bl-border-radius-md);
}
</style>