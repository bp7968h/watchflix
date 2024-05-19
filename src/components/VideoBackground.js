import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)

    useMovieTrailer(movieId)

    if (!trailerVideo) return

    return (
        // <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }} >
        <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <iframe
                // style={{ width: '100vw', aspectRatio: 16 / 9 }}
                style={{
                    width: '100vw',
                    height: `calc(100vw * (9 / 16))`,
                    position: 'absolute',
                    top: '43%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
                src={"https://www.youtube.com/embed/" + trailerVideo.key + "?autoplay=1&mute=1&loop=1&playlist=" + trailerVideo.key}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div >
    )
}

export default VideoBackground