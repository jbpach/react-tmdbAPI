import { useState, useEffect } from 'react';
import MovieListItem from './movie_lists/MovieListItem';
import './Popular.css';

const Popular = () => {
    const API_KEY = 'd9330d162a75116fea750cc194d38c31';
    const [popCounter, setPopCounter] = useState(1); 
    const [popularMovies, setPopularMovies] = useState([]);
    const handleLoadMore = () => {
        setPopCounter((prevCounter) => prevCounter + 1);
    }

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${popCounter}`);
                const movies = await response.json();

                setPopularMovies((prevMovies) =>  [...prevMovies, ...movies.results] );
            } catch(err) {
                console.log(err);
            }
        }
        (async () => await fetchMovies())();
    }, [popCounter])

    return (
        <main className='popular'>
            <div className="container">
                <h1>Popular</h1>
                <div className='movie-gird'>
                    {
                        popularMovies.map((movie, index) => {
                            return (
                                <MovieListItem key={index} movie={movie}/>
                            )
                        })
                    }
                </div>
                <button onClick={handleLoadMore}>Load More</button>
            </div>
        </main>
    )
}

export default Popular;