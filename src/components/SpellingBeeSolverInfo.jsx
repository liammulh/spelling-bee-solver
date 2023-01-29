const SpellingBeeSolverInfo = () => {
    return (
        <>
            <p>
                Occasionally I like to play the{' '}
                <a href='https://www.nytimes.com/puzzles/spelling-bee'>
                    Spelling Bee game
                </a>{' '}
                put out by the New York Times. This is a simple web app that
                hopefully provides you with some solutions to the game.
            </p>
            <details>
                <summary>Help</summary>
                <img
                    alt='Annotated Spelling Bee Honeycomb'
                    src='honeycomb.png'
                    width='300'
                />
                <p>
                    Put the central letter in the first input, and the outer
                    letters (all one word; not separated by spaces or commas) in
                    the second input.
                </p>
            </details>
            <details>
                <summary>More Info</summary>
                <p>
                    If you're interested, there's an high-level explanation of
                    Spelling Bee Solver on{' '}
                    <a href='https://github.com/liammulh/spelling-bee-solver'>
                        its GitHub page
                    </a>
                    . You can also find the source code there.
                </p>
            </details>
        </>
    );
};

export default SpellingBeeSolverInfo;
