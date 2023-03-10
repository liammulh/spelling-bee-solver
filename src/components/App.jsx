import {useState} from 'react';
import getPossibleAnswers from '../js/getPossibleAnswers.js';
import PossibleAnswersInfo from './PossibleAnswersInfo.jsx';
import Footer from './Footer.jsx';
import Info from './Info.jsx';

function App() {
    const [inputs, setInputs] = useState('');
    const [possibleAnswers, setPossibleAnswers] = useState([]);
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
            <h1>🐝 Spelling Bee Solver 🐝</h1>
            <Info />
            <form onSubmit={handleSubmit}>
                <div id='label-container'>
                    <label>
                        Central letter:&nbsp;
                        <input
                            type='text'
                            name='centralLetter'
                            value={inputs.centralLetter || ''}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Outer letters:&nbsp;
                        <input
                            type='text'
                            name='outerLetters'
                            value={inputs.outerLetters || ''}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type='submit'>Submit</button>
            </form>
            {possibleAnswers.length > 0 ? (
                <PossibleAnswersInfo />
            ) : (
                <></>
            )}
            <ul>
                {possibleAnswers.map((answer) => (
                    <li key={answer}>{answer}</li>
                ))}
            </ul>
            <Footer />
        </>
    );
}

export default App;
