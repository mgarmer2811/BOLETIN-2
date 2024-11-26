import { useState } from "react";

export default function GuessTheNumber() {
    const [randomNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
    const [tries, setTries] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [guessed, setGuessed] = useState(false);

    function handleInputOnChange(e) {
        setUserInput(e.target.value);
    }

    function handleOnClick() {
        const parsedInput = parseInt(userInput, 10);
        setTries(tries + 1);
        if (parsedInput !== randomNumber) {
            if (parsedInput > randomNumber) {
                alert("El numero introducido es mayor al numero secreto");
                setUserInput("");
            } else {
                alert("El numero introducido es menor al numero secreto");
                setUserInput("");
            }
        } else {
            setGuessed(true);
            alert("HAS ADIVNADO EL NUMERO!");
        }
    }

    if (!guessed) {
        return (
            <div>
                <p>
                    <b>INTENTOS: </b>
                    {tries}
                </p>
                <input
                    type="number"
                    value={userInput}
                    onChange={handleInputOnChange}
                />
                <button onClick={handleOnClick}>ADIVINAR</button>
            </div>
        );
    } else {
        return (
            <div>
                <p>
                    <b>INTENTOS: </b>
                    {tries}
                </p>
                <p>
                    <b>NUMERO SECRETO: {randomNumber}</b>
                </p>
                <h1>HAS ADIVINADO EL NUMERO!</h1>
            </div>
        );
    }
}
