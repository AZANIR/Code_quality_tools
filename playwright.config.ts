import { defineConfig, devices } from '@playwright/test';

/**
 * Читайте документацію https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './src/tests',
  /* Максимальний час виконання одного тесту */
  timeout: 30 * 1000,
  expect: {
    /* Максимальний час очікування для expect */
    timeout: 5000,
  },
  /* Запускати тести в паралельних файлах */
  fullyParallel: true,
  /* Не збирати тести, якщо один з них не пройшов */
  forbidOnly: !!process.env.CI,
  /* Повторювати тести тільки в CI */
  retries: process.env.CI ? 2 : 0,
  /* Максимальна кількість одночасних воркерів */
  workers: process.env.CI ? 1 : undefined,
  /* Репортер для виводу результатів */
  reporter: 'html',
  /* Спільні налаштування для всіх проєктів */
  use: {
    /* Базовий URL для використання в навігації */
    baseURL: 'https://example.com',
    /* Збирати трейс при повторі невдалого тесту */
    trace: 'on-first-retry',
    /* Скріншоти при помилках */
    screenshot: 'only-on-failure',
  },

  /* Налаштування проєктів для різних браузерів */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
