"use strict";
const getInputData = () => {
    const inputElement = document.getElementById("inputData");
    return inputElement.value.trim().split('\n');
};
const initializeLanguages = (numberOfStudents, inputValue) => {
    const allLanguages = new Set();
    let commonLanguages = null;
    let index = 1;
    for (let i = 0; i < numberOfStudents; i++) {
        const numberOfLanguages = parseInt(inputValue[index++]);
        const languagesKnownByCurrentStudent = new Set();
        for (let j = 0; j < numberOfLanguages; j++) {
            const language = inputValue[index++].trim();
            languagesKnownByCurrentStudent.add(language);
            allLanguages.add(language);
        }
        commonLanguages = updateCommonLanguages(commonLanguages, languagesKnownByCurrentStudent);
    }
    return [allLanguages, commonLanguages];
};
const updateCommonLanguages = (commonLanguages, languagesKnownByCurrentStudent) => {
    if (commonLanguages === null) {
        return new Set(languagesKnownByCurrentStudent);
    }
    else {
        const filteredCommonLanguages = new Set([...commonLanguages].filter(language => languagesKnownByCurrentStudent.has(language)));
        return filteredCommonLanguages;
    }
};
const generateOutput = (allLanguages, commonLanguages) => {
    let output = '';
    output += `${(commonLanguages === null || commonLanguages === void 0 ? void 0 : commonLanguages.size) || 0}\n`;
    if (commonLanguages) {
        const sortedCommonLanguages = Array.from(commonLanguages).sort();
        output += sortedCommonLanguages.join('\n') + '\n';
    }
    output += `${allLanguages.size}\n`;
    const sortedAllLanguages = Array.from(allLanguages).sort();
    output += sortedAllLanguages.join('\n');
    return output;
};
const processLanguages = () => {
    const inputValue = getInputData();
    const numberOfStudents = parseInt(inputValue[0]);
    const [allLanguages, commonLanguages] = initializeLanguages(numberOfStudents, inputValue);
    const output = generateOutput(allLanguages, commonLanguages);
    const resultElement = document.getElementById("result");
    resultElement.textContent = output;
};
const buttonElement = document.getElementById("button");
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener("click", processLanguages);
//# sourceMappingURL=index.js.map