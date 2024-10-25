"use strict";
const createLatinToEnglishDictionary = (entries) => {
    const latinToEnglishMap = new Map();
    entries.map(entry => {
        const [englishWord, latinWordsString] = entry.split(' - ');
        const latinWords = latinWordsString.split(', ').map(word => word.trim());
        latinWords.map(latinWord => {
            var _a;
            if (!latinToEnglishMap.has(latinWord)) {
                latinToEnglishMap.set(latinWord, new Set());
            }
            (_a = latinToEnglishMap.get(latinWord)) === null || _a === void 0 ? void 0 : _a.add(englishWord);
        });
    });
    return latinToEnglishMap;
};
const getInputValues = () => {
    const inputElement = document.getElementById('inputEntries');
    const inputValue = inputElement.value.trim();
    const lines = inputValue.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    if (lines.length < 2) {
        return { entries: [], error: "Пожалуйста, введите корректные записи." };
    }
    const N = parseInt(lines[0]);
    const entries = lines.slice(1, N + 1);
    if (entries.length !== N) {
        return { entries: [], error: `Ожидалось ${N} записей, но найдено ${entries.length}.` };
    }
    return { entries, error: null };
};
const displayOutput = (dictionary, error) => {
    const outputElement = document.getElementById('result');
    if (error) {
        outputElement.textContent = error;
    }
    else {
        const sortedLatinWords = Array.from(dictionary.keys()).sort();
        const outputLines = [`${sortedLatinWords.length}`];
        sortedLatinWords.map(latinWord => {
            const englishWords = Array.from(dictionary.get(latinWord)).sort();
            outputLines.push(`${latinWord} - ${Array.from(englishWords).join(', ')}`);
        });
        outputElement.innerHTML = outputLines.join('<br/>');
    }
};
const generateLatinToEnglishDictionary = () => {
    const { entries, error } = getInputValues();
    if (error) {
        displayOutput(new Map(), error);
        return;
    }
    const dictionary = createLatinToEnglishDictionary(entries);
    displayOutput(dictionary, null);
};
const buttonElement = document.getElementById('button');
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', generateLatinToEnglishDictionary);
//# sourceMappingURL=index.js.map