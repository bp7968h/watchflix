import { useCallback } from "react"
import { API_OPTIONS } from "../utils/constants"
import openai from "../utils/openai"
import { useDispatch } from "react-redux"
import { addRecommendedMovies } from '../utils/recommendSlice'


const useRecommendation = () => {
    const dispatch = useDispatch()

    const searchMovieInfo = useCallback(async (movieName) => {
        const response = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movieName, API_OPTIONS)
        const data = await response.json()

        return data.results
    }, [])

    const getRecommendation = useCallback(async (searchTextRefValue) => {

        const query = "Act like a movie recommendation system and suggest movies for this: " + searchTextRefValue + ". Only give me names of top 5 movies that are comma separated values. For example: Sting,Civil War,Breathe,Arthur The King,Monkey Man"

        const response = await openai.chat.completions.create({
            messages: [{ role: 'user', content: query }],
            model: 'gpt-3.5-turbo'
        })
        // console.log('CGPResult: ', response.choices?.[0]?.message?.content)
        const resultMovies = response.choices?.[0]?.message?.content.split(",")
        // console.log('Results: ', resultMovies)

        const moviePromises = resultMovies.map(movie => searchMovieInfo(movie))

        const movieData = await Promise.all(moviePromises)
        dispatch(addRecommendedMovies(movieData.flat()))
        // console.log(movieData) .filter(movie => resultMovies.includes(movie.title))
    }, [dispatch, searchMovieInfo])

    return getRecommendation
}

export default useRecommendation