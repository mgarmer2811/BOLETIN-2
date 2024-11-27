import { useState } from 'react'

export default function ThemeSelector() {
    const[color, setColor] = useState('');
    const[disabled, setDisabled] = useState(false);

    function handleColorChange(e) {
        setColor(e.target.value);
    }
    
    return(
        <div style={{ backgroundColor: color}}>
            <form>
                <label htmlFor='color'>Selecciona el color:</label>
                <select id='color' name='colors' onChange={handleColorChange}>
                    <option value=''>Selecciona un color</option>
                    <option value='#0000FF'>Azul</option>
                    <option value='#00FF00'>Verde</option>
                    <option value='#FF0000'>Rojo</option>
                </select>
            </form>
        </div>
    );
}