import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { API_KEY } from '../key';

export const MovieDetail = () => {
    const { movieId } = useParams()
    const [movies, setMovies] = useState([])
    const DETAILS_API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`

    useEffect(() => {
        fetch(DETAILS_API)
        .then((response) => response.json())
        .then((json) => {
            setMovies(json)
            console.log(json)
        })
}, [movieId, DETAILS_API])


    return(
     <>

     <section className="detail-backdrop" style={{  backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})` }}>
        <div className="movie-detail-overlay">  
        <div className="movie-detail-text-overlay">
        <Link to ="/" exact='true'>

        </Link>
        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} alt={movies.title} /> 
        </div>      

        <div className="movie-detail-text"> 
        <h1>{movies.title}</h1> 
        <span className="rating"><p> {movies.vote_average}/10</p></span>
        <p className="overview">{movies.overview}</p>     
        </div>

    </div>
</section>
    </>
    )
}

/*



<img className="movie-detail-background" 
src={`https://image.tmdb.org/t/p/w1280${movies.backdrop_path} `} alt={`${`original_title`}poster`}  /> 

*/