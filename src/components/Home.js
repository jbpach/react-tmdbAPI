import Hero from "./hero/Hero";
import MovieList from "./movie_lists/MovieList";
const Home = ({ popularMoviesSection, upcomingMovies, nowPlayMovies, popularMovies, topRatedMovies }) => {
    return (
        <>
            <Hero movies={popularMoviesSection}/>
            <MovieList heading="Upcoming Movies" movies={upcomingMovies} />
            <MovieList heading="Now Playing" movies={nowPlayMovies} />
            <MovieList heading="Popular" movies={popularMovies} />
            <MovieList heading="Top Rated" movies={topRatedMovies} />
        </>
    )
}

export default Home;