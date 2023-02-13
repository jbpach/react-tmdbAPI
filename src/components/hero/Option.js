const Option = ({ movie, currIndex, index, handleClick }) => {
    return (
        <div key={movie.id} className="test" onClick={() => handleClick(index)} style={{ border: currIndex === index ? "3px solid white" : "none", borderRadius: currIndex === index ? "25px" : "none", opacity: currIndex !== index ? ".7" : "1"}} >
            <h1>{movie.title}</h1>
            <img src={movie && `https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="backdrop"/>
        </div>
    )
}

export default Option;