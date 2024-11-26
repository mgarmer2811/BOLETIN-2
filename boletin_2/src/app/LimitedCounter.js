import { useState } from 'react'

export default function LimitedCounter() {
    const[clicks, setClicks] = useState(0);
    const[userInput, setUserInput] = useState('');
    const[maxClicks, setMaxClicks] = useState(0);
    
    function handleUserInputChange(e) {
        setUserInput(e.target.value);
    }

    function handleSetMax() {
        const parsedValue = parseInt(userInput, 10);
        if(Number.isInteger(parsedValue) && parsedValue > 0){
            setMaxClicks(parsedValue);
            setUserInput('');
        }
        else{
            alert('Por favor establece como limite maximo \nun numero positivo');
        }
        setClicks(0);
    }

    function handleAddClick() {
        if(clicks < maxClicks){
            setClicks(clicks + 1);
        }
    }

    function handleOnRestart() {
        setClicks(0);
    }
    
    return(
        <div>
            <input 
                type='number'
                placeholder='Introduce valor maximo'
                value={userInput}
                onChange={handleUserInputChange}
            />
            <Button onClick={handleSetMax}>Establecer maximo</Button>
            <h3>Maximo clicks actuales: {maxClicks}</h3>
            <br/>
            <p>Clicks: {clicks}</p>
            <Button onClick={handleAddClick} >+1</Button>
            <RestartButton onRestart={handleOnRestart} />
        </div>
    );
}

function RestartButton({onRestart}) {
    return(
        <button onClick={onRestart} >Reiniciar</button>
    );
}

function Button({onClick, children}) {
    return(
        <button onClick={onClick} >{children}</button>
    );
}