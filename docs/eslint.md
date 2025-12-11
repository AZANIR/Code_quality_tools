# ESLint - Лінтер для JavaScript та TypeScript

## Що таке ESLint?

**ESLint** — це лінтер для JavaScript, який використовується для виявлення помилок, неявних проблем та створення зручного середовища для розробки. ESLint аналізує ваш код статично (без виконання) та знаходить потенційні помилки, проблеми зі стилем коду та порушення найкращих практик.

### Основні переваги:

- ✅ **Виявлення помилок** - знаходить помилки до запуску коду
- ✅ **Найкращі практики** - дотримання стандартів кодування
- ✅ **Консистентність** - єдиний стиль коду в команді
- ✅ **Автоматичне виправлення** - багато проблем можна виправити автоматично
- ✅ **Плагіни** - підтримка TypeScript, React, Playwright та інших технологій
- ✅ **Налаштування** - гнучка конфігурація під потреби проєкту

## Встановлення

### 1. Встановлення базового ESLint

```bash
npm install --save-dev eslint
```

### 2. Встановлення для TypeScript

```bash
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### 3. Встановлення плагіна для Playwright

```bash
npm install --save-dev eslint-plugin-playwright
```

## Конфігурація

### Створення файлу `.eslintrc.json`

Створіть файл `.eslintrc.json` в корені проєкту:

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint", "playwright"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:playwright/recommended"
  ],
  "env": {
    "node": true,
    "es2020": true
  },
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "no-console": "warn",
    "prefer-const": "error"
  }
}
```

### Пояснення конфігурації:

- **`root: true`** - зупиняє пошук конфігурацій у батьківських папках
- **`parser`** - парсер для TypeScript
- **`parserOptions`** - налаштування парсера (версія ECMAScript, тип модулів)
- **`plugins`** - використовувані плагіни
- **`extends`** - набір правил, які розширюються
- **`env`** - середовище виконання (Node.js, браузер тощо)
- **`rules`** - конкретні правила та їх рівні

### Рівні правил:

- **`"off"` або `0`** - правило вимкнене
- **`"warn"` або `1`** - правило видає попередження
- **`"error"` або `2`** - правило видає помилку

### Створення файлу `.eslintignore`

Створіть файл `.eslintignore` для виключення файлів з перевірки:

```
node_modules/
dist/
build/
*.min.js
```

## Використання

### Команди в package.json

Додайте скрипти до `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.js",
    "lint:fix": "eslint . --ext .ts,.js --fix"
  }
}
```

### Перевірка коду

```bash
npm run lint
```

### Автоматичне виправлення

```bash
npm run lint:fix
```

### Перевірка конкретного файлу

```bash
npx eslint src/index.ts
```

### Перевірка з автоматичним виправленням

```bash
npx eslint src/index.ts --fix
```

## Основні правила

### Правила TypeScript

- **`@typescript-eslint/explicit-function-return-type`** - вимагає явного вказання типу повернення
- **`@typescript-eslint/no-unused-vars`** - забороняє невикористані змінні
- **`@typescript-eslint/no-explicit-any`** - попереджає про використання `any`
- **`@typescript-eslint/no-non-null-assertion`** - попереджає про використання `!`

### Загальні правила

- **`no-console`** - попереджає про використання `console.log`
- **`prefer-const`** - вимагає використання `const` замість `let`, якщо змінна не переприсвоюється
- **`no-var`** - забороняє використання `var`
- **`eqeqeq`** - вимагає використання `===` замість `==`

### Правила Playwright

- **`playwright/expect-expect`** - перевіряє наявність `expect` у тестах
- **`playwright/no-page-pause`** - забороняє `page.pause()` у продакшн коді
- **`playwright/no-skipped-test`** - попереджає про пропущені тести

## Приклади помилок та виправлень

### Приклад 1: Невикористана змінна

**Код з помилкою:**

```typescript
function calculateSum(a: number, b: number): number {
  const unused = 10; // ESLint видасть помилку
  return a + b;
}
```

**Виправлення:**

```typescript
function calculateSum(a: number, b: number): number {
  return a + b;
}
```

### Приклад 2: Використання `any`

**Код з попередженням:**

```typescript
function processData(data: any) {
  // ESLint видасть попередження
  return data.value;
}
```

**Виправлення:**

```typescript
interface Data {
  value: string;
}

function processData(data: Data): string {
  return data.value;
}
```

### Приклад 3: Відсутність типу повернення

**Код з попередженням:**

```typescript
function getUser(id: number) {
  // ESLint попереджає про відсутність типу
  return { id, name: 'John' };
}
```

**Виправлення:**

```typescript
interface User {
  id: number;
  name: string;
}

function getUser(id: number): User {
  return { id, name: 'John' };
}
```

### Приклад 4: Використання `var` замість `const`/`let`

**Код з помилкою:**

```typescript
var count = 0; // ESLint видасть помилку
```

**Виправлення:**

```typescript
const count = 0; // або let, якщо змінна змінюється
```

## Інтеграція з IDE

### Visual Studio Code

1. Встановіть розширення "ESLint"
2. Додайте до налаштувань (`.vscode/settings.json`):

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "typescript"]
}
```

### WebStorm / IntelliJ IDEA

1. Перейдіть до `File` → `Settings` → `Languages & Frameworks` → `JavaScript` → `Code Quality Tools` → `ESLint`
2. Увімкніть ESLint та вкажіть шлях до конфігурації
3. Увімкніть "Run eslint --fix on save"

## Інтеграція з Git Hooks

ESLint можна інтегрувати з Git hooks через Husky та lint-staged для автоматичної перевірки перед комітом. Детальніше дивіться в [документації Husky](husky.md).

## Налаштування правил для тестів

Можна налаштувати окремі правила для тестових файлів:

```json
{
  "overrides": [
    {
      "files": ["*.spec.ts", "*.test.ts"],
      "rules": {
        "@typescript-eslint/no-explicit-any": "off",
        "no-console": "off"
      }
    }
  ]
}
```

## Додаткові ресурси

- [Офіційна документація ESLint](https://eslint.org/)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [Playwright ESLint Plugin](https://github.com/playwright-community/eslint-plugin-playwright)
- [Список правил ESLint](https://eslint.org/docs/latest/rules/)

## Поради

1. **Починайте з рекомендованих правил** - використовуйте `eslint:recommended`
2. **Поступово додавайте правила** - не включайте всі правила одразу
3. **Використовуйте автоматичне виправлення** - багато проблем виправляється автоматично
4. **Налаштуйте IDE** - автоматична перевірка при збереженні
5. **Інтегруйте з CI/CD** - перевіряйте код перед мерджем
6. **Домовтеся в команді** - використовуйте однакову конфігурацію
