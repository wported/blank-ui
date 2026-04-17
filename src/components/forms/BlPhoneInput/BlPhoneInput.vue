<template>
  <div class="bl-phone-input">
    <label v-if="label" class="bl-phone-input__label">{{ label }}</label>
    <div class="bl-phone-input__wrapper">
      <select v-model="countryCode" class="bl-phone-input__code" @change="handleChange">
        <option v-for="country in countries" :key="country.code" :value="country.code">
          {{ country.flag }} {{ country.code }}
        </option>
      </select>
      <input
        type="tel"
        :value="localNumber"
        :placeholder="placeholder"
        class="bl-phone-input__number"
        @input="handleNumberInput"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

export interface BlPhoneInputProps {
  modelValue: string
  label?: string
  placeholder?: string
}

const props = defineProps<BlPhoneInputProps>()
const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: string]
}>()

const countries = [
  { code: '+7', flag: '🇷🇺' },
  { code: '+1', flag: '🇺🇸' },
  { code: '+44', flag: '🇬🇧' },
  { code: '+49', flag: '🇩🇪' },
  { code: '+33', flag: '🇫🇷' }
]

const countryCode = ref('+7')
const localNumber = ref('')

const updateFullNumber = () => {
  const fullNumber = `${countryCode.value}${localNumber.value}`
  emit('update:modelValue', fullNumber)
  emit('change', fullNumber)
}

const handleNumberInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  localNumber.value = target.value
  updateFullNumber()
}

const handleChange = () => {
  updateFullNumber()
}

watch(() => props.modelValue, (newValue) => {
  const match = newValue.match(/^(\+\d+)(.*)$/)
  if (match) {
    countryCode.value = match[1]
    localNumber.value = match[2]
  }
}, { immediate: true })
</script>

<style scoped>
.bl-phone-input {
  display: flex;
  flex-direction: column;
  gap: var(--bl-spacing-xs);
  width: 100%;
}

.bl-phone-input__label {
  font-size: var(--bl-font-size-sm);
  font-weight: 500;
  color: var(--bl-text-primary);
}

.bl-phone-input__wrapper {
  display: flex;
  gap: var(--bl-spacing-sm);
}

.bl-phone-input__code {
  padding: var(--bl-spacing-sm);
  border: 1px solid var(--bl-border-color);
  border-radius: var(--bl-border-radius-md);
  background-color: var(--bl-bg-primary);
  color: var(--bl-text-primary);
  cursor: pointer;
}

.bl-phone-input__number {
  flex: 1;
  padding: var(--bl-spacing-sm) var(--bl-spacing-md);
  font-size: var(--bl-font-size-md);
  border: 1px solid var(--bl-border-color);
  border-radius: var(--bl-border-radius-md);
  background-color: var(--bl-bg-primary);
  color: var(--bl-text-primary);
}

.bl-phone-input__number:focus {
  outline: none;
  border-color: var(--bl-color-primary);
}
</style>