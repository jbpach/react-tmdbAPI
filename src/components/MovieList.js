import MovieComp from "./MovieComp";
const MovieList = ({heading, upMovies}) => {
    return (
        <>
            <h2 className="listheading">{heading}</h2>
            <div className="movieList snaps-inline">
                {   
                    upMovies.map((movie) => (
                        <MovieComp key={movie.id} oneMovie={movie} />
                    ))
                }
            </div>

        </>
    )
}
export default MovieList;