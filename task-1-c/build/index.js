"use strict";
const maxArea = (heights) => {
    let left = 0;
    let right = heights.length - 1;
    let maxVolume = 0;
    while (left < right) {
        const height = Math.min(heights[left], heights[right]);
        const width = right - left;
        const volume = height * width;
        maxVolume = Math.max(maxVolume, volume);
        if (heights[left] < heights[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return maxVolume;
};
const getInputValues = () => {
    const inputElement = document.getElementById('inputNumbers');
    const inputValue = inputElement.value.trim();
    const numStrings = inputValue.split(',');
    const heights = [];
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
const displayOutput = (output, error) => {
    const outputElement = document.getElementById('result');
    if (error) {
        outputElement.textContent = error;
    }
    else {
        outputElement.textContent = `Максимальный объем воды: ${output}`;
    }
};
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
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', calculateMaxArea);
//# sourceMappingURL=index.js.map