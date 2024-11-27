import { useState } from 'react'

export default function SurveySimulator() {
    const[yes, setYes] = useState(0);
    const[no, setNo] = useState(0);
    const[maybe, setMaybe] = useState(0);

    function handleClickYes() {
        setYes(yes + 1);
    }

    function handleClickNo() {
        setNo(no + 1);
    }

    function handleClickMaybe() {
        setMaybe(maybe + 1);
    }

    const totalVotes = yes + no + maybe;
    const yesPercentage = totalVotes > 0 ? ((yes / totalVotes) * 100).toFixed(2) : 0; {/*Esto tambien es parte del 14 */}
    const noPercentage = totalVotes > 0 ? ((no / totalVotes) * 100).toFixed(2) : 0;
    const maybePercentage = totalVotes > 0 ? ((maybe / totalVotes) * 100).toFixed(2) : 0;
    
    return (
        <div>
            <button onClick={handleClickYes} >Sí</button>
            <button onClick={handleClickNo} >No</button>
            <button onClick={handleClickMaybe} >Tal vez</button>
            <h3>Total votos 'Sí': {yes} ({yesPercentage}%)</h3> {/*Toda la parte de los porcentajes es del 14 */}
            <h3>Total votos 'No': {no} ({noPercentage}%)</h3>
            <h3>Total votos 'Tal vez': {maybe} ({maybePercentage}%)</h3>
        </div>
    );
}