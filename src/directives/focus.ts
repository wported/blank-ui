import type { Directive, DirectiveBinding } from 'vue'

export interface FocusOptions {
  delay?: number
  select?: boolean
}

const focus: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding<FocusOptions | boolean>) {
    const options = typeof binding.value === 'object' && binding.value !== null ? binding.value : {}
    const delay = options.delay || 0
    const select = options.select || false

    const focusElement = () => {
      let input: HTMLElement | null = null

      // Ищем input, textarea, select внутри элемента
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
        input = el as HTMLElement
      } else {
        input = el.querySelector('input, textarea, select')
      }

      if (input) {
        input.focus()
        if (select && (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement)) {
          input.select()
        }
      }
    }

    if (delay > 0) {
      setTimeout(focusElement, delay)
    } else {
      // Используем nextTick для обеспечения рендеринга
      setTimeout(focusElement, 0)
    }
  }
}

export default focus