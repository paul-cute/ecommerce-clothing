import React from 'react'
import SignUpForm from '../../components/signUp/SignUpForm';
import SignInForm from '../../components/signIn/SignInForm';
import './authentication.scss'

function Authentication() {
  return (
    <div className='authentication-container'>
        <SignInForm/>
        <SignUpForm/>
    </div>
  )
}

export default Authentication