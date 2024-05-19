import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMAGE } from '../utils/constants';

const Login = () => {
    const dispatch = useDispatch()
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)


    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = (e) => {
        e.preventDefault()

        const errMessage = checkValidData(email.current.value, password.current.value)
        setErrorMessage(errMessage)

        if (!isSignInForm && !name.current.value) {
            setErrorMessage("Please enter your full name")
        }

        if (errorMessage) return

        if (isSignInForm) {
            // sign in logic

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage)
                });

        } else {
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ uid, email, displayName }))

                    }).catch((error) => {
                        // An error occurred
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage)
                });
        }
    }


    return (
        <div style={{ position: 'relative' }}>
            <Header />
            <form style={{
                maxWidth: '250px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '48px 68px',
                borderRadius: '4px',
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
            }}>
                <h1 style={{ color: 'white', alignSelf: 'flex-start', marginBottom: '15px' }}>
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </h1>

                {!isSignInForm &&
                    <input ref={name} type="text" placeholder='Full Name' style={{ width: '100%', padding: '10px', margin: '8px', background: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: '8px' }} />
                }


                <input ref={email} type="email" placeholder='Email Address' style={{ width: '100%', padding: '10px', margin: '8px', background: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: '8px' }} />

                <input ref={password} type="password" placeholder='Password' style={{ width: '100%', padding: '10px', margin: '8px', background: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: '8px' }} />

                <p style={{ color: 'rgb(235, 57, 66)', marginTop: '5px', fontWeight: 'bold' }}>{errorMessage}</p>

                <button style={{ width: '50%', padding: '10px', marginTop: '20px', background: 'rgb(235, 57, 66)', borderRadius: '8px', color: 'white' }} onClick={handleButtonClick}>
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </button>
                <p onClick={toggleSignInForm} style={{ alignSelf: 'flex-start', marginTop: '20px', cursor: 'pointer' }}>
                    {isSignInForm ? 'New to netflix? Sign up' : 'Already use netflix! Sign In'}
                </p>
            </form>
            <div style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${BG_IMAGE})`,
                minHeight: '100vh',
                maxWidth: '100vw',
            }}>
            </div>
        </div>
    )
}

export default Login