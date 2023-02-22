import { useState, useEffect } from 'react';
import MovieListItem from './movie_lists/MovieListItem';
import './Popular.css';

const TopRated = () => {
    const API_KEY = 'd9330d162a75116fea750cc194d38c31';
    const [popCounter, setPopCounter] = useState(1); 
    const [popularMovies, setPopularMovies] = useState([]);
    const handleLoadMore = () => {
        setPopCounter((prevCounter) => prevCounter + 1);
    }

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d9330d162a75116fea750cc194d38c31&language=en-US&page=1`);
                const movies = await response.json();
                if (popCounter === 1) {
                    setPopularMovies(movies.results );
                } else {
                    setPopularMovies((prevMovies) => [...prevMovies, ...movies.results])
                }
            } catch(err) {
                console.log(err);
            }
        }
        (async () => await fetchMovies())();
    }, [popCounter])

    return (
        <main className='popular'>
            <div className="container">
                <h1>Top Rated</h1>
                <div className='movie-gird'>
                    {
                        popularMovies.map((movie, index) => {
                            return (
                                <MovieListItem key={index} movie={movie}/>
                            )
                        })
                    }
                </div>
                <button className="load-more" onClick={handleLoadMore}>Load More</button>
            </div>
        </main>
    )
}

export default TopRated;