/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/09-tests/setup.ts'],
    include: ['src/09-tests/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/09-tests/setup.ts',
      ],
      all: true,
      thresholds: {
        branches: .5,
        functions: .5,
        lines: .5,
        statements: .5,
      },
    },
  },
}); 