<template>
  <div class="demo-page">
    <h1>⏱️ v-debounce</h1>
    <p class="description">Откладывает вызов функции до тех пор, пока не пройдет указанное время после последнего вызова
    </p>

    <div class="demo-section">
      <h2>Поиск с задержкой</h2>
      <CodeViewer :code="searchCode">
        <template #preview>
          <div class="search-demo">
            <BlInput
              v-debounce:500="handleSearch"
              v-model="searchQuery"
              label="Поиск"
              placeholder="Начните вводить..."
              hint="Попробуйте быстро ввести текст - запрос сработает через 500ms после остановки"
            />
            <div class="search-result">
              <p>⚡ Последний запрос: <strong>{{ lastSearch }}</strong></p>
              <div
                class="typing-indicator"
                v-if="isTyping"
              >
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>Сохранение формы</h2>
      <CodeViewer :code="saveCode">
        <template #preview>
          <div class="save-demo">
            <BlTextarea
              v-debounce:1000="autoSave"
              v-model="noteText"
              label="Заметки"
              placeholder="Введите текст... (автосохранение через 1 секунду)"
              :rows="4"
            />
            <div class="save-status">
              <span v-if="isSaving">💾 Сохранение...</span>
              <span v-else-if="lastSaved">✅ Сохранено: {{ lastSaved }}</span>
              <span v-else>📝 Введите текст для автосохранения</span>
            </div>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>Проверка уникальности имени</h2>
      <CodeViewer :code="validateCode">
        <template #preview>
          <div class="validate-demo">
            <BlInput
              v-debounce:800="checkUsername"
              v-model="username"
              label="Имя пользователя ['admin', 'user', 'test', 'demo']"
              placeholder="Введите имя пользователя"
              :error="usernameError"
              hint="Проверка уникальности через 800ms после ввода"
            />
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="api-section">
      <h3>Параметры</h3>
      <table>
        <thead>
          <tr>
            <th>Параметр</th>
            <th>Тип</th>
            <th>По умолчанию</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>delay</td>
            <td>number</td>
            <td>300</td>
            <td>Задержка в миллисекундах</td>
          </tr>
          <tr>
            <td>handler</td>
            <td>Function</td>
            <td>-</td>
            <td>Функция, вызываемая после задержки</td>
          </tr>
        </tbody>
      </table>
      <p class="usage-hint">💡 Используйте синтаксис: <code>v-debounce:500="handler"</code> или <code>v-debounce="{ delay:
      500, handler }"</code></p>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { ref } from 'vue'
import CodeViewer from '../../components/CodeViewer.vue'

const searchQuery = ref('')
const lastSearch = ref('')
const isTyping = ref(false)

const noteText = ref('')
const isSaving = ref(false)
const lastSaved = ref('')

const username = ref('')
const usernameError = ref('')

const handleSearch = (event: Event) => {
  const value = (event.target as HTMLInputElement).value
  isTyping.value = true
  setTimeout(() => { isTyping.value = false }, 500)
  lastSearch.value = value
}

const autoSave = () => {
  isSaving.value = true
  setTimeout(() => {
    isSaving.value = false
    lastSaved.value = new Date().toLocaleTimeString()
  }, 500)
}

const checkUsername = () => {
  const takenUsernames = ['admin', 'user', 'test', 'demo']
  if (takenUsernames.includes(username.value.toLowerCase())) {
    usernameError.value = 'Имя пользователя уже занято'
  } else if (username.value.length > 0) {
    usernameError.value = ''
  }
}

const searchCode = `<BlInput 
  v-debounce:500="handleSearch"
  v-model="searchQuery"
  label="Поиск" 
  placeholder="Начните вводить..."
  hint="Запрос сработает через 500ms после остановки"
/>`

const saveCode = `<BlTextarea 
  v-debounce:1000="autoSave"
  v-model="noteText"
  label="Заметки"
  placeholder="Введите текст... (автосохранение через 1 секунду)"
  :rows="4"
/>`

const validateCode = `<BlInput 
  v-debounce:800="checkUsername"
  v-model="username"
  label="Имя пользователя" 
  placeholder="Введите имя пользователя"
  :error="usernameError"
  hint="Проверка уникальности через 800ms"
/>`
</script>

<style scoped>
.demo-page {
  max-width: 1000px;
  margin: 0 auto;
}

.description {
  color: var(--bl-text-secondary);
  margin-bottom: 32px;
}

.demo-section {
  margin-bottom: 48px;
}

.demo-section h2 {
  margin-bottom: 20px;
  font-size: 20px;
}

.search-result {
  margin-top: 16px;
  padding: 12px;
  background: var(--bl-bg-secondary);
  border-radius: 8px;
}

.typing-indicator {
  display: flex;
  gap: 4px;
  margin-top: 8px;
}

.typing-indicator span {
  width: 6px;
  height: 6px;
  background: var(--bl-color-primary);
  border-radius: 50%;
  animation: typing 1.4s infinite;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {

  0%,
  60%,
  100% {
    transform: translateY(0);
    opacity: 0.4;
  }

  30% {
    transform: translateY(-8px);
    opacity: 1;
  }
}

.save-status {
  margin-top: 12px;
  padding: 8px 12px;
  background: var(--bl-bg-secondary);
  border-radius: 8px;
  font-size: 14px;
}

.api-section {
  margin-top: 48px;
  padding: 24px;
  background: var(--bl-bg-secondary);
  border-radius: 12px;
}

.api-section h3 {
  margin-top: 0;
  margin-bottom: 16px;
}

.api-section table {
  width: 100%;
  border-collapse: collapse;
}

.api-section th,
.api-section td {
  padding: 8px 12px;
  text-align: left;
  border-bottom: 1px solid var(--bl-border-color);
}

.usage-hint {
  margin-top: 16px;
  padding: 12px;
  background: var(--bl-bg-primary);
  border-radius: 8px;
  font-size: 14px;
}

.usage-hint code {
  background: var(--bl-bg-tertiary);
  padding: 2px 6px;
  border-radius: 4px;
}
</style>