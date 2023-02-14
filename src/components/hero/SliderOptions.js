import Option from "./Option";

const SliderOptions = ({ movies, currIndex, handleClick }) => {
    return (
        <div className="main-test">
            {
                movies.map((movie, index) => {
                    return (
                        <Option key={movie.id} movie={movie} currIndex={currIndex} index={index} handleClick={handleClick} />
                    )
                })
            }
        </div>
    )
}

export default SliderOptions;