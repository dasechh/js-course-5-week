"use strict";
const maxProfit = (prices) => {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];
        if (price < minPrice) {
            minPrice = price;
        }
        else {
            const profit = price - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
};
const getInputValues = () => {
    const inputElement = document.getElementById('inputNumbers');
    const inputValue = inputElement.value.trim();
    const numStrings = inputValue.split(',');
    const prices = [];
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
const displayOutput = (output, error) => {
    const outputElement = document.getElementById('result');
    if (error) {
        outputElement.textContent = error;
    }
    else {
        outputElement.textContent = `Максимальная прибыль: ${output}`;
    }
};
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
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', calculateMaxProfit);
//# sourceMappingURL=index.js.map