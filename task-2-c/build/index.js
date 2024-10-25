"use strict";
function fibonacciRecursive(n) {
    if (n <= 1)
        return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
function fibonacciMemoized(n) {
    const memo = new Map();
    const fib = (num) => {
        if (memo.has(num))
            return memo.get(num);
        if (num <= 1)
            return num;
        const result = fib(num - 1) + fib(num - 2);
        memo.set(num, result);
        return result;
    };
    return fib(n);
}
function measureTime(fibFunc, n) {
    const start = performance.now();
    fibFunc(n);
    const end = performance.now();
    return end - start;
}
const performAnalysis = () => {
    const inputElement = document.getElementById("inputN");
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
function displayOutput(message) {
    const outputElement = document.getElementById("result");
    outputElement.innerHTML = message;
}
const buttonElement = document.getElementById("button");
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener("click", performAnalysis);
//# sourceMappingURL=index.js.map