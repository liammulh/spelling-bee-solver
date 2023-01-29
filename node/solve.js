import { readFileSync } from 'node:fs';
import { argv } from 'node:process';

const wordsFileContents = readFileSync( 'words.txt', 'utf-8' );
const words = wordsFileContents.split( '\n' );
const argsAreIncorrect = argv[ 2 ] === '--central-letter' &&
                         argv[ 3 ] &&
                         argv[ 4 ] === 'outer-letters' &&
                         argv[ 5 ];

const MIN_ANSWER_LENGTH = 3;

if ( argsAreIncorrect ) {

    // This is kinda lazy, but it's just a little script.

    console.log( 'Please supply the central letter, and the outer letters.' );
    console.log( 'For example, if the central letter is "C" and the outer letters are "NTIARU":' );
    console.log( '    node solve.js --central-letter C --outer-letters NTIARU' );
}
else {

    // Name the command line args. (We're not really doing validation.)
    const centralLetter = argv[ 3 ];
    const outerLetters = argv[ 5 ];

    // Answers that we will log before the script exits.
    const possibleAnswers = [];

    // Iterate through each word in the list of all words.
    for ( const word of words ) {

        // Store result of making the word lowercase.
        const lowercaseWord = word.toLowerCase();

        // If the word meets the length requirement, and it includes the central letter...
        if ( word.length >= MIN_ANSWER_LENGTH && lowercaseWord.includes( centralLetter.toLowerCase() ) ) {

            // Iterate through each of the letters in the word.
            let shouldAddWord = true;
            for ( let i = 0; i < lowercaseWord.length; i++ ) {

                // If one of the word's letters isn't in the letters list, don't add the word.
                const centralAndOuterLetters = outerLetters + centralLetter;
                if ( !centralAndOuterLetters.toLowerCase().includes( lowercaseWord[ i ] ) ) {
                    shouldAddWord = false;
                }
            }

            if ( shouldAddWord ) {
                possibleAnswers.push( word );
            }
        }
    }

    console.log( possibleAnswers );
}