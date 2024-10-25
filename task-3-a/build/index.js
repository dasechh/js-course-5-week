"use strict";
const removeDuplicates = (arr) => {
    const uniqueSet = new Set();
    const uniqueQueue = [];
    for (const item of arr) {
        if (!uniqueSet.has(item)) {
            uniqueSet.add(item);
            uniqueQueue.push(item);
        }
    }
    return uniqueQueue;
};
const processInput = () => {
    const inputElement = document.getElementById("inputArray");
    const resultElement = document.getElementById("result");
    const inputValue = inputElement.value.trim();
    const inputArray = inputValue.split(',')
        .map(num => Number(num.trim()))
        .filter(num => !isNaN(num));
    const uniqueArray = removeDuplicates(inputArray);
    if (resultElement) {
        resultElement.textContent = `Уникальные значения: ${uniqueArray.join(', ')}`;
    }
};
const buttonElement = document.getElementById("button");
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener("click", processInput);
//# sourceMappingURL=index.js.map