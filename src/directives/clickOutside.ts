import type { Directive, DirectiveBinding } from 'vue'

export interface ClickOutsideOptions {
  handler: (event: MouseEvent) => void
  include?: string[]
  exclude?: string[]
}

const clickOutside: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding<((event: MouseEvent) => void) | ClickOutsideOptions>) {
    let handler: (event: MouseEvent) => void
    let exclude: string[] = []

    if (typeof binding.value === 'function') {
      handler = binding.value
    } else if (typeof binding.value === 'object' && binding.value !== null) {
      handler = binding.value.handler
      exclude = binding.value.exclude || []
    } else {
      return
    }

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement

      // Проверяем исключения
      if (exclude.length && exclude.some(selector => target.closest(selector))) {
        return
      }

      if (!el.contains(target)) {
        handler(event)
      }
    }

    document.addEventListener('click', onClick)
      ; (el as any).__clickOutsideHandler__ = onClick
  },

  unmounted(el: HTMLElement) {
    const handler = (el as any).__clickOutsideHandler__
    if (handler) {
      document.removeEventListener('click', handler)
      delete (el as any).__clickOutsideHandler__
    }
  }
}

export default clickOutside