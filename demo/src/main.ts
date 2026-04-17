import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BlankUI from '../../src/index'
import '../../src/styles/theme.css'
import '../../src/styles/dark-theme.css'
import './styles/global.css'
import './styles/code.css'


// Импортируем Highlight.js
import 'highlight.js/styles/atom-one-dark.css' // Тема для подсветки (можно выбрать другую)
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import json from 'highlight.js/lib/languages/json'
import VueHighlightJS from '@highlightjs/vue-plugin'

// Регистрируем языки
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('css', css)
hljs.registerLanguage('json', json)
hljs.registerLanguage('vue', xml) // Vue использует XML подсветку


const app = createApp(App)
app.use(router)
app.use(BlankUI)
app.use(VueHighlightJS)
app.mount('#app')