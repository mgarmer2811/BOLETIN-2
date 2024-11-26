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
    
    return (
        <div>
            <button onClick={handleClickYes} >Sí</button>
            <button onClick={handleClickNo} >No</button>
            <button onClick={handleClickMaybe} >Tal vez</button>
            <h3>Total votos 'Sí': {yes}</h3>
            <h3>Total votos 'No': {no}</h3>
            <h3>Total votos 'Tal vez': {maybe}</h3>
        </div>
    );
}