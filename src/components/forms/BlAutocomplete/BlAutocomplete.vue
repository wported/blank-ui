<template>
  <div class="bl-autocomplete">
    <BlInput
      :model-value="searchQuery"
      :label="label"
      :placeholder="placeholder"
      :error="error"
      @update:model-value="handleInput"
      @blur="handleBlur"
    />
    <div v-if="filteredOptions.length > 0 && isOpen" class="bl-autocomplete__dropdown">
      <div
        v-for="option in filteredOptions"
        :key="option.value"
        class="bl-autocomplete__option"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BlInput from '../BlInput/BlInput.vue'

export interface AutocompleteOption {
  label: string
  value: string | number
}

export interface BlAutocompleteProps {
  modelValue: string | number
  options: AutocompleteOption[]
  label?: string
  placeholder?: string
  error?: string
}

const props = defineProps<BlAutocompleteProps>()
const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  select: [option: AutocompleteOption]
}>()

const searchQuery = ref<string>('')
const isOpen = ref(false)

const filteredOptions = computed(() => {
  if (!searchQuery.value) return props.options
  return props.options.filter(option =>
    option.label.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const handleInput = (value: string | number) => {
  searchQuery.value = String(value)
  isOpen.value = true
}

const selectOption = (option: AutocompleteOption) => {
  searchQuery.value = option.label
  emit('update:modelValue', option.value)
  emit('select', option)
  isOpen.value = false
}

const handleBlur = () => {
  setTimeout(() => {
    isOpen.value = false
  }, 200)
}
</script>

<style scoped>
.bl-autocomplete {
  position: relative;
  width: 100%;
}

.bl-autocomplete__dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--bl-bg-primary);
  border: 1px solid var(--bl-border-color);
  border-radius: var(--bl-border-radius-md);
  box-shadow: var(--bl-shadow-lg);
  max-height: 200px;
  overflow-y: auto;
  z-index: var(--bl-z-dropdown);
}

.bl-autocomplete__option {
  padding: var(--bl-spacing-sm) var(--bl-spacing-md);
  cursor: pointer;
  transition: background-color var(--bl-transition-fast);
  color: var(--bl-text-primary);
}

.bl-autocomplete__option:hover {
  background-color: var(--bl-bg-secondary);
}
</style>