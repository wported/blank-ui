<template>
  <div :class="['bl-table', `bl-table--${variant}`]">
    <div
      v-if="title || $slots.header"
      class="bl-table__header"
    >
      <h3 v-if="title">{{ title }}</h3>
      <slot name="header" />
    </div>

    <div class="bl-table__wrapper">
      <table class="bl-table__table">
        <thead>
          <tr>
            <th
              v-if="selectable"
              class="bl-table__checkbox"
            >
              <BlCheckbox
                :model-value="allSelected"
                @update:model-value="toggleAll"
              />
            </th>
            <th
              v-for="column in columns"
              :key="column.key"
              :style="{ width: column.width }"
            >
              {{ column.title }}
            </th>
            <th v-if="$slots.actions">Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, index) in displayData"
            :key="index"
            :class="{ 'bl-table__row--selected': selectedRows.includes(row) }"
          >
            <td
              v-if="selectable"
              class="bl-table__checkbox"
            >
              <BlCheckbox
                :model-value="selectedRows.includes(row)"
                @update:model-value="toggleRow(row)"
              />
            </td>
            <td
              v-for="column in columns"
              :key="column.key"
            >
              <slot
                :name="`column-${column.key}`"
                :row="row"
                :value="row[column.key]"
              >
                {{ row[column.key] }}
              </slot>
            </td>
            <td v-if="$slots.actions">
              <slot
                name="actions"
                :row="row"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      v-if="hasPagination"
      class="bl-table__footer"
    >
      <slot name="footer">
        <div class="bl-table__pagination">
          <button
            class="bl-table__page-btn"
            :disabled="currentPage === 1"
            @click="goToPage(currentPage - 1)"
          >
            ←
          </button>
          <div class="bl-table__pages">
            <button
              v-for="page in visiblePages"
              :key="page"
              class="bl-table__page-btn"
              :class="{ 'bl-table__page-btn--active': page === currentPage }"
              :disabled="page === '...'"
              @click="page !== '...' && goToPage(page as number)"
            >
              {{ page }}
            </button>
          </div>
          <button
            class="bl-table__page-btn"
            :disabled="currentPage === totalPages"
            @click="goToPage(currentPage + 1)"
          >
            →
          </button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { ref, computed, watch } from 'vue'
import BlCheckbox from '../../forms/BlCheckbox/BlCheckbox.vue'

export interface TableColumn {
  key: string
  title: string
  width?: string
}

export interface BlTableProps {
  columns: TableColumn[]
  data: Record<string, any>[]
  title?: string
  variant?: 'default' | 'bordered' | 'striped' | 'compact'
  selectable?: boolean
  pagination?: boolean
  pageSize?: number
}

const props = withDefaults(defineProps<BlTableProps>(), {
  variant: 'default',
  selectable: false,
  pagination: false,
  pageSize: 10
})

const emit = defineEmits<{
  'select': [rows: Record<string, any>[]]
  'page-change': [page: number]
}>()

const selectedRows = ref<Record<string, any>[]>([])
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(props.data.length / props.pageSize))
const hasPagination = computed(() => props.pagination && totalPages.value > 1)

const displayData = computed(() => {
  if (!props.pagination) return props.data
  const start = (currentPage.value - 1) * props.pageSize
  const end = start + props.pageSize
  return props.data.slice(start, end)
})

const visiblePages = computed(() => {
  const pages: (number | string)[] = []
  const maxVisible = 5
  const half = Math.floor(maxVisible / 2)

  let start = Math.max(1, currentPage.value - half)
  let end = Math.min(totalPages.value, start + maxVisible - 1)

  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1)
  }

  if (start > 1) {
    pages.push(1)
    if (start > 2) pages.push('...')
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  if (end < totalPages.value) {
    if (end < totalPages.value - 1) pages.push('...')
    pages.push(totalPages.value)
  }

  return pages
})

const allSelected = computed({
  get: () => displayData.value.length > 0 && selectedRows.value.length === displayData.value.length,
  set: (value) => {
    if (value) {
      selectedRows.value = [...displayData.value]
    } else {
      selectedRows.value = []
    }
    emit('select', selectedRows.value)
  }
})

const toggleRow = (row: Record<string, any>) => {
  const index = selectedRows.value.findIndex(r => r === row)
  if (index === -1) {
    selectedRows.value.push(row)
  } else {
    selectedRows.value.splice(index, 1)
  }
  emit('select', selectedRows.value)
}

const toggleAll = () => {
  allSelected.value = !allSelected.value
}

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    emit('page-change', page)
    // Сбрасываем выделение при смене страницы
    if (props.selectable) {
      selectedRows.value = []
      emit('select', [])
    }
  }
}

// Сбрасываем страницу при изменении данных
watch(() => props.data, () => {
  currentPage.value = 1
}, { deep: true })
</script>

<style scoped>
.bl-table {
  width: 100%;
  background-color: var(--bl-bg-primary);
  border-radius: var(--bl-border-radius-lg);
  overflow: hidden;
}

.bl-table__header {
  padding: var(--bl-spacing-md);
  border-bottom: 1px solid var(--bl-border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bl-table__wrapper {
  overflow-x: auto;
}

.bl-table__table {
  width: 100%;
  border-collapse: collapse;
}

.bl-table th,
.bl-table td {
  padding: var(--bl-spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--bl-border-color);
  color: var(--bl-text-primary);
}

.bl-table th {
  background-color: var(--bl-bg-secondary);
  font-weight: 600;
}

.bl-table--striped tbody tr:nth-child(even) {
  background-color: var(--bl-bg-secondary);
}

.bl-table--bordered th,
.bl-table--bordered td {
  border: 1px solid var(--bl-border-color);
}

.bl-table--compact th,
.bl-table--compact td {
  padding: var(--bl-spacing-sm);
}

.bl-table__row--selected {
  background-color: rgba(59, 130, 246, 0.1);
}

.bl-table__checkbox {
  width: 40px;
  text-align: center;
}

.bl-table__footer {
  padding: var(--bl-spacing-md);
  border-top: 1px solid var(--bl-border-color);
}

.bl-table__pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--bl-spacing-sm);
}

.bl-table__pages {
  display: flex;
  gap: var(--bl-spacing-xs);
}

.bl-table__page-btn {
  min-width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--bl-spacing-sm);
  border: 1px solid var(--bl-border-color);
  border-radius: var(--bl-border-radius-sm);
  background-color: var(--bl-bg-primary);
  color: var(--bl-text-primary);
  cursor: pointer;
  transition: all var(--bl-transition-fast);
}

.bl-table__page-btn:hover:not(:disabled) {
  border-color: var(--bl-color-primary);
  color: var(--bl-color-primary);
}

.bl-table__page-btn--active {
  background-color: var(--bl-color-primary);
  border-color: var(--bl-color-primary);
  color: white;
}

.bl-table__page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>