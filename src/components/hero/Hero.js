import { useState } from "react";
import SliderOptions from "./SliderOptions";
import "./Hero.css";

const Hero = ({ upMovies }) => {

    const [currIndex, setCurrIndex] = useState(0);

    const handleClick = (index) => {
        setCurrIndex(index);
    }

    return (
        <>
            <div className="hero" style={ upMovies[currIndex] && {background: `url(https://image.tmdb.org/t/p/original${upMovies[currIndex].backdrop_path}) no-repeat center center/cover`}}>
                <div className="content">
                </div>
            </div>
            <div className="container">
                <SliderOptions upMovies={upMovies} currIndex={currIndex} handleClick={handleClick}/>
            </div>

        </>
    )
}

export default Hero;