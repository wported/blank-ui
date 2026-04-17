<template>
  <div class="demo-page">
    <h1>BlInput</h1>
    <p class="demo-description">Поле ввода с поддержкой валидации и подсказок.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <BlInput
          v-model="basicValue"
          label="Обычное поле"
          placeholder="Введите текст"
        />
      </template>
    </CodeViewer>

    <CodeViewer :code="typesCode">
      <template #preview>
        <div class="demo-grid">
          <BlInput
            v-model="emailValue"
            type="email"
            label="Email"
            placeholder="email@example.com"
          />
          <BlInput
            v-model="passwordValue"
            type="password"
            label="Пароль"
            placeholder="********"
          />
          <BlInput
            v-model="numberValue"
            type="number"
            label="Число"
            placeholder="42"
          />
        </div>
      </template>
    </CodeViewer>

    <CodeViewer :code="validationCode">
      <template #preview>
        <BlInput
          v-model="validationValue"
          label="Email"
          placeholder="Введите email"
          :error="validationValue && !isValidEmail ? 'Неверный формат email' : ''"
          hint="Введите корректный email адрес"
        />
      </template>
    </CodeViewer>

    <CodeViewer :code="sizesCode">
      <template #preview>
        <div class="demo-flex">
          <BlInput
            v-bl-size="'small'"
            placeholder="Small"
          />
          <BlInput
            v-bl-size="'medium'"
            placeholder="Medium"
          />
          <BlInput
            v-bl-size="'large'"
            placeholder="Large"
          />
          <BlInput
            v-bl-size="'xlarge'"
            placeholder="XLarge"
          />
        </div>
      </template>
    </CodeViewer>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { ref, computed } from 'vue'
import CodeViewer from '../../../components/CodeViewer.vue'

const basicValue = ref('')
const emailValue = ref('')
const passwordValue = ref('')
const numberValue = ref('')
const validationValue = ref('')

const isValidEmail = computed(() => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(validationValue.value)
})

const basicCode = `<BlInput v-model="value" label="Обычное поле" placeholder="Введите текст" />`
const typesCode = `<BlInput v-model="email" type="email" label="Email" />
<BlInput v-model="password" type="password" label="Пароль" />
<BlInput v-model="number" type="number" label="Число" />`
const validationCode = `<BlInput 
  v-model="email" 
  label="Email" 
  placeholder="Введите email"
  :error="email && !isValid ? 'Неверный формат email' : ''"
  hint="Введите корректный email адрес"
/>`
const sizesCode = `<BlInput v-bl-size="'small'" placeholder="Small" />
<BlInput v-bl-size="'medium'" placeholder="Medium" />
<BlInput v-bl-size="'large'" placeholder="Large" />
<BlInput v-bl-size="'xlarge'" placeholder="XLarge" />`
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

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--bl-spacing-lg);
}

.demo-flex {
  display: flex;
  flex-wrap: wrap;
  gap: var(--bl-spacing-md);
  align-items: center;
}
</style>