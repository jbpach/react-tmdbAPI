import { useState, useEffect } from 'react';
// import NavBar from './components/navbar/NavBar';
// import Hero from './components/hero/Hero';
// import MovieList from './components/movie_lists/MovieList';
import Layout from './components/Layout';
import Home from './components/Home';
import Popular from './components/Popular';
import Movie from './components/Movie';
import Missing from './components/Missing';
import { Routes, Route } from 'react-router-dom';


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
                const movies = await response.json();
                setPopularMovies(movies.results);
            } catch(err) {
                console.log(err);
            }
        }
        (async () => await fetchMovies())();
    }, [POP_API])
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(NW_API);
                const movies = await response.json();
                setNowPlayingMovies(movies.results);
            } catch(err) {
                console.log(err);
            }
        }
        (async () => await fetchMovies())();
    }, [NW_API])
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(UP_API);
                const movies = await response.json();
                setUpComingMovies(movies.results);
            } catch(err) {
                console.log(err);
            }
        }
        (async () => await fetchMovies())();
    }, [UP_API])

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(TP_API);
                const movies = await response.json();
                setTopRatedMovies(movies.results);
            } catch(err) {
                console.log(err);
            }
        }
        (async () => await fetchMovies())();
    }, [TP_API])

  return (
    <Routes>
        <Route path="/" element={<Layout /> }>
            <Route index element={<Home popularMoviesSection={popularMovies.slice(0,5)} upcomingMovies={upComingMovies} nowPlayMovies={nowPlayMovies} popularMovies={popularMovies} topRatedMovies={topRatedMovies} />} />
            <Route path="popular">
                <Route index element={<Popular />} />
                <Route path=":id" element={<Movie />} />
            </Route>
            <Route path="nowplaying">
                <Route index element={<Popular />} />
                <Route path=":id" element={<Movie />} />
            </Route>
            <Route path="upcoming">
                <Route index element={<Popular />} />
                <Route path=":id" element={<Movie />} />
            </Route>
            <Route path="toprated">
                <Route index element={<Popular />} />
                <Route path=":id" element={<Movie />} />
            </Route>
            <Route path="*" element={<Missing />} />
        </Route>
    </Routes>
  );
}

export default App;
