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

// ============ ЭКСПОРТ ТИПОВ ============
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
export { vBlSize } from './directives'
export type { BlSize, BlWidth, BlSizeOptions } from './directives'

// ============ ТЕМА ============
export { useTheme } from './composables/useTheme'
export type { Theme } from './composables/useTheme'

// ============ СТИЛИ ============
import './styles/theme.css'
import './styles/dark-theme.css'

// ============ ПЛАГИН ============
import type { App, Plugin } from 'vue'
import * as components from './components'
import { vBlSize } from './directives'

const plugin: Plugin = {
  install(app: App) {
    // Регистрация всех компонентов
    Object.entries(components).forEach(([name, component]) => {
      if (component && typeof component === 'object' && 'name' in component) {
        app.component(name, component)
      } else if (component && typeof component === 'object') {
        // Если нет name, используем ключ
        app.component(name, component)
      }
    })
    
    // Регистрация директив
    app.directive('bl-size', vBlSize)
  }
}

export default plugin