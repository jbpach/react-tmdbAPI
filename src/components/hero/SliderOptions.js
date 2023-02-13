import Option from "./Option";

const SliderOptions = ({ upMovies, currIndex, handleClick }) => {
    return (
        <div className="main-test">
            {
                upMovies.map((movie, index) => {
                    return (
                        <Option movie={movie} currIndex={currIndex} index={index} handleClick={handleClick} />
                    )
                })
            }
        </div>
    )
}

export default SliderOptions;