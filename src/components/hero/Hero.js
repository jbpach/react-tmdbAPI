import { useState } from "react";
import SliderOptions from "./SliderOptions";
import "./Hero.css";

const Hero = ({ movies }) => {

    const [currIndex, setCurrIndex] = useState(0);

    const handleClick = (index) => {
        setCurrIndex(index);
    }

    return (
        <>
            <div className="hero" style={ movies[currIndex] && {background: `url(https://image.tmdb.org/t/p/original${movies[currIndex].backdrop_path}) no-repeat center center/cover`}}>
                <div className="content">
                </div>
                <div className="container">
                    <SliderOptions movies={movies} currIndex={currIndex} handleClick={handleClick}/>
                </div>
            </div>

        </>
    )
}

export default Hero;