import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
   plugins: [
     vue(), 
  ],
  test: {
    alias: {
      '@': resolve(__dirname, './src'), 
    },
    coverage: {
      all: true,
      include: [
        'components',
        'labels',
        'layouts',
        'pages',
        'plugins',
        'stores',
        'utils',
        'app.vue',
      ],
      exclude: [
        '**/types.ts',
      ],
      reporter: [
        'lcov',
        'text',
      ],
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: [
      './__TEST__/setup',
    ],
    testTimeout: 10000,
    onConsoleLog(log) {
      const values = [
        'browser',
        'Suspense',
        'warn',
      ];

      if (values.some((value) => log.includes(value))) return false;
    },
  },
});
