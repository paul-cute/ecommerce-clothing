import React from 'react'
import {createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect} from '../../utils/firebase/firebase'
import SignUpForm from '../../components/signUp/SignUpForm';

function Signin() {

  const logGoogleUser = async() => {
      const {user} = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
        <h1>Signin Page</h1>
        <button onClick={logGoogleUser}>singIn</button>
        <SignUpForm/>
    </div>
  )
}

export default Signin