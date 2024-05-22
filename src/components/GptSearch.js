import React from 'react'
import GptMovies from './GptMovies'
import GptSearchBar from './GptSearchBar'
import { BG_IMAGE } from '../utils/constants';


const GptSearch = () => {
    return (
        <div style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${BG_IMAGE})`,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <GptSearchBar />
            <GptMovies />
        </div>
    )
}

export default GptSearch