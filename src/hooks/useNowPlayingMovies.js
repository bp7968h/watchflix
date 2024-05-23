import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)

    const getNowPlayingList = async () => {
        const response = await fetch(
            'https://api.themoviedb.org/3/movie/now_playing?&page=1',
            API_OPTIONS
        )
        const data = await response.json()
        dispatch(addNowPlayingMovies(data.results))
    }

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingList()
        // eslint-disable-next-line
    }, [nowPlayingMovies])
}

export default useNowPlayingMovies