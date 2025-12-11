// Тестовий файл для перевірки pre-commit hook
// Навмисно погано відформатований код
const test = (): number => {
  const x = 1;
  const y = 2;
  return x + y;
};

// Використання функції, щоб уникнути помилки unused
console.log(test());
