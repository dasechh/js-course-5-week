// Вычисление максимального объема воды
const maxArea = (heights: Array<number>): number => {
  let left = 0
  let right = heights.length - 1;
  let maxVolume = 0;
  while (left < right) {
      const height = Math.min(heights[left], heights[right]);
      const width = right - left;
      const volume = height * width;
      maxVolume = Math.max(maxVolume, volume);
      if (heights[left] < heights[right]) {
          left++;
      } else {
          right--;
      }
  }
  return maxVolume;
};

// Получение данных из input и их преобразование
const getInputValues = (): { heights: Array<number>, error: string | null } => {
  const inputElement = document.getElementById('inputNumbers') as HTMLInputElement;
  const inputValue = inputElement.value.trim();
  const numStrings = inputValue.split(',');
  const heights: Array<number> = [];
  for (let i = 0; i < numStrings.length; i++) {
      const trimmedNum = numStrings[i].trim();
      const num = Number(trimmedNum);
      if (!isNaN(num) && num >= 0) {
          heights.push(num);
      }
  }
  if (heights.length === 0) {
      return { heights: [], error: "Пожалуйста, введите корректные неотрицательные целые числа." };
  }
  return { heights, error: null };
};

// Отображение результата в элементе <p>
const displayOutput = (output: number, error: string | null) => {
  const outputElement = document.getElementById('result') as HTMLParagraphElement;
  if (error) {
      outputElement.textContent = error;
  } else {
      outputElement.textContent = `Максимальный объем воды: ${output}`;
  }
};

// Обработка ввода и вывода результата
const calculateMaxArea = () => {
  const { heights, error } = getInputValues();
  if (error) {
      displayOutput(0, error);
      return;
  }
  const output = maxArea(heights);
  displayOutput(output, null);
};

const buttonElement = document.getElementById('button');
buttonElement?.addEventListener('click', calculateMaxArea);