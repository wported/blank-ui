<template>
  <div :class="['bl-file-upload', { 'bl-file-upload--error': error, 'bl-file-upload--disabled': disabled }]">
    <label v-if="label" class="bl-file-upload__label">{{ label }}</label>
    <div class="bl-file-upload__area" @click="triggerFileInput" @dragover.prevent @drop.prevent="handleDrop">
      <input
        ref="fileInput"
        type="file"
        :accept="accept"
        :multiple="multiple"
        :disabled="disabled"
        class="bl-file-upload__input"
        @change="handleFileSelect"
      />
      <div class="bl-file-upload__content">
        <slot name="icon">📁</slot>
        <p>{{ dragActive ? 'Отпустите файлы' : 'Перетащите файлы или кликните для выбора' }}</p>
        <small v-if="hint">{{ hint }}</small>
      </div>
    </div>
    <div v-if="files.length > 0" class="bl-file-upload__list">
      <div v-for="(file, index) in files" :key="index" class="bl-file-upload__item">
        <span>{{ file.name }}</span>
        <button type="button" @click="removeFile(index)">✕</button>
      </div>
    </div>
    <span v-if="error" class="bl-file-upload__error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

export interface BlFileUploadProps {
  modelValue?: File[]
  label?: string
  accept?: string
  multiple?: boolean
  maxSize?: number
  error?: string
  hint?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<BlFileUploadProps>(), {
  multiple: false,
  disabled: false,
  modelValue: () => []
})

const emit = defineEmits<{
  'update:modelValue': [value: File[]]
  change: [files: File[]]
}>()

const fileInput = ref<HTMLInputElement>()
const dragActive = ref(false)
const files = ref<File[]>([...props.modelValue])

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  const selectedFiles = Array.from(target.files || [])
  addFiles(selectedFiles)
}

const handleDrop = (event: DragEvent) => {
  dragActive.value = false
  const droppedFiles = Array.from(event.dataTransfer?.files || [])
  addFiles(droppedFiles)
}

const addFiles = (newFiles: File[]) => {
  let updatedFiles = [...files.value]
  
  if (!props.multiple) {
    updatedFiles = newFiles.slice(0, 1)
  } else {
    updatedFiles = [...updatedFiles, ...newFiles]
  }
  
  files.value = updatedFiles
  emit('update:modelValue', files.value)
  emit('change', files.value)
}

const removeFile = (index: number) => {
  files.value.splice(index, 1)
  emit('update:modelValue', files.value)
  emit('change', files.value)
}

const triggerFileInput = () => {
  if (!props.disabled && fileInput.value) {
    fileInput.value.click()
  }
}
</script>

<style scoped>
.bl-file-upload {
  display: flex;
  flex-direction: column;
  gap: var(--bl-spacing-sm);
  width: 100%;
}

.bl-file-upload__label {
  font-size: var(--bl-font-size-sm);
  font-weight: 500;
  color: var(--bl-text-primary);
}

.bl-file-upload__area {
  border: 2px dashed var(--bl-border-color);
  border-radius: var(--bl-border-radius-lg);
  padding: var(--bl-spacing-xl);
  text-align: center;
  cursor: pointer;
  transition: all var(--bl-transition-fast);
  background-color: var(--bl-bg-secondary);
}

.bl-file-upload__area:hover {
  border-color: var(--bl-color-primary);
  background-color: var(--bl-bg-primary);
}

.bl-file-upload__input {
  display: none;
}

.bl-file-upload__content {
  color: var(--bl-text-secondary);
}

.bl-file-upload__content p {
  margin: var(--bl-spacing-sm) 0;
}

.bl-file-upload__list {
  display: flex;
  flex-direction: column;
  gap: var(--bl-spacing-xs);
}

.bl-file-upload__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--bl-spacing-sm);
  background-color: var(--bl-bg-secondary);
  border-radius: var(--bl-border-radius-md);
  font-size: var(--bl-font-size-sm);
}

.bl-file-upload__item button {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--bl-text-secondary);
  font-size: 18px;
}

.bl-file-upload__error {
  font-size: var(--bl-font-size-xs);
  color: var(--bl-color-danger);
}

.bl-file-upload--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>