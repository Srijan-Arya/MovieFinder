import {useEffect, useState} from 'react';
import './App.css';
import searchIcon from './Search.svg';
import logo from './logo192.png';
import MovieCard from './MovieCard';

const api_link = 'http://www.omdbapi.com?apikey=ef4759d8';
const movList = [
    "Incept",
    "Forrest",
    "Redemption",
    "Gladiator",
    "Titanic",
    "Avatar",
    "Inglourious",
    "Interstellar",
    "Prestige",
    "Land",
    "Green",
    "Fight",
    "Departed",
    "Revenant",
    "Hotel",
    "Whip",
    "19",
    "Show",
    "Good",
    "Se7en",
    "Wolf",
    "Social",
    "Blade",
    "TMatrix",
    "Dunk",
    "Arrival",
    "Mad",
    "Joker",
    "Island",
    "Eternal"
];

const randomSearchTerm = movList[Math.floor(Math.random()*movList.length)];
const App = () => {
    const [movies, setmovies] = useState([]); //empty array intially, means no movies | UseState hook
    const [searchTerm, setSearchTerm] = useState(""); //initially our searched value is empty, so displaying place holder
    const movieSearch = async (title) => {
        const response = await fetch(`${api_link}&s=${title}`);
        const data = await response.json();
        console.log(data)
        setmovies(data.Search); //setting the movie
    }

    useEffect(()=>{
        movieSearch(randomSearchTerm);

    }, [])
    return(
        <div className="app">
            <h1>MovieFinder</h1>
            <div className="search">
                <input 
                    placeholder='Search Movies...'
                    value = {searchTerm}
                    onChange={(a)=>{
                        setSearchTerm(a.target.value)
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            movieSearch(searchTerm);
                        }
                    }}
                />
                <img 
                    src={searchIcon} 
                    alt="search"
                    onClick={()=>{
                        movieSearch(searchTerm)
                    }}
                    
                
                />
            </div>

            {/* Logic Ahead, basically if our movies(initial hook) const var is empty
                that means we got no movie data from API. Since our movies array is empty.
                Else if we got we show all the Elements inside the movies array.
            */}
            {
                movies?.length > 0 ? 
                (
                    <div className="container">
                        {
                            movies.map(movie_card => (
                                <MovieCard movie_prop={movie_card}/> 
                            ))
                        }
                    </div>
                ) :
                (
                    <div className="empty">
                        <h2>No movies found!</h2>
                    </div>
                )

            }
            <div className="footer">
                <h1>Created with React <img src={logo}></img>- Srijan Arya</h1>
            </div>
            
        </div>
    )
}

export default App;