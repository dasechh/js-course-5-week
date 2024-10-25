// Инициализация набора открывающих скобок
const initializeOpenBrackets = (): Set<string> => {
  return new Set(['(', '{', '[']);
};

// Инициализация отображения скобок
const initializeBracketMap = (): Map<string, string> => {
  return new Map([
      ['(', ')'],
      ['{', '}'],
      ['[', ']']
  ]);
};

// Проверка валидности строки скобок
const isValid = (input: string, openBrackets: Set<string>, bracketMap: Map<string, string>): boolean => {
  const queue: string[] = [];
  for (const char of input) {
      if (openBrackets.has(char)) {
          queue.push(char);
      } else {
          const lastOpen = queue.pop();
          if (lastOpen === undefined || bracketMap.get(lastOpen) !== char) {
              return false;
          }
      }
  }
  return queue.length === 0;
};

// Обновление результата на странице
const updateResult = (isValidResult: boolean): void => {
  const resultElement = document.getElementById("result") as HTMLElement;
  resultElement.textContent = isValidResult ? "Входная строка валидна." : "Входная строка не валидна.";
};

// Обработка ввода
const processInput = (): void => {
  const inputElement = document.getElementById("inputData") as HTMLInputElement;
  const inputValue = inputElement.value.trim();
  const openBrackets = initializeOpenBrackets();
  const bracketMap = initializeBracketMap();
  const isValidResult = isValid(inputValue, openBrackets, bracketMap);
  updateResult(isValidResult);
};

const buttonElement = document.getElementById("button");
buttonElement?.addEventListener("click", processInput);