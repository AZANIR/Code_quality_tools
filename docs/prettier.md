# Prettier - Автоматичне форматування коду

## Що таке Prettier?

**Prettier** — це інструмент для автоматичного форматування коду, який спрощує роботу з різними стилями написання коду, встановлюючи єдиний стандарт форматування. Prettier аналізує ваш код та переформатовує його відповідно до встановлених правил, усуваючи всі спори про стиль коду.

### Основні переваги:

- ✅ **Автоматичне форматування** - не потрібно вручну форматувати код
- ✅ **Єдиний стиль** - весь код у проєкті має однаковий стиль
- ✅ **Економія часу** - не потрібно обговорювати стиль коду в code review
- ✅ **Підтримка багатьох мов** - JavaScript, TypeScript, JSON, CSS, HTML, Markdown та інші
- ✅ **Інтеграція з IDE** - автоматичне форматування при збереженні

## Встановлення

### 1. Встановлення через npm

```bash
npm install --save-dev prettier
```

### 2. Глобальне встановлення (опціонально)

```bash
npm install -g prettier
```

## Конфігурація

### Створення файлу `.prettierrc`

Створіть файл `.prettierrc` в корені проєкту з налаштуваннями:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

### Пояснення опцій:

- **`semi`** - додавати крапку з комою в кінці рядків (`true`/`false`)
- **`trailingComma`** - додавати кому після останнього елемента (`"es5"`, `"all"`, `"none"`)
- **`singleQuote`** - використовувати одинарні лапки замість подвійних (`true`/`false`)
- **`printWidth`** - максимальна довжина рядка перед переносом (за замовчуванням 80)
- **`tabWidth`** - кількість пробілів для відступу (за замовчуванням 2)
- **`useTabs`** - використовувати табуляцію замість пробілів (`true`/`false`)
- **`arrowParens`** - дужки навколо параметрів стрілкових функцій (`"always"`/`"avoid"`)
- **`endOfLine`** - стиль кінця рядка (`"lf"`, `"crlf"`, `"cr"`, `"auto"`)

### Створення файлу `.prettierignore`

Створіть файл `.prettierignore` для виключення файлів та папок з форматування:

```
# Залежності
node_modules/
package-lock.json

# Збірка
dist/
build/

# Логи
*.log
```

## Використання

### Команди в package.json

Додайте скрипти до `package.json`:

```json
{
  "scripts": {
    "format": "prettier --write \"**/*.{ts,js,json,md}\"",
    "format:check": "prettier --check \"**/*.{ts,js,json,md}\""
  }
}
```

### Форматування всіх файлів

```bash
npm run format
```

### Перевірка форматування (без змін)

```bash
npm run format:check
```

### Форматування конкретного файлу

```bash
npx prettier --write src/index.ts
```

### Форматування конкретної папки

```bash
npx prettier --write "src/**/*.ts"
```

## Приклади форматування

### До форматування:

```javascript
const user = { name: 'John', age: 30, email: 'john@example.com' };
function greet(user) {
  return `Hello, ${user.name}!`;
}
```

### Після форматування:

```javascript
const user = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
};

function greet(user) {
  return `Hello, ${user.name}!`;
}
```

### Приклад з TypeScript:

**До:**

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}
const users: User[] = [{ id: 1, name: 'John', email: 'john@example.com' }];
```

**Після:**

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [{ id: 1, name: 'John', email: 'john@example.com' }];
```

## Інтеграція з IDE

### Visual Studio Code

1. Встановіть розширення "Prettier - Code formatter"
2. Додайте до налаштувань (`.vscode/settings.json`):

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true
}
```

### WebStorm / IntelliJ IDEA

1. Перейдіть до `File` → `Settings` → `Languages & Frameworks` → `JavaScript` → `Prettier`
2. Вкажіть шлях до Prettier: `node_modules/prettier`
3. Увімкніть "On code reformat" та "On save"

### Sublime Text

1. Встановіть пакет "JsPrettier" через Package Control
2. Налаштуйте форматування при збереженні

## Інтеграція з Git Hooks

Prettier можна інтегрувати з Git hooks через Husky та lint-staged для автоматичного форматування перед комітом. Детальніше дивіться в [документації Husky](husky.md).

## Додаткові ресурси

- [Офіційна документація Prettier](https://prettier.io/)
- [Опції конфігурації](https://prettier.io/docs/en/options.html)
- [Підтримувані мови](https://prettier.io/docs/en/languages.html)

## Поради

1. **Форматуйте код перед комітом** - додайте Prettier до pre-commit hook
2. **Використовуйте `.prettierignore`** - не форматуйте згенеровані файли
3. **Налаштуйте IDE** - автоматичне форматування при збереженні економить час
4. **Домовтеся в команді** - використовуйте однакову конфігурацію для всіх
5. **Не редагуйте відформатований код вручну** - дозвольте Prettier це робити
