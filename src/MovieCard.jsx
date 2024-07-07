import React from 'react';
import imdb from "./imdb.png"
const noPoster = "https://stalbertseniors.ca/wp-content/uploads/2019/10/image-coming-soon.jpg";

const MovieCard = ({movie_prop}) => {
    return(
        <div className="movie">
            <a href={`https://www.imdb.com/title/${movie_prop.imdbID}`}>
                <div id="year">
                    <p>{movie_prop.Year}</p>
                </div>

                <div id="poster">
                    <img src={movie_prop.Poster !== 'N/A' ? movie_prop.Poster : noPoster} alt={movie_prop.Title} />
                </div>
                <div id="imdb-btn"><img src={imdb} alt="imdb" /></div>
                <div id="type_title">
                    <span>{movie_prop.Type}</span>
                    <h3>{movie_prop.Title}</h3>
                </div>
            </a>
        </div>
    )
}

export default MovieCard;