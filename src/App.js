import { useState, useEffect } from 'react';
import NavBar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';
import MovieList from './components/movie_lists/MovieList';

function App() {
    const API_KEY = 'd9330d162a75116fea750cc194d38c31';
    const POP_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`; 
    const NW_API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
    const UP_API = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
    const TP_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    const [popularMovies, setPopularMovies] = useState([]);
    const [nowPlayMovies, setNowPlayingMovies] = useState([]);
    const [upComingMovies, setUpComingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(POP_API);
                const upcomingMovies = await response.json();
                setPopularMovies(upcomingMovies.results);
            } catch(err) {
                console.log(err);
            }
        }
        (async () => await fetchMovies())();
    }, [])
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(NW_API);
                const upcomingMovies = await response.json();
                setNowPlayingMovies(upcomingMovies.results);
            } catch(err) {
                console.log(err);
            }
        }
        (async () => await fetchMovies())();
    }, [])

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(UP_API);
                const upcomingMovies = await response.json();
                setUpComingMovies(upcomingMovies.results);
            } catch(err) {
                console.log(err);
            }
        }
        (async () => await fetchMovies())();
    }, [])

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(TP_API);
                const upcomingMovies = await response.json();
                setTopRatedMovies(upcomingMovies.results);
            } catch(err) {
                console.log(err);
            }
        }
        (async () => await fetchMovies())();
    }, [])


  return (
    <>
        <NavBar />
        <Hero upMovies={popularMovies.slice(0,5)} />
        <MovieList movies={upComingMovies} />
        <MovieList movies={nowPlayMovies} />
        <MovieList movies={popularMovies} />
        <MovieList movies={topRatedMovies} />
    </>
  );
}

export default App;
