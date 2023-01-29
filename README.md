# Spelling Bee Solver

Occasionally I like to play the
[Spelling Bee game](https://www.nytimes.com/puzzles/spelling-bee) put out by
the New York Times. This is a simple web app that hopefully provides you
with some solutions to the game.

It works by iterating through a
[list of words](https://raw.githubusercontent.com/liammulh/spelling-bee-solver/main/src/js/words.js)
and checking each word $W$ to see if it has the central letter of the
Spelling Bee honeycomb, $H_C$. If $W$ does have $H_C$, it checks to see
if the other letters in $W$ are not contained in the outer letters of the
Spelling Bee honeycomb, $H_O$. If there's a single letter in $W$ that isn't
in $H_O$, we ignore $W$. Otherwise, we add $W$ to our list of possible answers.
