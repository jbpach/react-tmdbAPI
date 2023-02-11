import { useEffect, useState } from "react";
import "./Hero.css";

const Hero = ({ upMovies }) => {
    return (
        <div className="hero" style={{background: `url(https://image.tmdb.org/t/p/original${upMovies[0].backdrop_path}) no-repeat center center/cover`}}>
            <div className="content">
                <div className="main-test">
                    {
                        upMovies.map((movie) => {
                            return (
                                <div className="test">
                                    <h1>{movie.title}</h1>
                                    <img src={movie && `https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="backdrop"/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Hero;