import type { Directive, DirectiveBinding } from 'vue'

export type BlSize = 'small' | 'medium' | 'large' | 'xlarge'
export type BlWidth = 'auto' | 'full' | 'sm' | 'md' | 'lg' | 'xl' | number

export interface BlSizeOptions {
  size?: BlSize
  width?: BlWidth
}

const sizeClasses: Record<BlSize, string> = {
  small: 'bl-size-small',
  medium: 'bl-size-medium',
  large: 'bl-size-large',
  xlarge: 'bl-size-xlarge'
}

const widthClasses: Record<string, string> = {
  auto: 'bl-width-auto',
  full: 'bl-width-full',
  sm: 'bl-width-sm',
  md: 'bl-width-md',
  lg: 'bl-width-lg',
  xl: 'bl-width-xl'
}

const widthStyles: Record<string, string> = {
  auto: 'auto',
  full: '100%',
  sm: '200px',
  md: '300px',
  lg: '400px',
  xl: '500px'
}

const sizeStyles: Record<BlSize, Record<string, string>> = {
  small: {
    '--bl-component-padding': 'var(--bl-spacing-xs) var(--bl-spacing-sm)',
    '--bl-component-font-size': 'var(--bl-font-size-xs)',
    '--bl-component-gap': 'var(--bl-spacing-xs)',
    '--bl-component-border-radius': 'var(--bl-border-radius-sm)',
    '--bl-component-height': '28px',
    '--bl-component-min-width': '100px'
  },
  medium: {
    '--bl-component-padding': 'var(--bl-spacing-sm) var(--bl-spacing-md)',
    '--bl-component-font-size': 'var(--bl-font-size-md)',
    '--bl-component-gap': 'var(--bl-spacing-sm)',
    '--bl-component-border-radius': 'var(--bl-border-radius-md)',
    '--bl-component-height': '36px',
    '--bl-component-min-width': '120px'
  },
  large: {
    '--bl-component-padding': 'var(--bl-spacing-md) var(--bl-spacing-lg)',
    '--bl-component-font-size': 'var(--bl-font-size-lg)',
    '--bl-component-gap': 'var(--bl-spacing-md)',
    '--bl-component-border-radius': 'var(--bl-border-radius-lg)',
    '--bl-component-height': '54px',
    '--bl-component-min-width': '160px'
  },
  xlarge: {
    '--bl-component-padding': 'var(--bl-spacing-lg) var(--bl-spacing-xl)',
    '--bl-component-font-size': 'var(--bl-font-size-xl)',
    '--bl-component-gap': 'var(--bl-spacing-lg)',
    '--bl-component-border-radius': 'var(--bl-border-radius-xl)',
    '--bl-component-height': '64px',
    '--bl-component-min-width': '200px'
  }
}

const applySize = (el: HTMLElement, size: BlSize) => {
  // Обновляем классы размера
  Object.values(sizeClasses).forEach(className => {
    el.classList.remove(className)
  })
  el.classList.add(sizeClasses[size])
  
  // Применяем CSS переменные размера
  const styles = sizeStyles[size]
  Object.entries(styles).forEach(([property, value]) => {
    el.style.setProperty(property, value)
  })
}

const applyWidth = (el: HTMLElement, width: BlWidth) => {
  // Удаляем все классы ширины
  Object.values(widthClasses).forEach(className => {
    el.classList.remove(className)
  })
  
  if (typeof width === 'number') {
    // Числовое значение - пиксели
    el.style.width = `${width}px`
    el.classList.add('bl-width-custom')
  } else if (width === 'auto') {
    el.style.width = 'auto'
    el.classList.add(widthClasses.auto)
  } else if (width === 'full') {
    el.style.width = '100%'
    el.classList.add(widthClasses.full)
  } else {
    el.style.width = widthStyles[width]
    el.classList.add(widthClasses[width])
  }
}

export const vBlSize: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding<BlSize | BlSizeOptions>) {
    const value = binding.value
    
    if (typeof value === 'string') {
      // Просто размер
      applySize(el, value)
    } else if (typeof value === 'object') {
      // Объект с размером и шириной
      if (value.size) applySize(el, value.size)
      if (value.width) applyWidth(el, value.width)
    }
  },
  
  updated(el: HTMLElement, binding: DirectiveBinding<BlSize | BlSizeOptions>) {
    const oldValue = binding.oldValue
    const newValue = binding.value
    
    if (oldValue !== newValue) {
      if (typeof newValue === 'string') {
        applySize(el, newValue)
      } else if (typeof newValue === 'object') {
        if (newValue.size) applySize(el, newValue.size)
        if (newValue.width) applyWidth(el, newValue.width)
      }
    }
  }
}

export default vBlSize