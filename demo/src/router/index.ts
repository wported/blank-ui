import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/forms/button' },
  
  // ========== ФОРМЫ ==========
  { path: '/forms/button', component: () => import('../views/components/forms/ButtonDemo.vue') },
  { path: '/forms/input', component: () => import('../views/components/forms/InputDemo.vue') },
  { path: '/forms/select', component: () => import('../views/components/forms/SelectDemo.vue') },
  { path: '/forms/checkbox', component: () => import('../views/components/forms/CheckboxDemo.vue') },
  { path: '/forms/radio', component: () => import('../views/components/forms/RadioDemo.vue') },
  { path: '/forms/switch', component: () => import('../views/components/forms/SwitchDemo.vue') },
  { path: '/forms/slider', component: () => import('../views/components/forms/SliderDemo.vue') },
  { path: '/forms/date-picker', component: () => import('../views/components/forms/DatePickerDemo.vue') },
  { path: '/forms/time-picker', component: () => import('../views/components/forms/TimePickerDemo.vue') },
  { path: '/forms/file-upload', component: () => import('../views/components/forms/FileUploadDemo.vue') },
  { path: '/forms/rating', component: () => import('../views/components/forms/RatingDemo.vue') },
  { path: '/forms/autocomplete', component: () => import('../views/components/forms/AutocompleteDemo.vue') },
  { path: '/forms/color-picker', component: () => import('../views/components/forms/ColorPickerDemo.vue') },
  { path: '/forms/phone-input', component: () => import('../views/components/forms/PhoneInputDemo.vue') },
  { path: '/forms/textarea', component: () => import('../views/components/forms/TextareaDemo.vue') },
  
  // ========== ДАННЫЕ ==========
  { path: '/data/table', component: () => import('../views/components/data/TableDemo.vue') },
  { path: '/data/tag', component: () => import('../views/components/data/TagDemo.vue') },
  { path: '/data/badge', component: () => import('../views/components/data/BadgeDemo.vue') },
  { path: '/data/avatar', component: () => import('../views/components/data/AvatarDemo.vue') },
  { path: '/data/progress', component: () => import('../views/components/data/ProgressDemo.vue') },
  { path: '/data/pagination', component: () => import('../views/components/data/PaginationDemo.vue') },
  { path: '/data/empty', component: () => import('../views/components/data/EmptyDemo.vue') },
  { path: '/data/skeleton', component: () => import('../views/components/data/SkeletonDemo.vue') },
  { path: '/data/spinner', component: () => import('../views/components/data/SpinnerDemo.vue') },
  { path: '/data/card', component: () => import('../views/components/data/CardDemo.vue') },
  
  // ========== НАВИГАЦИЯ ==========
  { path: '/navigation/tabs', component: () => import('../views/components/navigation/TabsDemo.vue') },
  { path: '/navigation/accordion', component: () => import('../views/components/navigation/AccordionDemo.vue') },
  { path: '/navigation/menu', component: () => import('../views/components/navigation/MenuDemo.vue') },
  { path: '/navigation/steps', component: () => import('../views/components/navigation/StepsDemo.vue') },
  { path: '/navigation/sidebar', component: () => import('../views/components/navigation/SidebarDemo.vue') },
  { path: '/navigation/navbar', component: () => import('../views/components/navigation/NavbarDemo.vue') },
  { path: '/navigation/backtop', component: () => import('../views/components/navigation/BacktopDemo.vue') },
  { path: '/navigation/breadcrumb', component: () => import('../views/components/navigation/BreadcrumbDemo.vue') },
  { path: '/navigation/drawer', component: () => import('../views/components/navigation/DrawerDemo.vue') },
  { path: '/navigation/modal', component: () => import('../views/components/navigation/ModalDemo.vue') },
  
  // ========== ОБРАТНАЯ СВЯЗЬ ==========
  { path: '/feedback/alert', component: () => import('../views/components/feedback/AlertDemo.vue') },
  { path: '/feedback/toast', component: () => import('../views/components/feedback/ToastDemo.vue') },
  { path: '/feedback/tooltip', component: () => import('../views/components/feedback/TooltipDemo.vue') },
  { path: '/feedback/popover', component: () => import('../views/components/feedback/PopoverDemo.vue') },
  { path: '/feedback/notification', component: () => import('../views/components/feedback/NotificationDemo.vue') },
  { path: '/feedback/confirm-dialog', component: () => import('../views/components/feedback/ConfirmDialogDemo.vue') },
  { path: '/feedback/loading', component: () => import('../views/components/feedback/LoadingDemo.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router