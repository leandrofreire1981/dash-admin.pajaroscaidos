import React from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup , GoogleAuthProvider, signOut} from 'firebase/auth'
import { useState } from 'react'


export default function Auth() {
    const [ input, setInput ] = useState({
        email: '',
        password: ''
    })

    const register = async (email, password) => {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        return response;
    }

    const loginWithEmail = async (email, password) => {
        const response = await signInWithEmailAndPassword(auth, email, password);
        return response;
    }

    const loginWithGoogle = async () => {
        const response = new GoogleAuthProvider();
        return await signInWithPopup(auth, response);
    }
    
    async function handleOnClick(e){
        const response = await register(input.email, input.password);
        console.log('response: ', response);
    }

    function handleOnChange(e){
        setInput({...input, [e.target.name]: e.target.value})
    }

    async function handleGoogle(e){
        const response = await loginWithGoogle()
        console.log('google: ', response)
    }

    async function handleEmail(){
        const response = await loginWithEmail(auth, input.email, input.password);
        console.log('email: ', response)
    }

    async function logOut(){
        const response = await signOut(auth);
        console.log('log out:', response)
        return response;
    }

  return (
    <div>
        <label >Email</label>
        <input type='email' name='email' value={input.email} onChange={handleOnChange} />
        <label>Contraseña</label>
        <input type='password' name='password' value={input.password} onChange={handleOnChange} />
        <button onClick={handleOnClick} >registrarse</button>
        <button onClick={handleGoogle}>google</button>
        <button onClick={handleEmail}>Email</button>
        <button onClick={logOut}>salir</button>
    </div>
  )
}
