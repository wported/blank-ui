import type { Directive, DirectiveBinding } from 'vue'

export interface LazyLoadOptions {
  src: string
  placeholder?: string
  errorImage?: string
  rootMargin?: string
  threshold?: number
}

const lazyLoad: Directive = {
  mounted(el: HTMLImageElement, binding: DirectiveBinding<string | LazyLoadOptions>) {
    let src: string
    let placeholder = ''
    let errorImage = ''
    let rootMargin = '0px'
    let threshold = 0

    if (typeof binding.value === 'string') {
      src = binding.value
    } else if (typeof binding.value === 'object' && binding.value !== null) {
      src = binding.value.src
      placeholder = binding.value.placeholder || ''
      errorImage = binding.value.errorImage || ''
      rootMargin = binding.value.rootMargin || '0px'
      threshold = binding.value.threshold || 0
    } else {
      return
    }

    // Устанавливаем плейсхолдер если есть
    if (placeholder) {
      el.src = placeholder
    } else {
      // Прозрачный плейсхолдер по умолчанию
      el.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'
    }

    // Добавляем стили для плавного появления
    el.style.opacity = '0'
    el.style.transition = 'opacity 0.3s ease'

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = new Image()
          img.onload = () => {
            el.src = src
            el.style.opacity = '1'
          }
          img.onerror = () => {
            if (errorImage) {
              el.src = errorImage
              el.style.opacity = '1'
            } else {
              console.error(`Failed to load image: ${src}`)
            }
          }
          img.src = src
          observer.unobserve(el)
        }
      })
    }, {
      rootMargin,
      threshold
    })

    observer.observe(el)
      ; (el as any).__lazyLoadObserver__ = observer
  },

  unmounted(el: HTMLImageElement) {
    const observer = (el as any).__lazyLoadObserver__
    if (observer) {
      observer.unobserve(el)
      delete (el as any).__lazyLoadObserver__
    }
  }
}

export default lazyLoad