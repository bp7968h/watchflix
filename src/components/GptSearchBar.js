import React from 'react'

const GptSearchBar = () => {
    return (
        <form style={{
            padding: '10px',
            display: 'flex',
            gap: 7
        }}>
            <input type="text" placeholder="What would you like to watch today?" style={{
                borderRadius: '15px', padding: '15px', width: '400px', fontWeight: 'bold', color: 'white', background: 'rgba(0,0,0,0.8)', border: 'none',
            }} />
            <button style={{ border: 'none', width: '150px', padding: '20px', borderRadius: '15px', background: 'rgb(229, 9, 20)', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>Search</button>
        </form>
    )
}

export default GptSearchBar