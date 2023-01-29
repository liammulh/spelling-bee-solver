import words from '../../words.js';

const MIN_ANSWER_LENGTH = 3;

const getPossibleAnswers = (centralLetter, outerLetters) => {
    const possibleAnswers = [];
    for (const word of words) {
        // Store result of making the word lowercase.
        const lowercaseWord = word.toLowerCase();

        // If the word meets the length requirement, and it includes the central letter...
        if (
            word.length >= MIN_ANSWER_LENGTH &&
            lowercaseWord.includes(centralLetter.toLowerCase())
        ) {
            // Iterate through each of the letters in the word.
            let shouldAddWord = true;
            for (let i = 0; i < lowercaseWord.length; i++) {
                // If one of the word's letters isn't in the letters list, don't add the word.
                const centralAndOuterLetters = outerLetters + centralLetter;
                if (
                    !centralAndOuterLetters
                        .toLowerCase()
                        .includes(lowercaseWord[i])
                ) {
                    shouldAddWord = false;
                }
            }

            if (shouldAddWord) {
                possibleAnswers.push(word);
            }
        }
    }
    return possibleAnswers;
};

export default getPossibleAnswers;
