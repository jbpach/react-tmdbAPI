const MovieListItem = ({ movie }) => {
    const monthAbbr = {
        '01': "Jan", 
        '02': "Feb", 
        '03': "Mar", 
        '04': "Apr",
        '05': "May", 
        '06': "Jun",
        '07': "Jul",
        '08': "Aug",
        '09': "Sep", 
        '10': "Oct",
        '11': "Nov", 
        '12': "Dec" 
    };

    console.log(movie)
    
    return (

        <article>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" />
            <h1>{movie.original_title}</h1>
            <p>{monthAbbr[movie.release_date.slice(5,7)]} {movie.release_date.slice(8,)}</p>                
        </article> 
    )
}

export default MovieListItem;