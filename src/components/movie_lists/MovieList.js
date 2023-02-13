import MovieListItem from "./MovieListItem";
import "./MovieList.css";

const MovieList = ({heading, movies}) => {

    return (

        <div className="container">
            <h2 className="listheading">{heading}</h2>
            <div className="movieList snaps-inline">
                {   
                    movies.map((movie) => (
                        <MovieListItem key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>

    )
}
export default MovieList;