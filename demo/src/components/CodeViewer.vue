<template>
  <div class="code-viewer">
    <div class="code-viewer__header">
      <button 
        class="code-viewer__tab"
        :class="{ 'code-viewer__tab--active': activeTab === 'preview' }"
        @click="activeTab = 'preview'"
      >
        👁️ Preview
      </button>
      <button 
        class="code-viewer__tab"
        :class="{ 'code-viewer__tab--active': activeTab === 'code' }"
        @click="activeTab = 'code'"
      >
        📄 Code
      </button>
      <button 
        v-if="activeTab === 'code'"
        class="code-viewer__copy"
        @click="copyCode"
      >
        {{ copied ? '✓ Copied!' : '📋 Copy' }}
      </button>
    </div>
    
    <div class="code-viewer__content">
      <div v-show="activeTab === 'preview'" class="code-viewer__preview">
        <slot name="preview" />
      </div>
      
      <div v-show="activeTab === 'code'" class="code-viewer__code">
        <highlightjs 
          :language="language" 
          :code="cleanCode" 
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  code: string
  language?: string
}>()

const activeTab = ref<'preview' | 'code'>('preview')
const copied = ref(false)

// Очищаем код от экранирования для отображения
const cleanCode = computed(() => {
  let code = props.code
  // Возвращаем экранированные символы обратно
  code = code
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
  return code
})

const copyCode = async () => {
  await navigator.clipboard.writeText(cleanCode.value)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<style scoped>
.code-viewer {
  border: 1px solid var(--bl-border-color);
  border-radius: var(--bl-border-radius-lg);
  overflow: hidden;
  margin-bottom: var(--bl-spacing-lg);
  background: var(--bl-bg-primary);
}

.code-viewer__header {
  display: flex;
  align-items: center;
  gap: 0;
  background-color: var(--bl-bg-secondary);
  border-bottom: 1px solid var(--bl-border-color);
  position: relative;
}

.code-viewer__tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: var(--bl-text-secondary);
  transition: all 0.2s ease;
  font-weight: 500;
}

.code-viewer__tab:hover {
  color: var(--bl-text-primary);
  background-color: var(--bl-bg-tertiary);
}

.code-viewer__tab--active {
  color: var(--bl-color-primary);
  border-bottom: 2px solid var(--bl-color-primary);
  margin-bottom: -1px;
}

.code-viewer__copy {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  padding: 4px 12px;
  background-color: var(--bl-bg-tertiary);
  border: 1px solid var(--bl-border-color);
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  color: var(--bl-text-secondary);
  transition: all 0.2s ease;
  z-index: 10;
}

.code-viewer__copy:hover {
  background-color: var(--bl-color-primary);
  color: white;
  border-color: var(--bl-color-primary);
}

.code-viewer__content {
  background-color: var(--bl-bg-primary);
}

.code-viewer__preview {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.code-viewer__code {
  position: relative;
}

/* Стили для подсветки от highlight.js */
.code-viewer__code :deep(pre) {
  margin: 0;
  padding: 24px;
  border-radius: 0;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
}

/* Адаптация для мобильных */
@media (max-width: 768px) {
  .code-viewer__preview {
    padding: 16px;
  }
  
  .code-viewer__code :deep(pre) {
    padding: 16px;
    font-size: 12px;
  }
  
  .code-viewer__tab {
    padding: 8px 16px;
    font-size: 13px;
  }
}
</style>