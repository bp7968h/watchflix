import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate('/error')
        });
    }

    useEffect(() => {
        console.log('registered')
        onAuthStateChanged(auth, (user) => {
            console.log('fired')
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
    }, [])

    return (
        <div style={{ width: '100%', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
            <img
                style={{ marginLeft: 155 }}
                width='160px'
                height='78px'
                src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
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
                onClick={handleSignOut}
            >
                <img
                    src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
                />
                <p>Sign Out</p>
            </div>}
        </div>
    )
}

export default Header