<template>
  <Teleport to="body">
    <Transition name="bl-drawer-fade">
      <div
        v-if="modelValue"
        class="bl-drawer-overlay"
        @click="closeOnOverlay && handleClose()"
      >
        <Transition :name="`bl-drawer-slide-${placement}`">
          <div
            v-if="modelValue"
            class="bl-drawer"
            :class="`bl-drawer--${placement}`"
            @click.stop
          >
            <div class="bl-drawer__header">
              <slot name="header">
                <h3>{{ title }}</h3>
              </slot>
              <button
                v-if="closable"
                class="bl-drawer__close"
                @click="handleClose"
              >✕</button>
            </div>
            <div class="bl-drawer__body">
              <slot />
            </div>
            <div
              v-if="$slots.footer"
              class="bl-drawer__footer"
            >
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script
  setup
  lang="ts"
>
export interface BlDrawerProps {
  modelValue: boolean
  title?: string
  placement?: 'left' | 'right' | 'top' | 'bottom'
  closable?: boolean
  closeOnOverlay?: boolean
}

const props = withDefaults(defineProps<BlDrawerProps>(), {
  placement: 'right',
  closable: true,
  closeOnOverlay: true
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()

const handleClose = () => {
  emit('update:modelValue', false)
  emit('close')
}
</script>

<style scoped>
.bl-drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}

.bl-drawer {
  position: fixed;
  background-color: var(--bl-bg-primary);
  box-shadow: var(--bl-shadow-lg);
  z-index: 1050;
  display: flex;
  flex-direction: column;
}

.bl-drawer--left {
  top: 0;
  left: 0;
  bottom: 0;
  width: 400px;
}

.bl-drawer--right {
  top: 0;
  right: 0;
  bottom: 0;
  width: 400px;
}

.bl-drawer--top {
  top: 0;
  left: 0;
  right: 0;
  height: 300px;
}

.bl-drawer--bottom {
  bottom: 0;
  left: 0;
  right: 0;
  height: 300px;
}

.bl-drawer__header {
  padding: 16px 24px;
  border-bottom: 1px solid var(--bl-border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bl-drawer__header h3 {
  margin: 0;
  font-size: 18px;
  color: var(--bl-text-primary);
}

.bl-drawer__close {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: var(--bl-text-secondary);
  transition: color 0.2s ease;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}

.bl-drawer__close:hover {
  color: var(--bl-text-primary);
  background-color: var(--bl-bg-secondary);
}

.bl-drawer__body {
  padding: 24px;
  overflow-y: auto;
  flex: 1;
}

.bl-drawer__footer {
  padding: 16px 24px;
  border-top: 1px solid var(--bl-border-color);
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* Анимации оверлея */
.bl-drawer-fade-enter-active,
.bl-drawer-fade-leave-active {
  transition: opacity 0.3s ease;
}

.bl-drawer-fade-enter-from,
.bl-drawer-fade-leave-to {
  opacity: 0;
}

/* Анимации для каждой позиции */
.bl-drawer-slide-left-enter-active,
.bl-drawer-slide-left-leave-active {
  transition: transform 0.3s ease;
}

.bl-drawer-slide-left-enter-from,
.bl-drawer-slide-left-leave-to {
  transform: translateX(-100%);
}

.bl-drawer-slide-right-enter-active,
.bl-drawer-slide-right-leave-active {
  transition: transform 0.3s ease;
}

.bl-drawer-slide-right-enter-from,
.bl-drawer-slide-right-leave-to {
  transform: translateX(100%);
}

.bl-drawer-slide-top-enter-active,
.bl-drawer-slide-top-leave-active {
  transition: transform 0.3s ease;
}

.bl-drawer-slide-top-enter-from,
.bl-drawer-slide-top-leave-to {
  transform: translateY(-100%);
}

.bl-drawer-slide-bottom-enter-active,
.bl-drawer-slide-bottom-leave-active {
  transition: transform 0.3s ease;
}

.bl-drawer-slide-bottom-enter-from,
.bl-drawer-slide-bottom-leave-to {
  transform: translateY(100%);
}

/* Адаптивность */
@media (max-width: 768px) {

  .bl-drawer--left,
  .bl-drawer--right {
    width: 85vw;
    max-width: 320px;
  }

  .bl-drawer--top,
  .bl-drawer--bottom {
    height: 50vh;
  }
}
</style>