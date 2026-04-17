<template>
  <div class="demo-page">
    <h1>BlTable</h1>
    <p class="demo-description">Таблица с поддержкой сортировки, выбора строк и пагинации.</p>

    <CodeViewer :code="basicTableCode">
      <template #preview>
        <BlTable
          :columns="basicColumns"
          :data="basicData"
          variant="default"
        />
      </template>
    </CodeViewer>

    <CodeViewer :code="stripedTableCode">
      <template #preview>
        <BlTable
          :columns="basicColumns"
          :data="basicData"
          variant="striped"
        />
      </template>
    </CodeViewer>

    <CodeViewer :code="borderedTableCode">
      <template #preview>
        <BlTable
          :columns="basicColumns"
          :data="basicData"
          variant="bordered"
        />
      </template>
    </CodeViewer>

    <CodeViewer :code="compactTableCode">
      <template #preview>
        <BlTable
          :columns="basicColumns"
          :data="basicData"
          variant="compact"
        />
      </template>
    </CodeViewer>

    <CodeViewer :code="selectableTableCode">
      <template #preview>
        <BlTable
          :columns="basicColumns"
          :data="basicData"
          selectable
          @select="handleSelect"
        />
        <div
          v-if="selectedRows.length"
          class="demo-message"
        >
          Выбрано строк: {{ selectedRows.length }}
        </div>
      </template>
    </CodeViewer>

    <CodeViewer :code="paginationTableCode">
      <template #preview>
        <BlTable
          :columns="basicColumns"
          :data="largeData"
          pagination
          :page-size="5"
          @page-change="handlePageChange"
        />
        <div class="demo-message">Текущая страница: {{ currentPage }}</div>
      </template>
    </CodeViewer>

    <CodeViewer :code="customTableCode">
      <template #preview>
        <BlTable
          :columns="customColumns"
          :data="usersData"
          variant="striped"
        >
          <template #column-status="{ row }">
            <BlBadge :variant="row.status === 'active' ? 'success' : 'danger'">
              {{ row.status }}
            </BlBadge>
          </template>

          <template #column-age="{ row }">
            <strong>{{ row.age }} лет</strong>
          </template>

          <template #actions="{ row }">
            <BlButton
              size="small"
              @click="editUser(row)"
            >Ред.</BlButton>
            <BlButton
              size="small"
              variant="danger"
              @click="deleteUser(row)"
            >Уд.</BlButton>
          </template>
        </BlTable>
      </template>
    </CodeViewer>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { ref } from 'vue'
import type { TableColumn } from '@blank-ui'
import CodeViewer from '../../../components/CodeViewer.vue'

const basicColumns: TableColumn[] = [
  { key: 'id', title: 'ID', width: '80px' },
  { key: 'name', title: 'Имя' },
  { key: 'email', title: 'Email' },
  { key: 'role', title: 'Роль' }
]

const basicData = [
  { id: 1, name: 'Иван Иванов', email: 'ivan@example.com', role: 'Администратор' },
  { id: 2, name: 'Петр Петров', email: 'petr@example.com', role: 'Пользователь' },
  { id: 3, name: 'Мария Сидорова', email: 'maria@example.com', role: 'Модератор' }
]

const largeData = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `Пользователь ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 3 === 0 ? 'Администратор' : i % 2 === 0 ? 'Модератор' : 'Пользователь'
}))

const customColumns: TableColumn[] = [
  { key: 'id', title: 'ID', width: '80px' },
  { key: 'name', title: 'Имя' },
  { key: 'age', title: 'Возраст', width: '100px' },
  { key: 'status', title: 'Статус', width: '120px' },
  { key: 'email', title: 'Email' }
]

const usersData = [
  { id: 1, name: 'Иван Иванов', age: 25, status: 'active', email: 'ivan@example.com' },
  { id: 2, name: 'Петр Петров', age: 30, status: 'inactive', email: 'petr@example.com' },
  { id: 3, name: 'Мария Сидорова', age: 28, status: 'active', email: 'maria@example.com' }
]

const selectedRows = ref<any[]>([])
const currentPage = ref(1)

const handleSelect = (rows: any[]) => {
  selectedRows.value = rows
}

const handlePageChange = (page: number) => {
  currentPage.value = page
  console.log('Page changed to:', page)
}

const editUser = (user: any) => {
  console.log('Edit user:', user)
}

const deleteUser = (user: any) => {
  console.log('Delete user:', user)
}

// Коды для отображения
const basicTableCode = `<BlTable
  :columns="[
    { key: 'id', title: 'ID', width: '80px' },
    { key: 'name', title: 'Имя' },
    { key: 'email', title: 'Email' },
    { key: 'role', title: 'Роль' }
  ]"
  :data="[
    { id: 1, name: 'Иван Иванов', email: 'ivan@example.com', role: 'Администратор' },
    { id: 2, name: 'Петр Петров', email: 'petr@example.com', role: 'Пользователь' },
    { id: 3, name: 'Мария Сидорова', email: 'maria@example.com', role: 'Модератор' }
  ]"
  variant="default"
/>`

const stripedTableCode = `<BlTable
  :columns="basicColumns"
  :data="basicData"
  variant="striped"
/>`

const borderedTableCode = `<BlTable
  :columns="basicColumns"
  :data="basicData"
  variant="bordered"
/>`

const compactTableCode = `<BlTable
  :columns="basicColumns"
  :data="basicData"
  variant="compact"
/>`

const selectableTableCode = `<BlTable
  :columns="basicColumns"
  :data="basicData"
  selectable
  @select="handleSelect"
/>`

const paginationTableCode = `<BlTable
  :columns="basicColumns"
  :data="largeData"
  pagination
  :page-size="5"
  @page-change="handlePageChange"
/>`

const customTableCode = `<BlTable
  :columns="customColumns"
  :data="usersData"
  variant="striped"
>
  <template #column-status="{ row }">
    <BlBadge :variant="row.status === 'active' ? 'success' : 'danger'">
      {{ row.status }}
    </BlBadge>
  </template>
  
  <template #column-age="{ row }">
    <strong>{{ row.age }} лет</strong>
  </template>
  
  <template #actions="{ row }">
    <BlButton size="small" @click="editUser(row)">Ред.</BlButton>
    <BlButton size="small" variant="danger" @click="deleteUser(row)">Уд.</BlButton>
  </template>
</BlTable>`
</script>

<style scoped>
.demo-page {
  max-width: 1400px;
  margin: 0 auto;
}

.demo-description {
  color: var(--bl-text-secondary);
  margin-bottom: var(--bl-spacing-xl);
}

.demo-message {
  margin-top: var(--bl-spacing-md);
  padding: var(--bl-spacing-sm) var(--bl-spacing-md);
  background-color: var(--bl-color-primary);
  color: white;
  border-radius: var(--bl-border-radius-md);
  text-align: center;
}
</style>