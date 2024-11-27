import { useState } from 'react'

export default function TextCarousel({texts}) {
    const[index, setIndex] = useState(0);

    function handleNext() {
        setIndex(index === texts.length - 1 ? 0 : index + 1);
    }

    function handlePrevious() {
        setIndex(index > 0 ? index - 1 : index === texts.length - 1);
    }
    
    return (
        <div>
            <p>{texts[index]}</p>
            <button onClick={handleNext} >Siguiente</button>
            <button onClick={handlePrevious} >Anterior</button>
        </div>
    );
}