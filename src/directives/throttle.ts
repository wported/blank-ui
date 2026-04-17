import type { Directive, DirectiveBinding } from 'vue'

export interface ThrottleOptions {
  delay?: number
  handler?: (event: Event) => void
}

const throttle: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding<ThrottleOptions | number | ((event: Event) => void)>) {
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

    let lastCall = 0
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    const handler = (event: Event) => {
      const now = Date.now()

      if (now - lastCall >= delay) {
        lastCall = now
        fn(event)
      } else if (!timeoutId) {
        timeoutId = setTimeout(() => {
          lastCall = Date.now()
          fn(event)
          timeoutId = null
        }, delay - (now - lastCall))
      }
    }

    el.addEventListener('scroll', handler)
    el.addEventListener('resize', handler)
    el.addEventListener('mousemove', handler)

      ; (el as any).__throttleHandler__ = handler
  },

  unmounted(el: HTMLElement) {
    const handler = (el as any).__throttleHandler__
    if (handler) {
      el.removeEventListener('scroll', handler)
      el.removeEventListener('resize', handler)
      el.removeEventListener('mousemove', handler)
      delete (el as any).__throttleHandler__
    }
  }
}

export default throttle