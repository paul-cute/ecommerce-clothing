import React from 'react'
import {createUserDocumentFromAuth, signInWithGooglePopup} from '../../utils/firebase/firebase'

function Signin() {

    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        console.log(user)
        const userDocRef = await createUserDocumentFromAuth(user)
     
    }
  return (
    <div>
        <h1>Signin Page</h1>
        <button onClick={logGoogleUser}>singIn</button>
    </div>
  )
}

export default Signin