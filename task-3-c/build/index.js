"use strict";
const initializeOpenBrackets = () => {
    return new Set(['(', '{', '[']);
};
const initializeBracketMap = () => {
    return new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ]);
};
const isValid = (input, openBrackets, bracketMap) => {
    const queue = [];
    for (const char of input) {
        if (openBrackets.has(char)) {
            queue.push(char);
        }
        else {
            const lastOpen = queue.pop();
            if (lastOpen === undefined || bracketMap.get(lastOpen) !== char) {
                return false;
            }
        }
    }
    return queue.length === 0;
};
const updateResult = (isValidResult) => {
    const resultElement = document.getElementById("result");
    resultElement.textContent = isValidResult ? "Входная строка валидна." : "Входная строка не валидна.";
};
const processInput = () => {
    const inputElement = document.getElementById("inputData");
    const inputValue = inputElement.value.trim();
    const openBrackets = initializeOpenBrackets();
    const bracketMap = initializeBracketMap();
    const isValidResult = isValid(inputValue, openBrackets, bracketMap);
    updateResult(isValidResult);
};
const buttonElement = document.getElementById("button");
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener("click", processInput);
//# sourceMappingURL=index.js.map