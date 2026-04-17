<template>
  <div class="demo-page">
    <h1>BlSkeleton</h1>
    <p class="demo-description">Скелетон для отображения состояния загрузки.</p>
    
    <CodeViewer :code="textSkeletonCode">
      <template #preview>
        <BlSkeleton variant="text" :rows="3" />
      </template>
    </CodeViewer>
    
    <CodeViewer :code="circleSkeletonCode">
      <template #preview>
        <div class="demo-flex">
          <BlSkeleton variant="circle" :rows="1" width="40px" />
          <BlSkeleton variant="circle" :rows="1" width="60px" />
          <BlSkeleton variant="circle" :rows="1" width="80px" />
        </div>
      </template>
    </CodeViewer>
    
    <CodeViewer :code="rectSkeletonCode">
      <template #preview>
        <BlSkeleton variant="rect" :rows="1" width="100%" />
      </template>
    </CodeViewer>
    
    <CodeViewer :code="widthSkeletonCode">
      <template #preview>
        <BlSkeleton variant="text" :rows="4" :width="['80%', '100%', '60%', '90%']" />
      </template>
    </CodeViewer>
    
    <CodeViewer :code="loadingSkeletonCode">
      <template #preview>
        <div class="demo-toggle">
          <BlButton @click="toggleLoading">
            {{ isLoading ? 'Показать данные' : 'Показать скелетон' }}
          </BlButton>
        </div>
        
        <div v-if="!isLoading" class="demo-content">
          <div class="demo-card">
            <h3>Загруженные данные</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        
        <div v-else class="demo-skeleton">
          <BlSkeleton variant="text" :rows="2" width="100%" />
          <BlSkeleton variant="text" :rows="3" :width="['100%', '95%', '90%']" />
        </div>
      </template>
    </CodeViewer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CodeViewer from '../../../components/CodeViewer.vue'

const isLoading = ref(true)

const toggleLoading = () => {
  isLoading.value = !isLoading.value
}

const textSkeletonCode = `<BlSkeleton variant="text" :rows="3" />`

const circleSkeletonCode = `<BlSkeleton variant="circle" :rows="1" width="40px" />
<BlSkeleton variant="circle" :rows="1" width="60px" />
<BlSkeleton variant="circle" :rows="1" width="80px" />`

const rectSkeletonCode = `<BlSkeleton variant="rect" :rows="1" width="100%" />`

const widthSkeletonCode = `<BlSkeleton variant="text" :rows="4" :width="['80%', '100%', '60%', '90%']" />`

const loadingSkeletonCode = `<div class="demo-toggle">
  <BlButton @click="toggleLoading">
    {{ isLoading ? 'Показать данные' : 'Показать скелетон' }}
  </BlButton>
</div>

<div v-if="!isLoading" class="demo-content">
  <div class="demo-card">
    <h3>Загруженные данные</h3>
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
</div>

<div v-else class="demo-skeleton">
  <BlSkeleton variant="text" :rows="2" width="100%" />
  <BlSkeleton variant="text" :rows="3" :width="['100%', '95%', '90%']" />
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

.demo-flex {
  display: flex;
  gap: var(--bl-spacing-md);
  align-items: center;
}

.demo-toggle {
  margin-bottom: var(--bl-spacing-md);
}

.demo-content {
  animation: fadeIn 0.3s ease;
}

.demo-card {
  padding: var(--bl-spacing-lg);
  background-color: var(--bl-bg-secondary);
  border-radius: var(--bl-border-radius-lg);
}

.demo-card h3 {
  margin: 0 0 var(--bl-spacing-sm) 0;
  color: var(--bl-text-primary);
}

.demo-skeleton {
  padding: var(--bl-spacing-lg);
  background-color: var(--bl-bg-secondary);
  border-radius: var(--bl-border-radius-lg);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>