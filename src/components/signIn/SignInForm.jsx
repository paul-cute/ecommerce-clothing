import React, { useState } from 'react'
import {createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase'
import FormInput from '../formInput/FormInput';
import './signIn.scss'
import Button from '../button/button'

function SignInForm() {

    const defaultFormFields = {
        email: '',
        password: '',
    }

    const [formFields, setFormFields] = useState(defaultFormFields);

    const {email,password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const sigInWithGoogle = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    const  handleSubmit = async(event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response)
            resetFormFields();

        } catch (error) {

            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email')
                    break;
                case 'auth/user-not-found':
                    alert('not user associated with that email')
                    break
                default:
                    break;
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({
            ...formFields,
            [name]: value
        })
    }

  return (
    <div className='sign-up-container'>
        <h2>Alredy have an account?</h2>
        <span>Sign in with your email and password</span>

        <form action="" onSubmit={handleSubmit}>
            <FormInput label="Email" type="email" required onChange={handleChange} name='email' value={email}/>

            <FormInput label="Password" type="password" required onChange={handleChange} name='password' value={password}/>

            <div className='buttons-container'>
                <Button type='submit'> Sign In</Button>
                <Button type='button' buttonType='google' onClick={sigInWithGoogle}> Google sign in</Button>
            </div>
        </form>
    </div>
  )
}

export default SignInForm