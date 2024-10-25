// Вычисление максимальной прибыли
const maxProfit = (prices: Array<number>): number => {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
      const price = prices[i];
      if (price < minPrice) {
          minPrice = price;
      } else {
          const profit = price - minPrice; 
          if (profit > maxProfit) {
              maxProfit = profit;
          }
      }
  }
  return maxProfit;
};

// Получение данных из input и их преобразование
const getInputValues = (): { prices: Array<number>, error: string | null } => {
  const inputElement = document.getElementById('inputNumbers') as HTMLInputElement;
  const inputValue = inputElement.value.trim();
  const numStrings = inputValue.split(',');
  const prices: Array<number> = [];
  for (let i = 0; i < numStrings.length; i++) {
      const trimmedNum = numStrings[i].trim();
      const num = Number(trimmedNum);
      if (!isNaN(num)) {
          prices.push(num);
      }
  }
  if (prices.length === 0) {
      return { prices: [], error: "Пожалуйста, введите корректные цены." };
  }
  return { prices, error: null };
};

// Отображение результата в элементе <p>
const displayOutput = (output: number, error: string | null) => {
  const outputElement = document.getElementById('result') as HTMLParagraphElement;
  if (error) {
      outputElement.textContent = error;
  } else {
      outputElement.textContent = `Максимальная прибыль: ${output}`;
  }
};

// Обработка ввода и вывода результата
const calculateMaxProfit = () => {
  const { prices, error } = getInputValues();
  if (error) {
      displayOutput(0, error);
      return;
  }
  const output = maxProfit(prices);
  displayOutput(output, null);
};

const buttonElement = document.getElementById('button');
buttonElement?.addEventListener('click', calculateMaxProfit);