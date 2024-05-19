import React from 'react'
import MovieCard from './MovieCard'
import './style.css'

const MovieList = ({ title, movies }) => {

    return (
        <div style={{}}>
            <div style={{ padding: '10px' }} >
                <h1 style={{ marginBottom: '4px', color: 'white' }}>{title}</h1>
                <div className='scrollable-element' style={{ display: 'flex', gap: 10, overflowX: 'scroll' }}>
                    {movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList