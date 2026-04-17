<template>
  <div class="demo-page">
    <h1>👆 v-click-outside</h1>
    <p class="description">Вызывает функцию при клике ВНЕ элемента. Используется для закрытия выпадающих меню, модальных
      окон и т.д.</p>

    <div class="demo-section">
      <h2>🎯 Как это работает?</h2>
      <div class="explanation">
        <div class="explanation-box">
          <div class="explanation-inner">
            <span class="inside">🔵 Внутри</span>
            <span class="outside">🟢 Снаружи</span>
          </div>
          <p>Клик <strong class="inside-text">внутри</strong> синей области НЕ вызовет функцию</p>
          <p>Клик <strong class="outside-text">снаружи</strong> (на зеленой области) вызовет функцию и закроет меню</p>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>📋 Выпадающее меню</h2>
      <CodeViewer :code="dropdownCode">
        <template #preview>
          <div class="dropdown-demo">
            <BlButton
              @click="isOpen = !isOpen"
              variant="primary"
            >
              {{ isOpen ? '❌ Закрыть меню' : '📋 Открыть меню' }}
            </BlButton>

            <div
              v-if="isOpen"
              v-click-outside="closeMenu"
              class="dropdown-menu"
            >
              <div class="dropdown-title">📌 Нажмите на любой пункт или кликните вне меню</div>
              <div
                class="dropdown-item"
                @click="selectItem('Профиль')"
              >👤 Профиль</div>
              <div
                class="dropdown-item"
                @click="selectItem('Настройки')"
              >⚙️ Настройки</div>
              <div
                class="dropdown-item"
                @click="selectItem('Выход')"
              >🚪 Выход</div>
            </div>

            <div
              v-if="selectedItem"
              class="selected-info"
            >
              ✅ Выбрано: <strong>{{ selectedItem }}</strong>
            </div>
            <div
              v-if="menuClosed"
              class="info-message success"
            >🔒 Меню закрыто кликом вне его!</div>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>🪟 Модальное окно</h2>
      <CodeViewer :code="modalCode">
        <template #preview>
          <BlButton
            @click="isModalOpen = true"
            variant="secondary"
          >Открыть модальное окно</BlButton>

          <div
            v-if="isModalOpen"
            class="modal-overlay"
          >
            <div
              v-click-outside="closeModal"
              class="modal-content"
            >
              <h3>📦 Модальное окно</h3>
              <p>Кликните <strong>ВНЕ</strong> этого окна, чтобы закрыть его</p>
              <p class="hint">✨ Директива v-click-outside отслеживает клики снаружи</p>
              <div class="modal-buttons">
                <BlButton
                  @click="isModalOpen = false"
                  variant="secondary"
                >Закрыть</BlButton>
              </div>
            </div>
          </div>
          <div
            v-if="modalClosed"
            class="info-message success"
          >🔒 Модальное окно закрыто!</div>
        </template>
      </CodeViewer>
    </div>

    <div class="demo-section">
      <h2>🚫 С исключениями (не закрывать при клике на кнопку)</h2>
      <CodeViewer :code="excludeCode">
        <template #preview>
          <div class="exclude-demo">
            <BlButton
              @click="isPanelOpen = !isPanelOpen"
              variant="primary"
            >
              {{ isPanelOpen ? 'Закрыть панель' : 'Открыть панель' }}
            </BlButton>

            <div
              v-if="isPanelOpen"
              v-click-outside="{ handler: closePanel, exclude: ['.exclude-button'] }"
              class="exclude-panel"
            >
              <p>🔵 Эта панель закроется при клике вне её</p>
              <p>❌ Но кнопка <strong>"Не закрывать панель"</strong> исключена</p>
              <BlButton
                class="exclude-button"
                variant="secondary"
                size="small"
              >
                🛡️ Не закрывать панель
              </BlButton>
            </div>

            <div
              v-if="panelClosed"
              class="info-message warning"
            >⚠️ Панель закрыта! (кнопка исключения не сработала)</div>
          </div>
        </template>
      </CodeViewer>
    </div>

    <div class="api-section">
      <h3>📖 Параметры</h3>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Параметр</th>
              <th>Тип</th>
              <th>Описание</th>
              <th>Пример</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>handler</td>
              <td>Function</td>
              <td>Функция, вызываемая при клике вне элемента</td>
              <td><code>v-click-outside="closeMenu"</code></td>
            </tr>
            <tr>
              <td>exclude</td>
              <td>string[]</td>
              <td>CSS селекторы элементов, клик по которым НЕ закрывает</td>
              <td><code>v-click-outside="{ handler: close, exclude: ['.btn'] }"</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="tip-box">
        <strong>💡 Совет:</strong> Используйте <code>v-click-outside</code> для:
        <ul>
          <li>Закрытия выпадающих меню</li>
          <li>Закрытия модальных окон</li>
          <li>Скрытия тултипов</li>
          <li>Отмены выделения элементов</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { ref } from 'vue'
import CodeViewer from '../../components/CodeViewer.vue'

const isOpen = ref(false)
const selectedItem = ref('')
const menuClosed = ref(false)

const isModalOpen = ref(false)
const modalClosed = ref(false)

const isPanelOpen = ref(false)
const panelClosed = ref(false)

const closeMenu = () => {
  if (isOpen.value) {
    isOpen.value = false
    menuClosed.value = true
    setTimeout(() => { menuClosed.value = false }, 2000)
  }
}

