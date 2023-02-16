import MovieListItem from './movie_lists/MovieListItem';
import './Popular.css';

const Popular = ({ popularMovies, handleLoadMore }) => {
    return (
        <main>
            <div className="container">
                <h1>Popular</h1>
                <div className='movie-gird'>
                    {
                        popularMovies.map((movie) => {
                            return (
                                <MovieListItem key={movie.id} movie={movie}/>
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