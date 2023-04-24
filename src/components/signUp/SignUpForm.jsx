import React, { useState } from 'react'
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase'
import FormInput from '../formInput/FormInput';

function SignUpForm() {

    const defaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [formFields, setFormFields] = useState(defaultFormFields);

    const {confirmPassword,displayName,email,password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const  handleSubmit = async(event) => {
        event.preventDefault();

        if(password != confirmPassword) {
            alert("Password dont match");
            return; 
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password); 
            
            await createUserDocumentFromAuth(user,{displayName});

            resetFormFields();

        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('Cant create user, email alredy is used')
            }
            console.log(error)
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
    <div>
        <h1>Sign up with your email and password</h1>

        <form action="" onSubmit={handleSubmit}>
            <FormInput label="Display name" type="text" required onChange={handleChange} name='displayName' value={displayName}/>

            <FormInput label="Email" type="email" required onChange={handleChange} name='email' value={email}/>

            <FormInput label="Password" type="password" required onChange={handleChange} name='password' value={password}/>

            <FormInput label="Confirm password" type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
            
            <button type='submit'> Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpForm