// Создание словаря
const createLatinToEnglishDictionary = (entries: Array<string>): Map<string, Set<string>> => {
  const latinToEnglishMap = new Map<string, Set<string>>();
  entries.map(entry => {
      const [englishWord, latinWordsString] = entry.split(' - ');
      const latinWords = latinWordsString.split(', ').map(word => word.trim());
      latinWords.map(latinWord => {
          if (!latinToEnglishMap.has(latinWord)) {
              latinToEnglishMap.set(latinWord, new Set<string>());
          }
          latinToEnglishMap.get(latinWord)?.add(englishWord);
      });
  });
  return latinToEnglishMap;
};

// Получение данных из input и их преобразование
const getInputValues = (): { entries: Array<string>, error: string | null } => {
  const inputElement = document.getElementById('inputEntries') as HTMLTextAreaElement;
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

// Отображение результата в элементе <p>
const displayOutput = (dictionary: Map<string, Set<string>>, error: string | null) => {
  const outputElement = document.getElementById('result') as HTMLParagraphElement;
  if (error) {
      outputElement.textContent = error;
  } else {
      const sortedLatinWords = Array.from(dictionary.keys()).sort();
      const outputLines = [`${sortedLatinWords.length}`];
      
      sortedLatinWords.map(latinWord => {
          const englishWords = Array.from(dictionary.get(latinWord)!).sort();
          outputLines.push(`${latinWord} - ${Array.from(englishWords).join(', ')}`);
      });
      outputElement.innerHTML = outputLines.join('<br/>');
  }
};

// Обработка ввода и вывода результата
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
buttonElement?.addEventListener('click', generateLatinToEnglishDictionary);