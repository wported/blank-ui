<template>
  <div class="demo-page">
    <h1>BlButton</h1>
    <p class="demo-description">Кнопка с различными вариантами стилей и размеров.</p>

    <CodeViewer :code="variantsCode">
      <template #preview>
        <div class="demo-flex">
          <BlButton variant="primary">Primary</BlButton>
          <BlButton variant="secondary">Secondary</BlButton>
          <BlButton variant="danger">Danger</BlButton>
        </div>
      </template>
    </CodeViewer>

    <CodeViewer :code="sizesCode">
      <template #preview>
        <div class="demo-flex">
          <BlButton
            v-bl-size="'small'"
            variant="primary"
          >Small</BlButton>
          <BlButton
            v-bl-size="'medium'"
            variant="primary"
          >Medium</BlButton>
          <BlButton
            v-bl-size="'large'"
            variant="primary"
          >Large</BlButton>
          <BlButton
            v-bl-size="'xlarge'"
            variant="primary"
          >XLarge</BlButton>
        </div>
      </template>
    </CodeViewer>

    <CodeViewer :code="statesCode">
      <template #preview>
        <div class="demo-flex">
          <BlButton
            variant="primary"
            disabled
          >Disabled</BlButton>
          <BlButton
            variant="primary"
            @click="handleClick"
          >Click me</BlButton>
        </div>
        <div
          v-if="clickCount > 0"
          class="demo-message"
        >
          Нажато {{ clickCount }} раз
        </div>
      </template>
    </CodeViewer>

    <CodeViewer :code="widthCode">
      <template #preview>
        <div class="demo-flex">
          <BlButton
            v-bl-size="{ size: 'large', width: 200 }"
            variant="primary"
          >
            Width 200px
          </BlButton>
          <BlButton
            v-bl-size="{ size: 'large', width: 'full' }"
            variant="primary"
          >
            Full Width
          </BlButton>
        </div>
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

const clickCount = ref(0)
const handleClick = () => clickCount.value++

const variantsCode = `<BlButton variant="primary">Primary</BlButton>
<BlButton variant="secondary">Secondary</BlButton>
<BlButton variant="danger">Danger</BlButton>`

const sizesCode = `<BlButton v-bl-size="'small'" variant="primary">Small</BlButton>
<BlButton v-bl-size="'medium'" variant="primary">Medium</BlButton>
<BlButton v-bl-size="'large'" variant="primary">Large</BlButton>
<BlButton v-bl-size="'xlarge'" variant="primary">XLarge</BlButton>`

const statesCode = `<BlButton variant="primary" disabled>Disabled</BlButton>
<BlButton variant="primary" @click="handleClick">Click me</BlButton>`

const widthCode = `<BlButton v-bl-size="{ size: 'large', width: 200 }" variant="primary">
  Width 200px
</BlButton>
<BlButton v-bl-size="{ size: 'large', width: 'full' }" variant="primary">
  Full Width
</BlButton>`
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

.demo-flex {
  display: flex;
  flex-wrap: wrap;
  gap: var(--bl-spacing-md);
  align-items: center;
}

.demo-message {
  margin-top: var(--bl-spacing-md);
  padding: var(--bl-spacing-sm) var(--bl-spacing-md);
  background: var(--bl-color-primary);
  color: white;
  border-radius: var(--bl-border-radius-md);
  text-align: center;
}
</style>