import { test, expect } from '@playwright/test';

/**
 * Приклади API тестування з Playwright
 * Демонструє роботу з HTTP запитами та перевірку відповідей
 */
test.describe('API тестування', () => {
  test('має отримати успішну відповідь від API', async ({ request }) => {
    // Виконання GET запиту
    const response = await request.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    );

    // Перевірка статусу відповіді
    expect(response.status()).toBe(200);

    // Перевірка заголовків
    expect(response.headers()['content-type']).toContain('application/json');

    // Отримання та перевірка даних
    const data = await response.json();
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('title');
    expect(data).toHaveProperty('body');
  });

  test('має створити новий ресурс через POST', async ({ request }) => {
    const newPost = {
      title: 'Test Post',
      body: 'This is a test post body',
      userId: 1,
    };

    // Виконання POST запиту
    const response = await request.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        data: newPost,
      }
    );

    // Перевірка статусу створення
    expect(response.status()).toBe(201);

    // Перевірка даних у відповіді
    const data = await response.json();
    expect(data.title).toBe(newPost.title);
    expect(data.body).toBe(newPost.body);
    expect(data).toHaveProperty('id');
  });

  test('має оновити ресурс через PUT', async ({ request }) => {
    const updatedPost = {
      id: 1,
      title: 'Updated Post',
      body: 'Updated body content',
      userId: 1,
    };

    // Виконання PUT запиту
    const response = await request.put(
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        data: updatedPost,
      }
    );

    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(data.title).toBe(updatedPost.title);
  });

  test('має видалити ресурс через DELETE', async ({ request }) => {
    // Виконання DELETE запиту
    const response = await request.delete(
      'https://jsonplaceholder.typicode.com/posts/1'
    );

    // Перевірка статусу видалення
    expect(response.status()).toBe(200);
  });

  test('має обробити помилку 404', async ({ request }) => {
    // Спроба отримати неіснуючий ресурс
    const response = await request.get(
      'https://jsonplaceholder.typicode.com/posts/99999'
    );

    // Перевірка статусу помилки
    expect(response.status()).toBe(404);
  });

  test('має перевірити структуру JSON відповіді', async ({ request }) => {
    const response = await request.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    const data = await response.json();

    // Перевірка типу даних
    expect(typeof data.id).toBe('number');
    expect(typeof data.title).toBe('string');
    expect(typeof data.body).toBe('string');
    expect(typeof data.userId).toBe('number');

    // Перевірка наявності всіх необхідних полів
    expect(data).toMatchObject({
      id: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String),
      userId: expect.any(Number),
    });
  });
});
