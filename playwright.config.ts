import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './test-cases',
  fullyParallel: true,
  reporter: 'html',

  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on',
    screenshot: 'on',
    video: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});