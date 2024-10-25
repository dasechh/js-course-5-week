// Удаление дубликатов из массива
const removeDuplicates = (arr: number[]): number[] => {
  const uniqueSet = new Set<number>();
  const uniqueQueue: number[] = [];
  for (const item of arr) {
      if (!uniqueSet.has(item)) {
          uniqueSet.add(item);
          uniqueQueue.push(item);
      }
  }
  return uniqueQueue;
};

// Обработка ввода и вывода результата
const processInput = () => {
  const inputElement = document.getElementById("inputArray") as HTMLInputElement;
  const resultElement = document.getElementById("result");
  const inputValue = inputElement.value.trim();
  const inputArray: number[] = inputValue.split(',')
      .map(num => Number(num.trim()))
      .filter(num => !isNaN(num));
  const uniqueArray = removeDuplicates(inputArray);
  if (resultElement) {
      resultElement.textContent = `Уникальные значения: ${uniqueArray.join(', ')}`;
  }
};

const buttonElement = document.getElementById("button");
buttonElement?.addEventListener("click", processInput);