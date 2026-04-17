import type { Directive, DirectiveBinding } from 'vue'

export interface DraggableOptions {
  handle?: string
  axis?: 'x' | 'y' | 'both'
  bounds?: HTMLElement | 'parent' | 'window'
  onDragStart?: (event: MouseEvent) => void
  onDrag?: (event: MouseEvent, x: number, y: number) => void
  onDragEnd?: (event: MouseEvent, x: number, y: number) => void
}

const draggable: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding<DraggableOptions>) {
    const options = binding.value || {}
    const handle = options.handle ? el.querySelector(options.handle) as HTMLElement : el
    
    if (!handle) return
    
    let startX = 0
    let startY = 0
    let startLeft = 0
    let startTop = 0
    let isDragging = false
    
    // Устанавливаем начальную позицию
    if (getComputedStyle(el).position === 'static') {
      el.style.position = 'relative'
    }
    
    const onMouseMove = (event: MouseEvent) => {
      if (!isDragging) return
      
      event.preventDefault()
      
      let dx = event.clientX - startX
      let dy = event.clientY - startY
      
      if (options.axis === 'x') dy = 0
      if (options.axis === 'y') dx = 0
      
      let newLeft = startLeft + dx
      let newTop = startTop + dy
      
      // Ограничение по границам
      if (options.bounds) {
        let boundsRect: DOMRect
        if (options.bounds === 'parent' && el.parentElement) {
          boundsRect = el.parentElement.getBoundingClientRect()
          const elRect = el.getBoundingClientRect()
          newLeft = Math.max(0, Math.min(newLeft, boundsRect.width - elRect.width))
          newTop = Math.max(0, Math.min(newTop, boundsRect.height - elRect.height))
        }
      }
      
      el.style.left = `${newLeft}px`
      el.style.top = `${newTop}px`
      
      options.onDrag?.(event, newLeft, newTop)
    }
    
    const onMouseUp = (event: MouseEvent) => {
      if (!isDragging) return
      
      isDragging = false
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
      
      const left = parseFloat(el.style.left) || 0
      const top = parseFloat(el.style.top) || 0
      options.onDragEnd?.(event, left, top)
    }
    
    const onMouseDown = (event: MouseEvent) => {
      if (handle !== el && !handle.contains(event.target as HTMLElement)) {
        return
      }
      
      event.preventDefault()
      
      startX = event.clientX
      startY = event.clientY
      startLeft = parseFloat(el.style.left) || 0
      startTop = parseFloat(el.style.top) || 0
      isDragging = true
      
      options.onDragStart?.(event)
      
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
    }
    
    handle.addEventListener('mousedown', onMouseDown as EventListener)
    el.style.cursor = handle === el ? 'grab' : 'default'
    if (handle !== el) {
      handle.style.cursor = 'grab'
    }
    
    ;(el as any).__draggableHandlers__ = { onMouseDown, onMouseMove, onMouseUp, handle }
  },
  
  unmounted(el: HTMLElement) {
    const handlers = (el as any).__draggableHandlers__
    if (handlers) {
      handlers.handle.removeEventListener('mousedown', handlers.onMouseDown)
      document.removeEventListener('mousemove', handlers.onMouseMove)
      document.removeEventListener('mouseup', handlers.onMouseUp)
      delete (el as any).__draggableHandlers__
    }
  }
}

export default draggable