import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.css"
import MovieListItem from "./movie_lists/MovieListItem";

const Movie = () => {
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
    const API_KEY = 'd9330d162a75116fea750cc194d38c31';
    const { id } = useParams();
    const [movieDetail, setMovieDetails] = useState({});
    const [rating, setRating] = useState([]);
    const [rec, setRec] = useState([])

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
                const movie = await response.json();
                setMovieDetails(movie);
            } catch(err) {
                console.log(err);
            }
        }
        (async () => await fetchMovie())();
    }, [id])

    useEffect(() => {
        const fetchRating = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${API_KEY}`);
                const details = await response.json();
                setRating(details.results.filter((result) => result.iso_3166_1 === "US"));
            } catch(err) {
                console.log(err);
            }
        }
        (async () => await fetchRating())();
    }, [id])

    useEffect(() => {
        const fetchSimilarMovies = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`);
                const movieResponse = await response.json();
                setRec(movieResponse.results.slice(0, 8));
            } catch(err) {
                console.log(err);
            }
        } 
        (async () => await fetchSimilarMovies())();
    }, [id])

    return (
        <main className="movie">
            <div className="hero" style={movieDetail.backdrop_path && {background: `url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}) no-repeat center center/cover`}}>
                <div className="content">
                    <div className="movie-container">
                        <h1 className="heading-title">{movieDetail.title}</h1>
                        <div style={{display: "flex"}}> 
                            {   
                                movieDetail.genres && movieDetail.genres.map((genre) => {
                                    return (
                                        <span className="span-border" key={genre.id}>{genre.name}</span>
                                    )
                                })
                            }
                        </div>
                        <div className="details">
                            <div className="border">
                                <h2 className="rotate-heading">RATING</h2>
                                { rating[0] && <h3>{rating[0].release_dates[0].certification !== "" ?  rating[0].release_dates[0].certification : "N/A"}</h3> }
                            </div>
                            <div className="border">
                                <h2 className="rotate-heading">RELEASE</h2>
                                { movieDetail.release_date && <h3>{`${monthAbbr[movieDetail.release_date.slice(5,7)]} ${movieDetail.release_date.slice(8,)}, ${movieDetail.release_date.slice(0,4)}`}</h3> }
                            </div>
                            <div className="border">
                                <h2 className="rotate-heading">BUDGET</h2>
                                <h3>${movieDetail.budget / 1000000}M</h3>
                            </div>
                            <div className="border">
                                <h2 className="rotate-heading">LENGTH</h2>
                                <h3>{movieDetail.runtime} min</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                    <h2>DESCRIPTION</h2>
                    <p>{movieDetail.overview}</p>

                    <h2>HYPE</h2>

                    <h2>NOTABLE CAST</h2>

                    <h2>OTHER SIMILAR FILMS</h2>
                    <div style={{display: "flex"}} >
                        {
                            rec.map((movie) => {
                                return (
                                    <MovieListItem key={movie.id} movie={movie} />
                                )
                            })
                        }
                    </div>
            </div>
        </main>
    )
}

export default Movie;