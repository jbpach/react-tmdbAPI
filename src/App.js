import { useState, useEffect } from 'react';
// import MovieList from './components/MovieList';
import NavBar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';

function App() {
//   const API_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=d9330d162a75116fea750cc194d38c31&language=en-US&page=1'
//   const [upMovies, setUpMovies] = useState([])

//   useEffect(() => {
//       const fetchUpcomingMovies = async () => {
//           try {
//               const response = await fetch(API_URL);
//               const upcomingMovies = await response.json();
//               setUpMovies(upcomingMovies.results);
//           } catch(err) {
//               console.log(err);
//           }
//       }
//       (async () => await fetchUpcomingMovies())();
//   }, [])

    const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=d9330d162a75116fea750cc194d38c31&language=en-US&page=1'
    const [upMovies, setUpMovies] = useState([])

    useEffect(() => {
        const fetchUpcomingMovies = async () => {
            try {
                const response = await fetch(API_URL);
                const upcomingMovies = await response.json();
                setUpMovies(upcomingMovies.results.slice(0,5));
            } catch(err) {
                console.log(err);
            }
        }
        (async () => await fetchUpcomingMovies())();
    }, [])

  return (
    <>
        <NavBar />
        <Hero upMovies={upMovies} />
    </>
  );
}

export default App;
