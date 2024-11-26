import { useState } from 'react'

export default function AverageCalculator() {
    const[grades, setGrades] = useState([]);
    const[average, setAverage] = useState(0.0);
    const[userInput, setUserInput] = useState('');

    function handleInputOnChange(e) {
        setUserInput(e.target.value);
    }

    function handleOnClick() {
        const parsedValue = parseFloat(userInput);
        const newGrades = [...grades,parsedValue];
        setGrades(newGrades);
        setUserInput('');
        updateAverage(newGrades);
    }
    
    function updateAverage(newGrades) {
        const newAverage = calculateAverage(newGrades);
        setAverage(newAverage);
    }

    function calculateAverage(newGrades) {
        let sum = 0;
        let average = 0;

        for(let i = 0; i < newGrades.length; i++){
            sum += newGrades[i];
        }
        average = sum / newGrades.length;
        return average;
    }

    return(
        <div>
            <input
                type='number'
                placeholder='9.14'
                value={userInput}
                onChange={handleInputOnChange}
            />
            <button onClick={handleOnClick} >Agregar al calculo</button>
            <br/>
            <br/>
            <p><b>CALIFICACIONES:</b> {grades}</p>
            <p><b>PROMEDIO:</b>{average}</p>
        </div>
    );
}