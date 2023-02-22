import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsPlayFill, BsFillStopFill } from "react-icons/bs"
import ReactPlayer from "react-player/youtube";
import defaultAvatar from "../avatar.jpg";
import defaultBanner from "../banner.jpg";
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

    const movieBudget = (budget) => {
        if ( budget >= 1000000000){
            return `$${budget / 1000000000}B`;
        } else if (budget >= 1000000) {
            return `$${budget / 1000000}M`;
        } else {
            return `$${budget}`;
        }
    }
    const API_KEY = 'd9330d162a75116fea750cc194d38c31';
    const { id } = useParams();
    const [movieDetail, setMovieDetails] = useState({});
    const [rating, setRating] = useState([]);
    const [rec, setRec] = useState([]);
    const [actors, setActors] = useState([]);
    const [director, setDirector] = useState([]);
    const [playTrailer, SetPlayTrailer] = useState(false)
    const [trailer, SetTrailer] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
                const movie = await response.json();
                setMovieDetails(movie);
                SetPlayTrailer(false);
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
        const fetchActors = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
                const data = await response.json();
                setActors(data.cast.slice(0, 5));
                setDirector(data.crew.filter((crew) => crew.job === "Director"));
            } catch(err) {
                console.log(err);
            }
        }
        (async () => await fetchActors())();
    }, [id])

    console.log(director)

    useEffect(() => {
        const fetchSimilarMovies = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`);
                const movieResponse = await response.json();
                setRec(movieResponse.results.slice(0, 7));
            } catch(err) {
                console.log(err);
            }
        } 
        (async () => await fetchSimilarMovies())();
    }, [id])

    useEffect(() => {
        const fetchTrailer = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
                const trailerResponse = await response.json();
                SetTrailer(trailerResponse.results);
            } catch(err) {
                console.log(err);
            }
        }
        (async() => await fetchTrailer())();
    }, [id])

    return (
        <main className="movie">
            <div className="hero" style={movieDetail.backdrop_path ? {background: `url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}) no-repeat center center/cover`} : {background: `url(${defaultBanner}) no-repeat center center/cover`} }>
                <div className="content">
                    <div className="movie-container">

                        {director[0] && <h3>{director[0].name}</h3>}
    
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
                            { trailer.length !== 0 && <button className="play-trailerbtn" onClick={() => {SetPlayTrailer((prev) => !prev)}} style={{backgroundColor: playTrailer && "red"}} > {playTrailer ? <BsFillStopFill/> : <BsPlayFill /> } </button> }
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
                                {movieDetail.budget && <h3>{movieBudget(movieDetail.budget) === '$0' ?  'N/A' : movieBudget(movieDetail.budget)}</h3> }
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
                {playTrailer && 
                    <div className="trailer-container">
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${trailer[trailer.length - 1].key}`} controls playing />
                    </div>     
                }
                <div className="main-grid">
                    <section>
                        <h2>DESCRIPTION</h2>
                        <p>{movieDetail.overview}</p>
                    </section>
                    <section>
                        <h2>HYPE</h2>
                        <p><b>{Math.round(movieDetail.vote_average * 10) / 10}%</b> User Score</p>
                        <p><b>{movieDetail.vote_count}</b> Votes</p>
                    </section>
                </div>

                <h2>NOTABLE CAST</h2>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    {
                        actors.map((actor, index) => {
                            return (
                                <div className="actor" key={index}>
                                    {actor.profile_path ? <img src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt="Profile" />
                                        :   <img src={defaultAvatar} alt="Default Profile" />
                                    } 
                                    <h2>{actor.name}</h2>
                                    <h3>{actor.character}</h3>
                                </div>
                            )
                        })
                    }
                </div>
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