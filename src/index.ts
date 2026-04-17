// ============ ЭКСПОРТ КОМПОНЕНТОВ ============

// Формы (Forms)
export {
  BlButton,
  BlInput,
  BlTextarea,
  BlSelect,
  BlCheckbox,
  BlRadio,
  BlSwitch,
  BlSlider,
  BlDatePicker,
  BlTimePicker,
  BlFileUpload,
  BlRating,
  BlAutocomplete,
  BlColorPicker,
  BlPhoneInput
} from './components'

// Данные (Data)
export {
  BlTable,
  BlTag,
  BlBadge,
  BlAvatar,
  BlProgress,
  BlPagination,
  BlEmpty,
  BlSkeleton,
  BlSpinner,
  BlCard
} from './components'

// Навигация (Navigation)
export {
  BlTabs,
  BlAccordion,
  BlMenu,
  BlSteps,
  BlSidebar,
  BlNavbar,
  BlBacktop,
  BlBreadcrumb,
  BlDrawer,
  BlModal
} from './components'

// Обратная связь (Feedback)
export {
  BlAlert,
  BlToast,
  BlTooltip,
  BlPopover,
  BlNotification,
  BlConfirmDialog,
  BlLoading
} from './components'

// ============ ЭКСПОРТ ТИПОВ КОМПОНЕНТОВ ============

// Типы форм
export type {
  BlButtonProps,
  BlInputProps,
  BlTextareaProps,
  BlSelectProps,
  SelectOption,
  BlCheckboxProps,
  BlRadioProps,
  BlSwitchProps,
  BlSliderProps,
  BlDatePickerProps,
  BlTimePickerProps,
  BlFileUploadProps,
  BlRatingProps,
  BlAutocompleteProps,
  AutocompleteOption,
  BlColorPickerProps,
  BlPhoneInputProps
} from './components'

// Типы данных
export type {
  BlTableProps,
  TableColumn,
  BlTagProps,
  BlBadgeProps,
  BlAvatarProps,
  BlProgressProps,
  BlPaginationProps,
  BlEmptyProps,
  BlSkeletonProps,
  BlSpinnerProps,
  BlCardProps
} from './components'

// Типы навигации
export type {
  BlTabsProps,
  TabItem,
  BlAccordionProps,
  AccordionItem,
  BlMenuProps,
  MenuItem,
  BlStepsProps,
  StepItem,
  BlSidebarProps,
  BlNavbarProps,
  BlBacktopProps,
  BlBreadcrumbProps,
  BreadcrumbItem,
  BlDrawerProps,
  BlModalProps
} from './components'

// Типы обратной связи
export type {
  BlAlertProps,
  BlToastProps,
  Toast,
  BlTooltipProps,
  BlPopoverProps,
  BlNotificationProps,
  BlConfirmDialogProps,
  BlLoadingProps
} from './components'

// ============ ДИРЕКТИВЫ ============

// Экспорт директив
export { 
  vBlSize,
  ripple,
  draggable,
  focus,
  debounce,
  throttle,
  clickOutside,
  copy,
  lazyLoad
} from './directives'

// Экспорт типов директив
export type { 
  BlSize, 
  BlWidth, 
  BlSizeOptions,
  RippleOptions,
  DraggableOptions,
  FocusOptions,
  DebounceOptions,
  ThrottleOptions,
  ClickOutsideOptions,
  CopyOptions,
  LazyLoadOptions
} from './directives'

// ============ КОМПОЗАБЛЫ ============

// Экспорт темы
export { useTheme } from './composables/useTheme'
export type { Theme } from './composables/useTheme'

// ============ СТИЛИ ============

// Импорт стилей (должен быть выполнен при использовании плагина)
import './styles/theme.css'
import './styles/dark-theme.css'
import './styles/tokens.css'

// ============ ПЛАГИН ДЛЯ ГЛОБАЛЬНОЙ РЕГИСТРАЦИИ ============

import type { App, Plugin } from 'vue'
import * as components from './components'
import * as directives from './directives'

const plugin: Plugin = {
  install(app: App) {
    // Регистрация всех компонентов
    Object.entries(components).forEach(([name, component]) => {
      if (component && typeof component === 'object') {
        // Регистрируем компонент по имени
        if ((component as any).name) {
          app.component((component as any).name, component)
        } else {
          app.component(name, component)
        }
      }
    })
    
    // Регистрация всех директив
    if (directives.vBlSize) {
      app.directive('bl-size', directives.vBlSize)
    }
    if (directives.ripple) {
      app.directive('ripple', directives.ripple)
    }
    if (directives.draggable) {
      app.directive('draggable', directives.draggable)
    }
    if (directives.focus) {
      app.directive('focus', directives.focus)
    }
    if (directives.debounce) {
      app.directive('debounce', directives.debounce)
    }
    if (directives.throttle) {
      app.directive('throttle', directives.throttle)
    }
    if (directives.clickOutside) {
      app.directive('click-outside', directives.clickOutside)
    }
    if (directives.copy) {
      app.directive('copy', directives.copy)
    }
    if (directives.lazyLoad) {
      app.directive('lazy-load', directives.lazyLoad)
    }
  }
}

export default plugin