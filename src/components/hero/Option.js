const Option = ({ movie, currIndex, index, handleClick }) => {
    
    const optionTrueStyles = {
        border: "3px solid white",
        borderRadius: "25px",
        opacity: "1",
        color: "white"
    };

    const optionFalseStyles = {
        opacity: ".7",
        color: "#9CA1AF",
    };

    return (
        <div key={movie.id} className="test" onClick={() => handleClick(index)} style={currIndex === index ? optionTrueStyles : optionFalseStyles}>
            <h1>{movie.title}</h1>
            <img src={movie && `https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="backdrop"/>
        </div>
    )
}

export default Option;