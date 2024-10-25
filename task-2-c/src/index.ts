// Классическая рекурсивная реализация получения числа Фибоначчи
function fibonacciRecursive(n: number): number {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Оптимизированная реализация получения числа Фибоначчи
function fibonacciMemoized(n: number): number {
  const memo = new Map<number, number>();
  const fib = (num: number): number => {
    if (memo.has(num)) return memo.get(num)!;
    if (num <= 1) return num;
    const result = fib(num - 1) + fib(num - 2);
    memo.set(num, result);
    return result;
  };
  return fib(n);
}

// Замер времени выполнения
function measureTime(fibFunc: (n: number) => number, n: number): number {
  const start = performance.now();
  fibFunc(n);
  const end = performance.now();
  return end - start;
}

// Анализ и вывод результатов
const performAnalysis = () => {
  const inputElement = document.getElementById("inputN") as HTMLInputElement;
  const n = parseInt(inputElement.value);
  if (isNaN(n) || n < 0) {
      displayOutput("Введите корректное целое число больше 0.");
      return;
  }
  const recursiveTime = measureTime(fibonacciRecursive, n).toFixed(5);
  const memoizedTime = measureTime(fibonacciMemoized, n).toFixed(5);
  const outputMessage = `
      Результаты для n = ${n}:<br>
      Рекурсивный метод: ${recursiveTime} мс<br>
      Мемоизированный метод: ${memoizedTime} мс
  `;
  displayOutput(outputMessage);
};

// Вывод результата в тег <p>
function displayOutput(message: string) {
  const outputElement = document.getElementById("result") as HTMLParagraphElement;
  outputElement.innerHTML = message;
}

const buttonElement = document.getElementById("button");
buttonElement?.addEventListener("click", performAnalysis);