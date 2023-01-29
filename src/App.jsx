import {useState} from 'react';
import getPossibleAnswers from './js/getPossibleAnswers.js';

function App() {
    const [inputs, setInputs] = useState('');
    const [possibleAnswers, setPossibleAnswers] = useState([]);
    const possibleAnswersHeaderAndInfoJsx = (
        <>
            <h2>Possible Answers</h2>
            <p>
                The words below are <em>possible</em> answers. They all contain
                the central letter and the outer letters, but they might not be
                in Spelling Bee's list of accepted answers.
            </p>
        </>
    );
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({...values, [name]: value}));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            inputs.centralLetter &&
            inputs.centralLetter !== '' &&
            inputs.outerLetters &&
            inputs.outerLetters !== ''
        ) {
            setPossibleAnswers(
                getPossibleAnswers(inputs.centralLetter, inputs.outerLetters),
            );
        }
    };
    return (
        <>
            <h1>Spelling Bee Solver</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Central letter:
                    <input
                        type='text'
                        name='centralLetter'
                        value={inputs.centralLetter || ''}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Outer letters:
                    <input
                        type='text'
                        name='outerLetters'
                        value={inputs.outerLetters || ''}
                        onChange={handleChange}
                    />
                </label>
                <button type='submit'>Submit</button>
            </form>
            {possibleAnswers.length > 0 ? (
                possibleAnswersHeaderAndInfoJsx
            ) : (
                <></>
            )}
            <ul>
                {possibleAnswers.map((answer) => (
                    <li key={answer}>{answer}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
