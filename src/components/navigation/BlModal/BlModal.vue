<template>
  <Teleport to="body">
    <Transition name="bl-modal-fade">
      <div v-if="modelValue" class="bl-modal-overlay" @click="handleOverlayClick">
        <div class="bl-modal" :style="{ maxWidth: width }" @click.stop>
          <div class="bl-modal__header">
            <slot name="header">
              <h3 class="bl-modal__title">{{ title }}</h3>
            </slot>
            <button v-if="closable" class="bl-modal__close" @click="handleClose">✕</button>
          </div>
          <div class="bl-modal__body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="bl-modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
export interface BlModalProps {
  modelValue: boolean
  title?: string
  width?: string
  closable?: boolean
  closeOnOverlay?: boolean
}

const props = withDefaults(defineProps<BlModalProps>(), {
  width: '500px',
  closable: true,
  closeOnOverlay: true
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()

const handleClose = () => {
  if (props.closable) {
    emit('update:modelValue', false)
    emit('close')
  }
}

const handleOverlayClick = () => {
  if (props.closeOnOverlay) {
    handleClose()
  }
}
</script>

<style scoped>
.bl-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--bl-bg-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.bl-modal {
  background-color: var(--bl-bg-primary);
  border-radius: var(--bl-border-radius-lg);
  box-shadow: var(--bl-shadow-lg);
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.bl-modal__header {
  padding: var(--bl-spacing-md) var(--bl-spacing-lg);
  border-bottom: 1px solid var(--bl-border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bl-modal__title {
  margin: 0;
  font-size: var(--bl-font-size-lg);
  font-weight: 600;
  color: var(--bl-text-primary);
}

.bl-modal__close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--bl-text-secondary);
  transition: color var(--bl-transition-fast);
}

.bl-modal__close:hover {
  color: var(--bl-text-primary);
}

.bl-modal__body {
  padding: var(--bl-spacing-lg);
  overflow-y: auto;
  flex: 1;
}

.bl-modal__footer {
  padding: var(--bl-spacing-md) var(--bl-spacing-lg);
  border-top: 1px solid var(--bl-border-color);
  display: flex;
  justify-content: flex-end;
  gap: var(--bl-spacing-sm);
}

/* Анимации */
.bl-modal-fade-enter-active,
.bl-modal-fade-leave-active {
  transition: opacity var(--bl-transition-base);
}

.bl-modal-fade-enter-from,
.bl-modal-fade-leave-to {
  opacity: 0;
}

.bl-modal-fade-enter-active .bl-modal,
.bl-modal-fade-leave-active .bl-modal {
  transition: transform var(--bl-transition-base);
}

.bl-modal-fade-enter-from .bl-modal,
.bl-modal-fade-leave-to .bl-modal {
  transform: scale(0.95);
}
</style>