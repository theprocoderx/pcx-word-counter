import { readFile } from 'node:fs/promises';

export async function countWords(filePath, targetWord) {
  const target = targetWord ? targetWord.toLowerCase() : null;

  if (!filePath) {
    console.error(
      'Please provide a file path. Example: word-counter sample.txt'
    );
    process.exit(1);
  }

  try {
    const fileContent = await readFile(filePath, 'utf-8');
    const wordsArray = fileContent
      .toLowerCase()
      .split(/[\W]/)
      .filter((w) => w);

    if (wordsArray.length === 0) {
      console.log('No words found in the file.');
      process.exit(0);
    }

    if (target) {
      const count = wordsArray.filter((word) => word === target).length;
      console.log(
        `"${target}" appears ${count} time${count === 1 ? '' : 's'}.`
      );
    } else {
      const wordsCount = {};
      wordsArray.forEach((word) => {
        if (word in wordsCount) {
          wordsCount[word] += 1;
        } else {
          wordsCount[word] = 1;
        }
      });
      console.log(wordsCount);
    }
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
}
