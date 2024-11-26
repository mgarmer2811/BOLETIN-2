import { useState } from 'react'

export default function MultiCounter() {
    const[numCounters, setNumCounters] = useState([]);

    function handleAddCounter() {
        setNumCounters([...numCounters,1]);
    }
    
    return(
        <div>
            <button onClick={handleAddCounter} >AGREGAR CONTADOR</button>
            <br/>
            <br/>
            {numCounters.map((_,index) =>(
                <Counter key={index} />
            ))}
        </div>
    );
}

function Counter() {
    const[clicks,setClicks] = useState(0);
    
    function handleAddClick() {
        setClicks(clicks + 1);
    }

    function handleDecreaseClick() {
        if(clicks > 0){
            setClicks(clicks - 1);
        }
    }

    function handleReset() {
        setClicks(0);
    }
    
    return(
        <div>
            <h3>Clicks: {clicks}</h3>
            <button onClick={handleAddClick} >+1</button>
            <button onClick={handleDecreaseClick} >-1</button>
            <button onClick={handleReset} >Reiniciar</button>
            <br/>
        </div>
    );
}