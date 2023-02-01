import React from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup , GoogleAuthProvider} from 'firebase/auth'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Auth() {
    const  dataAdmin  = useSelector(state => state.dataAdmin)
    console.log('auth: ', dataAdmin)
    const navigate = useNavigate()
    const loginWithGoogle = async () => {
        const response = new GoogleAuthProvider();
        let login = await signInWithPopup(auth, response);
        console.log('login ', auth.currentUser.email)
        if(dataAdmin.includes(auth.currentUser.email)){
            console.log('los mails coinciden')
            navigate('/home')
        }
        else{
            console.log('los mails no coinciden')
            await auth.signOut()
        }

    }
    
    async function handleGoogle(e){
        const response = await loginWithGoogle()
        console.log('google: ', response)
    }

    async function logOut(){
        const response = await auth.signOut(); //fotografoleandro81@gmail.com
        console.log('log out:', response)
        return response;
    }

    async function handleCurrentUser(){
        //await getDb()
        console.log('current user: ', auth.currentUser);
        //console.log('usuarios: ', auth)
    }

  return (
    <div>
        <button onClick={handleGoogle}>google</button>
        <button onClick={logOut}>salir</button>
        <button onClick={handleCurrentUser}>usuario</button>
    </div>
  )
}
