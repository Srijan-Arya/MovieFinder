import React from 'react';
const noPoster = "https://stalbertseniors.ca/wp-content/uploads/2019/10/image-coming-soon.jpg";

const MovieCard = ({movie_prop}) => {
    return(
        <div className="movie">
            <a href={`https://www.imdb.com/title/${movie_prop.imdbID}`}>
                <div>
                    <p>{movie_prop.Year}</p>
                </div>

                <div>
                    <img src={movie_prop.Poster !== 'N/A' ? movie_prop.Poster : noPoster} alt={movie_prop.Title} />
                </div>

                <div>
                    <span>{movie_prop.Type}</span>
                    <h3>{movie_prop.Title}</h3>
                </div>
            </a>
        </div>
    )
}

export default MovieCard;