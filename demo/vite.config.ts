import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  
  // Настройки сервера
  server: {
    port: 5174, // Используем другой порт, чтобы не конфликтовать с основной библиотекой
    open: true, // Автоматически открывать браузер
    host: true, // Доступ с локальной сети
  },
  
  // Настройки сборки
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router'],
        },
      },
    },
  },
  
  // Настройки разрешения путей
  resolve: {
    alias: {
      // Алиас для импорта из основной библиотеки
      '@blank-ui': resolve(__dirname, '../src/index.ts'),
      '@blank-ui/styles': resolve(__dirname, '../src/styles'),
      // Алиас для демо-компонентов
      '@demo': resolve(__dirname, './src'),
    },
  },
  
  // CSS настройки
  css: {
    preprocessorOptions: {
      // Если используете SCSS, можно добавить глобальные переменные
      // scss: {
      //   additionalData: `@import "@/styles/variables.scss";`
      // }
    },
    devSourcemap: true,
  },
  
  // Оптимизация зависимостей
  optimizeDeps: {
    include: ['vue', 'vue-router'],
    exclude: ['@blank-ui'], // Исключаем нашу библиотеку из предварительной сборки
  },
  
  // Прокси для API (если нужно)
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // }
})