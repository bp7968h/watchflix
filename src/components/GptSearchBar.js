import React, { useRef } from 'react'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'

const GptSearchBar = () => {

    const searchTextRef = useRef(null)

    const searchMovieInfo = async (movieName) => {
        const response = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movieName, API_OPTIONS)
        const data = await response.json()

        return data.results
    }

    const handleRecommendation = async () => {

        if (searchTextRef.current.value) {
            const query = "Act like a movie recommendation system and suggest movies for this: " + searchTextRef.current.value + ". Only give me names of top 5 movies that are comma separated values. For example: Sting, Civil War, Breathe, Arthur The King, Monkey Man"

            const response = await openai.chat.completions.create({
                messages: [{ role: 'user', content: query }],
                model: 'gpt-3.5-turbo'
            })

            const resultMovies = response.choices?.[0]?.message?.content.split(",")
            // console.log(response.choices?.[0]?.message?.content)

            const moviePromises = resultMovies.map(movie => searchMovieInfo(movie))

            const movieData = await Promise.all(moviePromises)

            console.log(movieData)
        }
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} style={{
            padding: '10px',
            display: 'flex',
            gap: 7
        }}>
            <input required ref={searchTextRef} type="text" placeholder="What would you like to watch today?" style={{
                borderRadius: '15px', padding: '15px', width: '400px', fontWeight: 'bold', color: 'white', background: 'rgba(0,0,0,0.8)', border: 'none',
            }} />
            <button onClick={handleRecommendation} style={{ border: 'none', width: '125px', padding: '20px', borderRadius: '15px', background: 'rgb(229, 9, 20)', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>Search</button>
        </form>
    )
}

export default GptSearchBar