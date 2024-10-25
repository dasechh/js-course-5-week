// Обработка данных о продажах
const processSalesData = (salesData: string[]): Map<string, Map<string, number>> => {
  const customerData = new Map<string, Map<string, number>>();
  for (const entry of salesData) {
      const [customer, item, quantityStr] = entry.split(' ');
      const quantity = parseInt(quantityStr, 10);
      if (!customerData.has(customer)) {
          customerData.set(customer, new Map());
      }
      const items = customerData.get(customer)!;
      items.set(item, (items.get(item) || 0) + quantity);
  }
  return customerData;
};

// Форматирование данных
const formatSalesData = (customerData: Map<string, Map<string, number>>): string => {
  const sortedCustomers = Array.from(customerData.keys()).sort();
  return sortedCustomers.map(customer => {
      const items = customerData.get(customer)!;
      const sortedItems = Array.from(items.keys()).sort();
      return `${customer}:\n` + sortedItems.map(item => `${item} ${items.get(item)}`).join('\n');
  }).join('\n');
};

// Отображение результата
const displayOutput = (output: string) => {
  const resultElement = document.getElementById('result') as HTMLPreElement;
  resultElement.innerText = output;
};

// Обработка ввода и вывода результата
const generateSalesReport = () => {
  const inputElement = document.getElementById('inputSales') as HTMLTextAreaElement;
  const salesData = inputElement.value.trim().split('\n').map(line => line.trim());
  const customerData = processSalesData(salesData);
  const output = formatSalesData(customerData);
  displayOutput(output);
};

const buttonElement = document.getElementById('button');
buttonElement?.addEventListener('click', generateSalesReport);