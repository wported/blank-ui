<div align="center">
  <h1>🎨 Blank UI</h1>
  <p>Vue 3 component library with dark theme support</p>
  
  <p>
    <a href="https://www.npmjs.com/package/@wported/blank-ui">
      <img src="https://img.shields.io/npm/v/@wported/blank-ui.svg" alt="npm version">
    </a>
    <a href="https://www.npmjs.com/package/@wported/blank-ui">
      <img src="https://img.shields.io/npm/dm/@wported/blank-ui.svg" alt="npm downloads">
    </a>
    <a href="https://github.com/your-repo/blank-ui/blob/main/LICENSE">
      <img src="https://img.shields.io/npm/l/@wported/blank-ui.svg" alt="license">
    </a>
    <a href="https://vuejs.org/">
      <img src="https://img.shields.io/badge/vue-3.5+-brightgreen.svg" alt="vue version">
    </a>
    <a href="https://www.typescriptlang.org/">
      <img src="https://img.shields.io/badge/typescript-5.8+-blue.svg" alt="typescript version">
    </a>
  </p>

  <h3>
    <a href="#english">English</a> | 
    <a href="#russian">Русский</a>
  </h3>
</div>

---

<a name="english"></a>
## 🇬🇧 English

### 📦 Installation

```bash
npm install @wported/blank-ui
# or
yarn add @wported/blank-ui
# or
pnpm add @wported/blank-ui
```

### 🚀 Quick Start

```vue
<template>
  <BlButton variant="primary">Click me</BlButton>
</template>

<script setup lang="ts">
import { BlButton } from '@wported/blank-ui'
import '@wported/blank-ui/style.css'
</script>
```

### 🎯 Directives

| Directive | Description |
|-----------|-------------|
| `v-bl-size` | Control component size and width |
| `v-ripple` | Add ripple effect on click |
| `v-click-outside` | Detect clicks outside element |
| `v-debounce` | Delay function execution |
| `v-throttle` | Limit function call frequency |
| `v-focus` | Auto-focus on element |
| `v-copy` | Copy text to clipboard |
| `v-draggable` | Make element draggable |
| `v-lazy-load` | Lazy load images |

### 🎨 Components

- **Forms (15):** BlButton, BlInput, BlTextarea, BlSelect, BlCheckbox, BlRadio, BlSwitch, BlSlider, BlDatePicker, BlTimePicker, BlFileUpload, BlRating, BlAutocomplete, BlColorPicker, BlPhoneInput
- **Data (10):** BlTable, BlTag, BlBadge, BlAvatar, BlProgress, BlPagination, BlEmpty, BlSkeleton, BlSpinner, BlCard
- **Navigation (10):** BlTabs, BlAccordion, BlMenu, BlSteps, BlSidebar, BlNavbar, BlBacktop, BlBreadcrumb, BlDrawer, BlModal
- **Feedback (7):** BlAlert, BlToast, BlTooltip, BlPopover, BlNotification, BlConfirmDialog, BlLoading

### 🛠️ Development

```bash
# Run demo locally
npm run demo:install
npm run demo:dev

# Build library
npm run build
```

### 📄 License

MIT © wported

<a name="russian"></a>

## 🇷🇺 Русский

### 📦 Установка

```bash
npm install @wported/blank-ui
# или
yarn add @wported/blank-ui
# или
pnpm add @wported/blank-ui
```

### 🚀 Быстрый старт

```vue
<template>
  <BlButton variant="primary">Нажми меня</BlButton>
</template>

<script setup lang="ts">
import { BlButton } from '@wported/blank-ui'
import '@wported/blank-ui/style.css'
</script>
```

### 🎯 Директивы

| Директива | Описание |
|-----------|--------|
| `v-bl-size` | Управление размером и шириной компонентов |
| `v-ripple` | Волновой эффект при клике |
| `v-click-outside` | Отслеживание клика вне элемента |
| `v-debounce` | Задержка выполнения функции |
| `v-throttle` | Ограничение частоты вызовов |
| `v-focus` | Автофокус на элементе |
| `v-copy` | Копирование текста в буфер |
| `v-draggable` | Перетаскивание элемента |
| `v-lazy-load` | Ленивая загрузка изображений |

### 🎨 Компоненты

- **Формы (15):** BlButton, BlInput, BlTextarea, BlSelect, BlCheckbox, BlRadio, BlSwitch, BlSlider, BlDatePicker, BlTimePicker, BlFileUpload, BlRating, BlAutocomplete, BlColorPicker, BlPhoneInput
- **Данные (10):** BlTable, BlTag, BlBadge, BlAvatar, BlProgress, BlPagination, BlEmpty, BlSkeleton, BlSpinner, BlCard
- **Навигация (10):** BlTabs, BlAccordion, BlMenu, BlSteps, BlSidebar, BlNavbar, BlBacktop, BlBreadcrumb, BlDrawer, BlModal
- **Обратная связь (7):** BlAlert, BlToast, BlTooltip, BlPopover, BlNotification, BlConfirmDialog, BlLoading

### 🛠️ Разработка

```bash
# Запуск демо локально
npm run demo:install
npm run demo:dev

# Сборка библиотеки
npm run build
```

### 📄 Лицензия

MIT © wported

<div align="center"> <sub>Built with ❤️ by wported</sub> </div>