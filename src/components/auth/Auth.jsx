import React from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useState } from 'react'


export default function Auth() {
    const [ input, setInput ] = useState({
        email: '',
        password: ''
    })

    const register = async (email, password) => {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        return response
    }
    
    async function handleOnClick(e){
        const response = await register(input.email, input.password)
        console.log('response: ', response)
    }

    function handleOnChange(e){
        setInput({...input, [e.target.name]: e.target.value})
    }

  return (
    <div>
        <label >Email</label>
        <input type='email' name='email' value={input.email} onChange={handleOnChange} />
        <label>Contraseña</label>
        <input type='password' name='password' value={input.password} onChange={handleOnChange} />
        <button onClick={handleOnClick} >Ingresar</button>
    </div>
  )
}
