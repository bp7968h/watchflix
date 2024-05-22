import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import { toggleRecommendationView } from '../utils/recommendSlice'
import { AVATAR, LOGO } from '../utils/constants'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    const showRecommendationView = useSelector(store => store.recommendation.showRecommendationView)
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate('/error')
        });
    }

    const handleRecommendClick = () => {
        dispatch(toggleRecommendationView())
    }

    useEffect(() => {
        // console.log('registered')
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // console.log('fired')
            if (user) {
                //User is signed in
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid, email, displayName }))
                navigate('/browse')
            } else {
                // User is signed out
                dispatch(removeUser())
                navigate('/')
            }
        });

        return () => unsubscribe()
    }, [dispatch, navigate])

    return (
        <div style={{ width: '100%', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))', zIndex: 99 }} >
            <img
                style={{ marginLeft: 155 }}
                width='160px'
                height='78px'
                src={LOGO}
                alt="Brand"
            />
            {user && <div style={{
                color: 'rgb(235, 57, 66)',
                marginRight: '40px',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                cursor: 'pointer'
            }}
            >
                <button style={{ border: 'none', padding: '10px', borderRadius: '2em', background: 'rgba(178, 7, 16)', color: 'white', cursor: 'pointer', fontWeight: 'bold' }} onClick={handleRecommendClick} >
                    {showRecommendationView ? 'Back Home' : 'Recommend Me'}
                </button>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }} onClick={handleSignOut}>
                    <img
                        alt="Avatar"
                        src={AVATAR}
                    />
                    <p>Sign Out</p>
                </div>
            </div>}
        </div>
    )
}

export default Header