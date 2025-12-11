import { test, expect } from '@playwright/test';

/**
 * Базовий приклад тесту з Playwright
 * Демонструє основні можливості: навігацію, кліки, перевірки
 */
test.describe('Базові приклади Playwright', () => {
  test('має відкрити сторінку та перевірити заголовок', async ({ page }) => {
    // Навігація на сторінку
    await page.goto('https://example.com');

    // Перевірка заголовка сторінки
    await expect(page).toHaveTitle(/Example Domain/);

    // Перевірка наявності тексту на сторінці
    await expect(page.locator('h1')).toContainText('Example Domain');
  });

  test('має знайти та клікнути на посилання', async ({ page }) => {
    await page.goto('https://example.com');

    // Знаходження посилання (на example.com є посилання на IANA)
    // Використовуємо селектор за атрибутом href, який містить 'iana'
    const link = page.locator('a[href*="iana"]');

    // Перевірка, що посилання видиме
    await expect(link).toBeVisible();

    // Перевірка тексту посилання (може містити "More" або "information")
    const linkText = await link.textContent();
    expect(linkText).toBeTruthy();

    // Клік на посилання
    await link.click();

    // Очікування навігації на iana.org
    await page.waitForURL(/iana\.org/);
  });

  test('має перевірити наявність елементів', async ({ page }) => {
    await page.goto('https://example.com');

    // Перевірка наявності різних елементів
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('p')).toHaveCount(2);
    await expect(page.locator('a')).toBeVisible();
  });

  test('має зробити скріншот', async ({ page }) => {
    await page.goto('https://example.com');

    // Перевірка, що сторінка завантажилася
    await expect(page.locator('h1')).toBeVisible();

    // Зробити скріншот всієї сторінки
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
  });
});
