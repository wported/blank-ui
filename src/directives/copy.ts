import type { Directive, DirectiveBinding } from 'vue'

export interface CopyOptions {
  text: string
  successMessage?: string
  errorMessage?: string
  onSuccess?: () => void
  onError?: () => void
}

const copy: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding<string | CopyOptions>) {
    const getTextToCopy = (): string => {
      if (typeof binding.value === 'string') {
        return binding.value
      }
      return binding.value?.text || ''
    }

    const getOptions = (): CopyOptions => {
      if (typeof binding.value === 'object' && binding.value !== null) {
        return binding.value as CopyOptions
      }
      return { text: '' }
    }

    const handler = async () => {
      const text = getTextToCopy()
      const options = getOptions()

      if (!text) {
        console.warn('No text to copy')
        if (options.onError) {
          options.onError()
        }
        return
      }

      try {
        await navigator.clipboard.writeText(text)
        if (options.onSuccess) {
          options.onSuccess()
        }
        if (options.successMessage) {
          console.log(options.successMessage)
        }
      } catch (err) {
        console.error('Failed to copy:', err)
        if (options.onError) {
          options.onError()
        }
        if (options.errorMessage) {
          console.error(options.errorMessage)
        }
      }
    }

    el.style.cursor = 'pointer'
    el.addEventListener('click', handler)
      ; (el as any).__copyHandler__ = handler
  },

  unmounted(el: HTMLElement) {
    const handler = (el as any).__copyHandler__
    if (handler) {
      el.removeEventListener('click', handler)
      delete (el as any).__copyHandler__
    }
  }
}

export default copy