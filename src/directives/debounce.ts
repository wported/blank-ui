import type { Directive, DirectiveBinding } from 'vue'

export interface DebounceOptions {
  delay?: number
  leading?: boolean
  handler?: (event: Event) => void
}

const debounce: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding<DebounceOptions | number | ((event: Event) => void)>) {
    let delay = 300
    let fn: (event: Event) => void = () => { }

    if (typeof binding.value === 'function') {
      fn = binding.value
    } else if (typeof binding.value === 'number') {
      delay = binding.value
    } else if (typeof binding.value === 'object' && binding.value !== null) {
      delay = binding.value.delay || 300
      fn = binding.value.handler || (() => { })
    } else {
      return
    }

    let timeoutId: ReturnType<typeof setTimeout> | null = null

    const handler = (event: Event) => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        fn(event)
        timeoutId = null
      }, delay)
    }

    el.addEventListener('input', handler)
    el.addEventListener('click', handler)

      ; (el as any).__debounceHandler__ = handler
  },

  unmounted(el: HTMLElement) {
    const handler = (el as any).__debounceHandler__
    if (handler) {
      el.removeEventListener('input', handler)
      el.removeEventListener('click', handler)
      delete (el as any).__debounceHandler__
    }
  }
}

export default debounce