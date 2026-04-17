import type { Directive, DirectiveBinding } from 'vue'

export interface RippleOptions {
  color?: string
  duration?: number
  opacity?: number
}

const ripple: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding<RippleOptions | boolean>) {
    const options = typeof binding.value === 'object' && binding.value !== null ? binding.value : {}
    const color = options.color || 'rgba(0, 0, 0, 0.1)'
    const duration = options.duration || 400
    const opacity = options.opacity || 0.3

    // Добавляем позиционирование
    if (getComputedStyle(el).position === 'static') {
      el.style.position = 'relative'
    }
    el.style.overflow = 'hidden'

    const createRipple = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = event.clientX - rect.left - size / 2
      const y = event.clientY - rect.top - size / 2

      const rippleEl = document.createElement('span')
      rippleEl.className = 'bl-ripple-effect'
      rippleEl.style.cssText = `
        position: absolute;
        top: ${y}px;
        left: ${x}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        opacity: ${opacity};
        pointer-events: none;
        transform: scale(0);
        transition: transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1);
      `

      el.appendChild(rippleEl)

      // Запускаем анимацию
      requestAnimationFrame(() => {
        rippleEl.style.transform = 'scale(4)'
        rippleEl.style.opacity = '0'
      })

      setTimeout(() => {
        if (rippleEl.parentNode) {
          rippleEl.remove()
        }
      }, duration)
    }

    const handler = (event: MouseEvent) => {
      if (binding.value !== false) {
        createRipple(event)
      }
    }

    el.addEventListener('click', handler)
      ; (el as any).__rippleHandler__ = handler
  },

  unmounted(el: HTMLElement) {
    const handler = (el as any).__rippleHandler__
    if (handler) {
      el.removeEventListener('click', handler)
      delete (el as any).__rippleHandler__
    }
  }
}

export default ripple