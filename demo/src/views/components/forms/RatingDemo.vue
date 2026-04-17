<template>
  <div class="demo-page">
    <h1>BlRating</h1>
    <p class="demo-description">Рейтинг в виде звезд.</p>

    <CodeViewer :code="basicCode">
      <template #preview>
        <BlRating
          v-model="rating"
          label="Ваша оценка"
        />
        <div class="demo-message">Оценка: {{ rating }} из 5</div>
      </template>
    </CodeViewer>

    <CodeViewer :code="maxCode">
      <template #preview>
        <BlRating
          v-model="rating10"
          :max="10"
          label="Оценка из 10"
        />
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

const rating = ref(3)
const rating10 = ref(7)

const basicCode = `<BlRating v-model="rating" label="Ваша оценка" />`

const maxCode = `<BlRating v-model="rating" :max="10" label="Оценка из 10" />`
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