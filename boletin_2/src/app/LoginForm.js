import { useState } from 'react'

const credentials = [
    {user:'Manu107',passwd:'manu'},
    {user:'Corderito777',passwd:'ayySevilla'}
];

export default function LoginForm() {
    const[userInfo, setUserInfo] = useState({user: '', passwd: ''});
    const[isSent, setIsSent] = useState(false);
    let creds = credentials;

    function handleOnSubmit(e) {
        e.preventDefault();
        let valid = checkInput();
        if(valid){setIsSent(true)}
        setUserInfo({user: '', passwd: ''});
    }

    function handleOnChange(e) {
        setUserInfo({...userInfo,[e.target.name]: e.target.value}); //e.target.name --> identifica el input
    }

    function checkInput() {
        let isValid = false;

        for(let i = 0; i < creds.length; i++){
            if(creds[i].user === userInfo.user && creds[i].passwd === userInfo.passwd){
                isValid = true;
            }
        }

        if(isValid){
            alert('Las credenciales son correctas');
        }
        else{
            alert('Nombre de usuario/Contraseña incorrect@');
        }
    }
    
    if(!isSent){
        return (
            <div>
                <form onSubmit={handleOnSubmit}>
                    <label>Nombre de usuario:</label>
                    <input type='text' placeholder='Vegetta777' value={userInfo.user} onChange={handleOnChange} name='user'/>
                    <label>Contraseña:</label>
                    <input type='password' placeholder='*****' value={userInfo.passwd} onChange={handleOnChange} name='passwd' />
                    <button type='submit'>LOGIN</button>
                </form>
            </div>
        );
    }
    else{
        return(
            <p>SESIÓN INICIADA</p>
        );
    }
}