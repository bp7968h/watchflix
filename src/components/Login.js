import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)


    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }


    return (
        <div style={{ position: 'relative' }}>
            <Header />
            <form style={{
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
                    <input type="text" placeholder='Full Name' style={{ width: '100%', padding: '10px', margin: '8px', background: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: '8px' }} />
                }


                <input type="email" placeholder='Email Address' style={{ width: '100%', padding: '10px', margin: '8px', background: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: '8px' }} />

                <input type="password" placeholder='Password' style={{ width: '100%', padding: '10px', margin: '8px', background: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: '8px' }} />

                <button style={{ width: '50%', padding: '10px', marginTop: '20px', background: 'rgb(235, 57, 66)', borderRadius: '8px', color: 'white' }}>
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </button>
                <p onClick={toggleSignInForm} style={{ alignSelf: 'flex-start', marginTop: '20px', cursor: 'pointer' }}>
                    {isSignInForm ? 'New to netflix? Sign up' : 'Already use netflix! Sign In'}
                </p>
            </form>
            <div style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/e5813029-89df-4dfc-8fd4-b0dd01d0290b/GB-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg")',
                minHeight: '100vh',
                maxWidth: '100vw',
            }}>
            </div>
        </div>
    )
}

export default Login