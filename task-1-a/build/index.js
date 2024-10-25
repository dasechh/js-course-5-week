"use strict";
const perms = (nums) => {
    if (nums.length === 0) {
        return [[]];
    }
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
        const remainingPerms = perms(remainingNums);
        for (const perm of remainingPerms) {
            result.push([currentNum, ...perm]);
        }
    }
    return result;
};
const getInputValues = () => {
    const inputElement = document.getElementById('inputNumbers');
    const inputValue = inputElement.value.trim();
    if (inputValue.startsWith('[') && inputValue.endsWith(']')) {
        const numStrings = inputValue.slice(1, -1).split(',');
        const nums = [];
        for (let i = 0; i < numStrings.length; i++) {
            const trimmedNum = numStrings[i].trim();
            const num = Number(trimmedNum);
            if (!isNaN(num)) {
                nums.push(num);
            }
        }
        return { nums, error: null };
    }
    else {
        return { nums: [], error: "Пожалуйста, введите числа в формате [1, 2, 3]" };
    }
};
const displayOutput = (output, error) => {
    const outputElement = document.getElementById('result');
    if (error) {
        outputElement.textContent = error;
    }
    else {
        outputElement.textContent = '[' + output.map(arr => '[' + arr.join(', ') + ']').join(', ') + ']';
    }
};
const generatePermutations = () => {
    const { nums, error } = getInputValues();
    if (error) {
        displayOutput([], error);
        return;
    }
    const output = perms(nums);
    displayOutput(output, null);
};
const buttonElement = document.getElementById('button');
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', generatePermutations);
//# sourceMappingURL=index.js.map