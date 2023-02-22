import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieListItem from "./movie_lists/MovieListItem";

const Search = () => {
    const API_KEY = 'd9330d162a75116fea750cc194d38c31';
    const { id } = useParams();
    const [searchMovies, setSearchMovies] = useState([]);

    useEffect(() => {
        const fetchSearch = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${id}`);
                const movies = await response.json();
                setSearchMovies(movies.results);
            } catch(err) {
                console.log(err);
            }
        }
        (async () => await fetchSearch())();

    }, [id])

    return (
        <div>
            {/* <h1>This is search</h1>
            <h2>{formatedSearch}</h2>
            <p>{JSON.stringify(searchMovies)}</p> */}


            <main className='popular'>
            <div className="container">
                {/* <h1>Popular</h1> */}
                <div className='movie-gird'>
                    {
                        searchMovies.map((movie, index) => {
                            return (
                                <MovieListItem key={index} movie={movie}/>
                            )
                        })
                    }
                </div>
                {/* <button className="load-more" onClick={handleLoadMore}>Load More</button> */}
            </div>
        </main>
        </div>
    )
}

export default Search