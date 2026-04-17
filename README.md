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

## 📑 Table of Contents / Содержание

- **[English](#english)**
  - [📦 Installation](#-installation)
  - [🚀 Quick Start](#-quick-start)
  - [🎯 Directives](#-directives)
  - [🎨 Components](#-components)
  - [🎨 Theming](#-theming)
  - [📊 TypeScript](#-typescript)
  - [📝 Usage Examples](#-usage-examples)
  - [🛠️ Development & Testing](#-development--testing)
  - [📁 Project Structure](#-project-structure)
  - [🤝 Contributing](#-contributing)
  - [📄 License](#-license)

- **[Русский](#russian)**
  - [📦 Установка](#-установка-1)
  - [🚀 Быстрый старт](#-быстрый-старт-1)
  - [🎯 Директивы](#-директивы-1)
  - [🎨 Компоненты](#-компоненты-1)
  - [🎨 Темизация](#-темизация-1)
  - [📊 TypeScript](#-typescript-1)
  - [📝 Примеры использования](#-примеры-использования-1)
  - [🛠️ Разработка и тестирование](#-разработка-и-тестирование-1)
  - [📁 Структура проекта](#-структура-проекта-1)
  - [🤝 Вклад в проект](#-вклад-в-проект-1)
  - [📄 Лицензия](#-лицензия-1)

---

<a name="english"></a>
## 🇬🇧 English

### 📦 Installation

```bash
npm install @wported/blank-ui
```

```bash
yarn add @wported/blank-ui
```

```bash
pnpm add @wported/blank-ui
```

### 🚀 Quick Start

#### Global Registration

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import BlankUI from '@wported/blank-ui'
import '@wported/blank-ui/style.css'

const app = createApp(App)
app.use(BlankUI)
app.mount('#app')
```

#### Local Usage

```vue
<template>
  <BlButton variant="primary" @click="handleClick">
    Click me
  </BlButton>
</template>

<script setup lang="ts">
import { BlButton } from '@wported/blank-ui'
import '@wported/blank-ui/style.css'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

### 🎯 Directives

#### v-bl-size

Directive for managing component size and width. Allows dynamic customization without using props.

##### Size Types

| Value  | Description        |
|--------|--------------------|
| small  | Small size         |
| medium | Medium size (default) |
| large  | Large size         |
| xlarge | Extra large size   |

##### Width Types

| Value  | Width      |
|--------|------------|
| auto   | Automatic  |
| full   | 100%       |
| sm     | 200px      |
| md     | 300px      |
| lg     | 400px      |
| xl     | 500px      |
| number | Custom pixels |

##### Basic Usage (Size Only)

```vue
<template>
  <BlButton v-bl-size="'small'" variant="primary">Small</BlButton>
  <BlButton v-bl-size="'medium'" variant="primary">Medium</BlButton>
  <BlButton v-bl-size="'large'" variant="primary">Large</BlButton>
  <BlButton v-bl-size="'xlarge'" variant="primary">XLarge</BlButton>
</template>
```

##### Usage with Width

```vue
<template>
  <!-- Full width -->
  <BlInput 
    v-bl-size="{ size: 'large', width: 'full' }"
    v-model="text" 
    label="Full width input"
    placeholder="Enter text"
  />
  
  <!-- Fixed width 300px -->
  <BlSelect 
    v-bl-size="{ size: 'medium', width: 'md' }"
    v-model="selected" 
    :options="options"
    label="Medium select"
  />
  
  <!-- Custom width in pixels -->
  <BlInput 
    v-bl-size="{ size: 'medium', width: 350 }"
    v-model="customWidth" 
    label="350px width"
    placeholder="Custom width"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
const selected = ref('')
const customWidth = ref('')
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' }
]
</script>
```

##### Dynamic Size Change

```vue
<template>
  <div>
    <BlButton 
      :v-bl-size="currentSize" 
      variant="primary" 
      @click="cycleSize"
    >
      Current size: {{ currentSize }}
    </BlButton>
    
    <BlInput 
      :v-bl-size="{ size: currentSize, width: currentWidth }"
      v-model="dynamicText" 
      :label="`Size: ${currentSize}, Width: ${currentWidth}`"
      placeholder="Dynamic size"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { BlSize, BlWidth } from '@wported/blank-ui'

const sizes: BlSize[] = ['small', 'medium', 'large', 'xlarge']
const sizeIndex = ref(0)
const currentSize = computed(() => sizes[sizeIndex.value])

const widths: BlWidth[] = ['sm', 'md', 'lg', 'xl', 'full']
const widthIndex = ref(0)
const currentWidth = computed(() => widths[widthIndex.value])

const dynamicText = ref('')

const cycleSize = () => {
  sizeIndex.value = (sizeIndex.value + 1) % sizes.length
  widthIndex.value = (widthIndex.value + 1) % widths.length
}
</script>

#### v-ripple

Adds a ripple effect on click.

```vue
<template>
  <BlButton v-ripple variant="primary">Button with ripple</BlButton>
  <BlButton v-ripple="{ color: 'rgba(255,255,255,0.8)', duration: 600 }" variant="secondary">
    Custom ripple
  </BlButton>
</template>
```

#### v-click-outside

Calls a function when clicking outside the element.

```vue
<template>
  <div v-click-outside="closeMenu" class="dropdown">
    <p>Click outside this block to close it</p>
  </div>
</template>

<script setup>
const closeMenu = () => {
  console.log('Clicked outside!')
}
</script>
```

#### v-debounce

Delays function call until the specified time has passed since the last call.

```vue
<template>
  <BlInput 
    v-debounce:500="handleSearch"
    placeholder="Search with 500ms delay"
  />
</template>
```

#### v-throttle

Limits function call frequency (no more than once per specified interval).

```vue
<template>
  <div v-throttle:200="handleScroll" @scroll="handleScroll">
    <!-- Scrollable content -->
  </div>
</template>
```

#### v-focus

Automatically sets focus on the element when loaded.

```vue
<template>
  <BlInput v-focus placeholder="I'm in focus!" />
  <BlInput v-focus="{ delay: 1000, select: true }" placeholder="Focus after 1 second" />
</template>
```

#### v-copy

Copies the specified text to the clipboard on click.

```vue
<template>
  <BlButton v-copy="'Text to copy'" variant="primary">
    Copy text
  </BlButton>
</template>
```

#### v-draggable

Makes an element draggable.

```vue
<template>
  <div v-draggable class="draggable-box">
    Drag me
  </div>
</template>
```

#### v-lazy-load

Loads images only when they appear in the viewport.

```vue
<template>
  <img v-lazy-load="'https://example.com/image.jpg'" alt="Image" />
</template>
``````

### 🎨 Components

#### Forms (15 components)

| Component    | Description                           |
|--------------|---------------------------------------|
| BlButton     | Button with various style variants    |
| BlInput      | Input field with validation support   |
| BlTextarea   | Multi-line text input                 |
| BlSelect     | Dropdown select                       |
| BlCheckbox   | Checkbox                              |
| BlRadio      | Radio button                          |
| BlSwitch     | Toggle switch                         |
| BlSlider     | Value slider                          |
| BlDatePicker | Date picker                           |
| BlTimePicker | Time picker                           |
| BlFileUpload | File upload                           |
| BlRating     | Star rating                           |
| BlAutocomplete | Autocomplete input                  |
| BlColorPicker | Color picker                         |
| BlPhoneInput | Phone number input                    |

#### Data (10 components)

| Component   | Description                          |
|-------------|--------------------------------------|
| BlTable     | Table with sorting and pagination    |
| BlTag       | Tag/label                            |
| BlBadge     | Badge                                |
| BlAvatar    | User avatar                          |
| BlProgress  | Progress indicator                   |
| BlPagination | Pagination                          |
| BlEmpty     | Empty state                          |
| BlSkeleton  | Loading skeleton                     |
| BlSpinner   | Loading spinner                      |
| BlCard      | Content card                         |

#### Navigation (10 components)

| Component    | Description                    |
|--------------|--------------------------------|
| BlTabs       | Tabs                           |
| BlAccordion  | Accordion                      |
| BlMenu       | Menu                           |
| BlSteps      | Steps/stepper                  |
| BlSidebar    | Sidebar                        |
| BlNavbar     | Navigation bar                 |
| BlBacktop    | Back to top button             |
| BlBreadcrumb | Breadcrumbs                    |
| BlDrawer     | Drawer panel                   |
| BlModal      | Modal dialog                   |

#### Feedback (7 components)

| Component        | Description                  |
|------------------|------------------------------|
| BlAlert          | Alert message                |
| BlToast          | Toast notification           |
| BlTooltip        | Tooltip                      |
| BlPopover        | Popover card                 |
| BlNotification   | Notification system          |
| BlConfirmDialog  | Confirmation dialog          |
| BlLoading        | Loading indicator            |

### 🎨 Theming

Blank UI supports light and dark themes out of the box.

#### Using Theme

```vue
<script setup lang="ts">
import { useTheme } from '@wported/blank-ui'

const { isDark, toggleTheme, setTheme, initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <button @click="toggleTheme">
    {{ isDark ? '🌞 Light' : '🌙 Dark' }}
  </button>
  
  <button @click="setTheme('light')">Light</button>
  <button @click="setTheme('dark')">Dark</button>
  <button @click="setTheme('system')">System</button>
</template>
```

#### Customizing CSS Variables

```css
:root {
  --bl-color-primary: #ff6b6b;
  --bl-color-primary-hover: #ff5252;
  --bl-border-radius-md: 12px;
  --bl-transition-base: 300ms ease;
}
```

### 📊 TypeScript

Blank UI is fully written in TypeScript and provides all necessary types.

```typescript
import type { 
  BlButtonProps, 
  BlInputProps, 
  BlCardProps,
  BlSize,
  BlWidth,
  Theme 
} from '@wported/blank-ui'

const buttonConfig: BlButtonProps = {
  variant: 'primary',
  size: 'large'
}

const size: BlSize = 'large'
const width: BlWidth = 'full'
```

### 📝 Usage Examples

#### Form with Validation

```vue
<template>
  <BlCard variant="elevated">
    <BlInput
      v-model="form.email"
      label="Email"
      type="email"
      :error="errors.email"
      placeholder="Enter email"
    />
    
    <BlInput
      v-model="form.password"
      label="Password"
      type="password"
      :error="errors.password"
      placeholder="Enter password"
    />
    
    <BlSelect
      v-model="form.role"
      :options="roleOptions"
      label="Role"
    />
    
    <BlButton variant="primary" @click="submitForm">
      Submit
    </BlButton>
  </BlCard>
</template>
```

#### Data Table

```vue
<template>
  <BlTable
    :columns="columns"
    :data="users"
    variant="striped"
    selectable
    pagination
    @select="handleSelect"
  >
    <template #column-status="{ row }">
      <BlBadge :variant="row.status === 'active' ? 'success' : 'danger'">
        {{ row.status }}
      </BlBadge>
    </template>
    
    <template #actions="{ row }">
      <BlButton size="small" @click="editUser(row)">
        Edit
      </BlButton>
    </template>
  </BlTable>
</template>
```

### 🛠️ Development & Testing

#### Demo Application

For local testing of all components, use the built-in demo application:

```bash
# Install demo dependencies
npm run demo:install

# Run demo in development mode
npm run demo:dev
```

The demo application is available at http://localhost:5174 and includes:

- Interactive view of all 42 components
- Light/dark theme switching
- Source code preview for each component
- Responsive interface

#### Building the Library

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Publish to npm
npm publish
```

### 📁 Project Structure

```
blank-ui/
├── src/
│   ├── components/     # Vue components (42 components)
│   │   ├── forms/      # Forms (15 components)
│   │   ├── data/       # Data (10 components)
│   │   ├── navigation/ # Navigation (10 components)
│   │   └── feedback/   # Feedback (7 components)
│   ├── directives/     # Directives (v-bl-size)
│   ├── composables/    # Composables (useTheme)
│   ├── styles/         # CSS variables and themes
│   └── index.ts        # Entry point
├── demo/               # Demo application
│   ├── src/
│   │   ├── components/ # Demo components
│   │   ├── views/      # Demo pages
│   │   └── router/     # Routing
│   └── package.json
├── dist/               # Library build
├── package.json
├── vite.config.ts
└── README.md
```

### 🤝 Contributing

1. Fork the repository
2. Create a branch for your changes (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add amazing feature')
4. Push to your fork (git push origin feature/amazing-feature)
5. Open a Pull Request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

### 📄 License

MIT © wported

See [LICENSE](./LICENSE) for details.

---

<a name="russian"></a>
## 🇷🇺 Русский

### 📦 Установка

```bash
npm install @wported/blank-ui
```

```bash
yarn add @wported/blank-ui
```

```bash
pnpm add @wported/blank-ui
```

### 🚀 Быстрый старт

#### Глобальная регистрация

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import BlankUI from '@wported/blank-ui'
import '@wported/blank-ui/style.css'

const app = createApp(App)
app.use(BlankUI)
app.mount('#app')
```

#### Локальное использование

```vue
<template>
  <BlButton variant="primary" @click="handleClick">
    Нажми меня
  </BlButton>
</template>

<script setup lang="ts">
import { BlButton } from '@wported/blank-ui'
import '@wported/blank-ui/style.css'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

### 🎯 Директивы

#### v-bl-size

Директива для управления размером и шириной компонентов. Позволяет динамически изменять внешний вид компонентов.

##### Типы размеров

| Значение | Описание | Высота | Отступы |
|----------|----------|--------|---------|
| `small` | Маленький размер | 28px | 4px 8px |
| `medium` | Средний размер (по умолчанию) | 36px | 8px 16px |
| `large` | Большой размер | 44px | 12px 24px |
| `xlarge` | Очень большой размер | 52px | 16px 32px |

##### Типы ширины

| Значение | Ширина | Описание |
|----------|--------|----------|
| `auto` | auto | Автоматическая (по содержимому) |
| `full` | 100% | На всю ширину родителя |
| `sm` | 200px | Маленькая |
| `md` | 300px | Средняя |
| `lg` | 400px | Большая |
| `xl` | 500px | Очень большая |
| `number` | число px | Кастомная ширина в пикселях |

##### Базовое использование (только размер)

```vue
<template>
  <BlButton v-bl-size="'small'" variant="primary">Маленькая</BlButton>
  <BlButton v-bl-size="'medium'" variant="primary">Средняя</BlButton>
  <BlButton v-bl-size="'large'" variant="primary">Большая</BlButton>
  <BlButton v-bl-size="'xlarge'" variant="primary">Очень большая</BlButton>
</template>
Использование с шириной
vue
<template>
  <!-- На всю ширину -->
  <BlInput 
    v-bl-size="{ size: 'large', width: 'full' }"
    v-model="text" 
    label="Поле на всю ширину"
    placeholder="Введите текст"
  />
  
  <!-- Фиксированная ширина 300px -->
  <BlSelect 
    v-bl-size="{ size: 'medium', width: 'md' }"
    v-model="selected" 
    :options="options"
    label="Средний селект"
  />
  
  <!-- Произвольная ширина в пикселях -->
  <BlInput 
    v-bl-size="{ size: 'medium', width: 350 }"
    v-model="customWidth" 
    label="Ширина 350px"
    placeholder="Кастомная ширина"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
const selected = ref('')
const customWidth = ref('')
const options = [
  { label: 'Опция 1', value: '1' },
  { label: 'Опция 2', value: '2' }
]
</script>
Динамическое изменение размера
vue
<template>
  <div>
    <BlButton 
      :v-bl-size="currentSize" 
      variant="primary" 
      @click="cycleSize"
    >
      Текущий размер: {{ currentSize }}
    </BlButton>
    
    <BlInput 
      :v-bl-size="{ size: currentSize, width: 'auto' }"
      v-model="dynamicText" 
      :label="`Размер: ${currentSize}`"
      placeholder="Динамический размер"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { BlSize } from '@wported/blank-ui'

const sizes: BlSize[] = ['small', 'medium', 'large', 'xlarge']
const sizeIndex = ref(0)
const currentSize = computed(() => sizes[sizeIndex.value])
const dynamicText = ref('')

const cycleSize = () => {
  sizeIndex.value = (sizeIndex.value + 1) % sizes.length
}
</script>
Доступные компоненты
Директива v-bl-size работает со следующими компонентами:

BlButton - кнопки

BlInput - поля ввода

BlSelect - выпадающие списки

BlTextarea - текстовые области

Примечание: При использовании директивы с полями ввода и селектами рекомендуется указывать ширину width: 'auto' для автоматического размера по содержимому, или задавать фиксированную ширину при необходимости.

Другие директивы
v-ripple
Добавляет волновой эффект при клике на элемент.

vue
<template>
  <BlButton v-ripple variant="primary">Кнопка с ripple</BlButton>
  <BlButton v-ripple="{ color: 'rgba(255,255,255,0.8)', duration: 600 }" variant="secondary">
    Кастомный ripple
  </BlButton>
</template>
v-click-outside
Вызывает функцию при клике вне элемента.

vue
<template>
  <div v-click-outside="closeMenu" class="dropdown">
    <p>Клик вне этого блока закроет его</p>
  </div>
</template>

<script setup>
const closeMenu = () => {
  console.log('Клик снаружи!')
}
</script>
v-debounce
Откладывает вызов функции до тех пор, пока не пройдет указанное время после последнего вызова.

vue
<template>
  <BlInput 
    v-debounce:500="handleSearch"
    placeholder="Поиск с задержкой 500ms"
  />
</template>
v-throttle
Ограничивает частоту вызова функции (не чаще 1 раза за указанный интервал).

vue
<template>
  <div v-throttle:200="handleScroll" @scroll="handleScroll">
    <!-- Содержимое с прокруткой -->
  </div>
</template>
v-focus
Автоматически устанавливает фокус на элемент при загрузке.

vue
<template>
  <BlInput v-focus placeholder="Я в фокусе!" />
  <BlInput v-focus="{ delay: 1000, select: true }" placeholder="Фокус через 1 секунду" />
</template>
v-copy
Копирует указанный текст в буфер обмена при клике.

vue
<template>
  <BlButton v-copy="'Текст для копирования'" variant="primary">
    Скопировать текст
  </BlButton>
</template>
v-draggable
Делает элемент перетаскиваемым.

vue
<template>
  <div v-draggable class="draggable-box">
    Перетащи меня
  </div>
</template>
v-lazy-load
Загружает изображения только при появлении в зоне видимости.

vue
<template>
  <img v-lazy-load="'https://example.com/image.jpg'" alt="Image" />
</template>

### 🎨 Компоненты

#### Формы (15 компонентов)

| Компонент    | Описание                                    |
|--------------|---------------------------------------------|
| BlButton     | Кнопка с различными вариантами стилей       |
| BlInput      | Поле ввода с поддержкой валидации           |
| BlTextarea   | Многострочное поле ввода                    |
| BlSelect     | Выпадающий список                           |
| BlCheckbox   | Чекбокс                                     |
| BlRadio      | Радио кнопка                                |
| BlSwitch     | Переключатель                               |
| BlSlider     | Ползунок для выбора значения                |
| BlDatePicker | Выбор даты                                  |
| BlTimePicker | Выбор времени                               |
| BlFileUpload | Загрузка файлов                             |
| BlRating     | Рейтинг (звезды)                            |
| BlAutocomplete | Автодополнение                            |
| BlColorPicker | Выбор цвета                                |
| BlPhoneInput | Ввод телефонного номера                     |

#### Данные (10 компонентов)

| Компонент   | Описание                                   |
|-------------|--------------------------------------------|
| BlTable     | Таблица с сортировкой и пагинацией         |
| BlTag       | Тег/метка                                  |
| BlBadge     | Значок/бейдж                               |
| BlAvatar    | Аватар пользователя                        |
| BlProgress  | Индикатор прогресса                        |
| BlPagination | Пагинация                                 |
| BlEmpty     | Состояние "нет данных"                     |
| BlSkeleton  | Скелетон загрузки                          |
| BlSpinner   | Спиннер загрузки                           |
| BlCard      | Карточка контента                          |

#### Навигация (10 компонентов)

| Компонент    | Описание                          |
|--------------|-----------------------------------|
| BlTabs       | Вкладки                           |
| BlAccordion  | Аккордеон                         |
| BlMenu       | Меню                              |
| BlSteps      | Шаги/степпер                      |
| BlSidebar    | Боковая панель                    |
| BlNavbar     | Навигационная панель              |
| BlBacktop    | Кнопка "наверх"                   |
| BlBreadcrumb | Хлебные крошки                    |
| BlDrawer     | Выдвижная панель                  |
| BlModal      | Модальное окно                    |

#### Обратная связь (7 компонентов)

| Компонент        | Описание                        |
|------------------|---------------------------------|
| BlAlert          | Сообщение/предупреждение        |
| BlToast          | Всплывающее уведомление         |
| BlTooltip        | Подсказка                       |
| BlPopover        | Всплывающая карточка            |
| BlNotification   | Система уведомлений             |
| BlConfirmDialog  | Диалог подтверждения            |
| BlLoading        | Индикатор загрузки              |

### 🎨 Темизация

Blank UI поддерживает светлую и темную тему "из коробки".

#### Использование темы

```vue
<script setup lang="ts">
import { useTheme } from '@wported/blank-ui'

const { isDark, toggleTheme, setTheme, initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <button @click="toggleTheme">
    {{ isDark ? '🌞 Light' : '🌙 Dark' }}
  </button>
  
  <button @click="setTheme('light')">Light</button>
  <button @click="setTheme('dark')">Dark</button>
  <button @click="setTheme('system')">System</button>
</template>
```

#### Кастомизация CSS переменных

```css
:root {
  --bl-color-primary: #ff6b6b;
  --bl-color-primary-hover: #ff5252;
  --bl-border-radius-md: 12px;
  --bl-transition-base: 300ms ease;
}
```

### 📊 TypeScript

Blank UI полностью написан на TypeScript и предоставляет все необходимые типы.

```typescript
import type { 
  BlButtonProps, 
  BlInputProps, 
  BlCardProps,
  BlSize,
  BlWidth,
  Theme 
} from '@wported/blank-ui'

const buttonConfig: BlButtonProps = {
  variant: 'primary',
  size: 'large'
}

const size: BlSize = 'large'
const width: BlWidth = 'full'
```

### 📝 Примеры использования

#### Форма с валидацией

```vue
<template>
  <BlCard variant="elevated">
    <BlInput
      v-model="form.email"
      label="Email"
      type="email"
      :error="errors.email"
      placeholder="Введите email"
    />
    
    <BlInput
      v-model="form.password"
      label="Пароль"
      type="password"
      :error="errors.password"
      placeholder="Введите пароль"
    />
    
    <BlSelect
      v-model="form.role"
      :options="roleOptions"
      label="Роль"
    />
    
    <BlButton variant="primary" @click="submitForm">
      Отправить
    </BlButton>
  </BlCard>
</template>
```

#### Таблица с данными

```vue
<template>
  <BlTable
    :columns="columns"
    :data="users"
    variant="striped"
    selectable
    pagination
    @select="handleSelect"
  >
    <template #column-status="{ row }">
      <BlBadge :variant="row.status === 'active' ? 'success' : 'danger'">
        {{ row.status }}
      </BlBadge>
    </template>
    
    <template #actions="{ row }">
      <BlButton size="small" @click="editUser(row)">
        Редактировать
      </BlButton>
    </template>
  </BlTable>
</template>
```

### 🛠️ Разработка и тестирование

#### Демо-приложение

Для локального тестирования всех компонентов используйте встроенное демо-приложение:

```bash
# Установка зависимостей для демо
npm run demo:install

# Запуск демо в режиме разработки
npm run demo:dev
```

Демо-приложение доступно по адресу http://localhost:5174 и включает:

- Интерактивный просмотр всех 42 компонентов
- Переключение между светлой и темной темой
- Просмотр исходного кода каждого компонента
- Адаптивный интерфейс

#### Сборка библиотеки

```bash
# Установка зависимостей
npm install

# Сборка библиотеки
npm run build

# Публикация в npm
npm publish
```

### 📁 Структура проекта

```
blank-ui/
├── src/
│   ├── components/     # Vue компоненты (42 компонента)
│   │   ├── forms/      # Формы (15 компонентов)
│   │   ├── data/       # Данные (10 компонентов)
│   │   ├── navigation/ # Навигация (10 компонентов)
│   │   └── feedback/   # Обратная связь (7 компонентов)
│   ├── directives/     # Директивы (v-bl-size)
│   ├── composables/    # Composables (useTheme)
│   ├── styles/         # CSS переменные и темы
│   └── index.ts        # Точка входа
├── demo/               # Демо-приложение
│   ├── src/
│   │   ├── components/ # Демо-компоненты
│   │   ├── views/      # Страницы демо
│   │   └── router/     # Маршрутизация
│   └── package.json
├── dist/               # Сборка библиотеки
├── package.json
├── vite.config.ts
└── README.md
```

### 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для ваших изменений (git checkout -b feature/amazing-feature)
3. Зафиксируйте изменения (git commit -m 'Add amazing feature')
4. Отправьте изменения в ваш форк (git push origin feature/amazing-feature)
5. Откройте Pull Request

Подробнее см. [CONTRIBUTING.md](./CONTRIBUTING.md).

### 📄 Лицензия

MIT © wported

Подробнее см. [LICENSE](./LICENSE).

---

<div align="center">
  <sub>Built with ❤️ by wported</sub>
</div>
