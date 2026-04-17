<template>
  <div class="demo-page">
    <h1>🖼️ v-lazy-load</h1>
    <p class="description">Загружает изображения только при появлении в зоне видимости. Прокрутите страницу вниз, чтобы увидеть загрузку изображений.</p>

    <div class="demo-section">
      <h2>📷 Базовое использование</h2>
      <CodeViewer :code="basicCode">
        <template #preview>
          <div class="lazy-grid">
            <div v-for="i in 6" :key="i" class="lazy-item">
              <img
                v-lazy-load="`https://picsum.photos/id/${i + 10}/400/300`"
                alt=""
                class="lazy-image"
              />
              <p>Изображение {{ i }}</p>
            </div>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>🎨 С плейсхолдером</h2>
      <CodeViewer :code="placeholderCode">
        <template #preview>
          <div class="lazy-grid">
            <div v-for="i in 4" :key="i" class="lazy-item">
              <img
                v-lazy-load="{
                  src: `https://picsum.photos/id/${i + 20}/400/300`,
                  placeholder: grayPlaceholder
                }"
                alt=""
                class="lazy-image"
              />
              <p>С плейсхолдером {{ i }}</p>
            </div>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>⚠️ С обработкой ошибок</h2>
      <CodeViewer :code="errorCode">
        <template #preview>
          <div class="lazy-grid">
            <div v-for="i in 3" :key="i" class="lazy-item">
              <img
                v-lazy-load="{
                  src: `https://invalid-url-${i}.com/image.jpg`,
                  placeholder: grayPlaceholder,
                  errorImage: errorPlaceholder
                }"
                alt=""
                class="lazy-image"
              />
              <p>Невалидный URL {{ i }}</p>
            </div>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>📱 С кастомным rootMargin</h2>
      <CodeViewer :code="rootMarginCode">
        <template #preview>
          <div class="lazy-grid">
            <div v-for="i in 3" :key="i" class="lazy-item">
              <img
                v-lazy-load="{
                  src: `https://picsum.photos/id/${i + 40}/400/300`,
                  rootMargin: '100px',
                  placeholder: grayPlaceholder
                }"
                alt=""
                class="lazy-image"
              />
              <p>Загружается за 100px до появления</p>
            </div>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>🖼️ Галерея</h2>
      <CodeViewer :code="galleryCode">
        <template #preview>
          <div class="gallery-grid">
            <div v-for="item in galleryImages" :key="item.id" class="gallery-item">
              <img
                v-lazy-load="{
                  src: item.src,
                  placeholder: grayPlaceholder,
                  errorImage: errorPlaceholder
                }"
                :alt="item.title"
                class="gallery-image"
              />
              <p>{{ item.title }}</p>
            </div>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="api-section">
      <h3>📖 Параметры</h3>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Параметр</th>
              <th>Тип</th>
              <th>По умолчанию</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>src</td>
              <td>string</td>
              <td>-</td>
              <td>URL изображения (обязательный)</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>string</td>
              <td>прозрачный SVG</td>
              <td>URL плейсхолдера</td>
            </tr>
            <tr>
              <td>errorImage</td>
              <td>string</td>
              <td>-</td>
              <td>URL при ошибке загрузки</td>
            </tr>
            <tr>
              <td>rootMargin</td>
              <td>string</td>
              <td>0px</td>
              <td>Отступ от зоны видимости</td>
            </tr>
            <tr>
              <td>threshold</td>
              <td>number</td>
              <td>0</td>
              <td>Порог срабатывания (0-1)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CodeViewer from '../../components/CodeViewer.vue'

const grayPlaceholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%239ca3af" font-size="16"%3ELoading...%3C/text%3E%3C/svg%3E'

const errorPlaceholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23ef4444"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23ffffff" font-size="16"%3EОшибка загрузки%3C/text%3E%3C/svg%3E'

const galleryImages = [
  { id: 1, title: 'Горы', src: 'https://picsum.photos/id/104/400/300' },
  { id: 2, title: 'Море', src: 'https://picsum.photos/id/15/400/300' },
  { id: 3, title: 'Лес', src: 'https://picsum.photos/id/96/400/300' },
  { id: 4, title: 'Город', src: 'https://picsum.photos/id/1/400/300' },
  { id: 5, title: 'Закат', src: 'https://picsum.photos/id/22/400/300' },
  { id: 6, title: 'Ночь', src: 'https://picsum.photos/id/32/400/300' }
]

const basicCode = '<img v-lazy-load="\'https://picsum.photos/id/10/400/300\'" class="lazy-image" />'

const placeholderCode = '<img v-lazy-load="{ src: \'https://picsum.photos/id/20/400/300\', placeholder: grayPlaceholder }" class="lazy-image" />'

const errorCode = '<img v-lazy-load="{ src: \'https://invalid-url.com/image.jpg\', placeholder: grayPlaceholder, errorImage: errorPlaceholder }" class="lazy-image" />'

const rootMarginCode = '<img v-lazy-load="{ src: \'https://picsum.photos/id/40/400/300\', rootMargin: \'100px\', placeholder: grayPlaceholder }" class="lazy-image" />'

const galleryCode = `<div class="gallery-grid">
  <div v-for="item in galleryImages" :key="item.id">
    <img v-lazy-load="{
      src: item.src,
      placeholder: grayPlaceholder,
      errorImage: errorPlaceholder
    }" />
    <p>{{ item.title }}</p>
  </div>
</div>`
</script>

<style scoped>
.demo-page {
  max-width: 1200px;
  margin: 0 auto;
}

.description {
  color: var(--bl-text-secondary);
  margin-bottom: 32px;
  line-height: 1.6;
}

.demo-section {
  margin-bottom: 48px;
}

.demo-section h2 {
  margin-bottom: 20px;
  font-size: 20px;
  color: var(--bl-text-primary);
}

.lazy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.lazy-item,
.gallery-item {
  text-align: center;
  background: var(--bl-bg-secondary);
  border-radius: 12px;
  padding: 16px;
  transition: transform 0.2s;
}

.lazy-item:hover,
.gallery-item:hover {
  transform: translateY(-4px);
}

.lazy-image,
.gallery-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  background: var(--bl-bg-tertiary);
}

.lazy-item p,
.gallery-item p {
  margin-top: 12px;
  color: var(--bl-text-secondary);
  font-size: 14px;
}

.api-section {
  margin-top: 48px;
  padding: 24px;
  background: var(--bl-bg-secondary);
  border-radius: 12px;
}

.api-section h3 {
  margin-top: 0;
  margin-bottom: 16px;
  color: var(--bl-text-primary);
}

.table-wrapper {
  overflow-x: auto;
}

.api-section table {
  width: 100%;
  border-collapse: collapse;
}

.api-section th,
.api-section td {
  padding: 10px 12px;
  text-align: left;
  border-bottom: 1px solid var(--bl-border-color);
  color: var(--bl-text-primary);
}

.api-section th {
  font-weight: 600;
  background: var(--bl-bg-tertiary);
}

.api-section code {
  background: var(--bl-bg-tertiary);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 13px;
}
</style>