const selectItem = (item: string) => {
  selectedItem.value = item
  isOpen.value = false
}

const closeModal = () => {
  if (isModalOpen.value) {
    isModalOpen.value = false
    modalClosed.value = true
    setTimeout(() => { modalClosed.value = false }, 2000)
  }
}

const closePanel = () => {
  if (isPanelOpen.value) {
    isPanelOpen.value = false
    panelClosed.value = true
    setTimeout(() => { panelClosed.value = false }, 2000)
  }
}

const dropdownCode = `<div class="dropdown-demo">
  <BlButton @click="isOpen = !isOpen" variant="primary">
    {{ isOpen ? 'Закрыть меню' : 'Открыть меню' }}
  </BlButton>
  
  <div v-if="isOpen" v-click-outside="closeMenu" class="dropdown-menu">
    <div class="dropdown-item" @click="selectItem('Профиль')">Профиль</div>
    <div class="dropdown-item" @click="selectItem('Настройки')">Настройки</div>
    <div class="dropdown-item" @click="selectItem('Выход')">Выход</div>
  </div>
</div>`

const modalCode = `<BlButton @click="isModalOpen = true" variant="secondary">Открыть модальное окно</BlButton>

<div v-if="isModalOpen" class="modal-overlay">
  <div v-click-outside="closeModal" class="modal-content">
    <h3>Модальное окно</h3>
    <p>Кликните ВНЕ этого окна, чтобы закрыть его</p>
    <BlButton @click="isModalOpen = false" variant="secondary">Закрыть</BlButton>
  </div>
</div>`

const excludeCode = `<BlButton @click="isPanelOpen = !isPanelOpen" variant="primary">
  {{ isPanelOpen ? 'Закрыть панель' : 'Открыть панель' }}
</BlButton>

<div v-if="isPanelOpen" v-click-outside="{ handler: closePanel, exclude: ['.exclude-button'] }" class="exclude-panel">
  <p>Эта панель закроется при клике вне её</p>
  <p>Но кнопка "Не закрывать панель" исключена</p>
  <BlButton class="exclude-button" variant="secondary">Не закрывать панель</BlButton>
</div>`
</script>

<style scoped>
.demo-page {
  max-width: 1000px;
  margin: 0 auto;
}

.description {
  color: var(--bl-text-secondary);
  margin-bottom: 32px;
  line-height: 1.6;
}

.demo-section {
  margin-bottom: 48px;
}

.demo-section h2 {
  margin-bottom: 20px;
  font-size: 20px;
}

.explanation {
  background: var(--bl-bg-secondary);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
}

.explanation-box {
  display: inline-block;
}

.explanation-inner {
  display: flex;
  gap: 0;
  margin-bottom: 16px;
  border-radius: 12px;
  overflow: hidden;
}

.inside {
  background: var(--bl-color-primary);
  color: white;
  padding: 40px 60px;
  font-weight: bold;
}

.outside {
  background: var(--bl-color-success);
  color: white;
  padding: 40px 60px;
  font-weight: bold;
}

.inside-text {
  color: var(--bl-color-primary);
}

.outside-text {
  color: var(--bl-color-success);
}

.dropdown-demo {
  position: relative;
  min-height: 250px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  background: var(--bl-bg-primary);
  border: 1px solid var(--bl-border-color);
  border-radius: 8px;
  box-shadow: var(--bl-shadow-lg);
  min-width: 220px;
  z-index: 100;
}

.dropdown-title {
  padding: 10px 16px;
  background: var(--bl-bg-secondary);
  border-bottom: 1px solid var(--bl-border-color);
  font-size: 12px;
  color: var(--bl-text-secondary);
}

.dropdown-item {
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.2s;
}

.dropdown-item:hover {
  background: var(--bl-bg-secondary);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: var(--bl-bg-primary);
  padding: 24px;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
}

.modal-content h3 {
  margin-top: 0;
}

.modal-buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.exclude-demo {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.exclude-panel {
  padding: 20px;
  background: var(--bl-bg-secondary);
  border-radius: 12px;
  border-left: 4px solid var(--bl-color-primary);
}

.exclude-panel p {
  margin: 8px 0;
}

.selected-info,
.info-message {
  margin-top: 16px;
  padding: 10px 16px;
  border-radius: 8px;
}

.selected-info {
  background: var(--bl-bg-secondary);
}

.info-message.success {
  background: var(--bl-color-success);
  color: white;
}

.info-message.warning {
  background: var(--bl-color-warning);
  color: white;
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

.table-wrapper {
  overflow-x: auto;
}

.api-section table {
  width: 100%;
  border-collapse: collapse;
}

.api-section th,
.api-section td {
  padding: 10px 12px;
  text-align: left;
  border-bottom: 1px solid var(--bl-border-color);
}

.api-section th {
  font-weight: 600;
  background: var(--bl-bg-tertiary);
}

.api-section code {
  background: var(--bl-bg-tertiary);
  padding: 2px 6px;
  border-radius: 4px;
}

.tip-box {
  margin-top: 20px;
  padding: 16px;
  background: var(--bl-bg-primary);
  border-radius: 8px;
  border-left: 4px solid var(--bl-color-primary);
}

.tip-box ul {
  margin: 8px 0 0 20px;
}
</style>