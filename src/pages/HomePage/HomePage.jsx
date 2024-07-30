import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css';

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day', {
                  headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWVmMTg3ZTdiYzQyZjZmMGI0NWYzMjI3NGRlYzlmOSIsInN1YiI6IjY2YThiMGZhZTc2NjZhZDU3YjVmYjg4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9-Q8KKA4U59ZxSHXnUFuwDvxCsC-Vupbvq3dQHVC8kM',
                  },
    });
    setMovies(response.data.results);
} catch(error) {
    console.error('Failed to fetch trending movies:', error);
}
};

fetchTrendingMovies();
    }, []);

    return (
        <div className={css.container}>
            <h1>Trending Movies</h1>
            <MovieList movies={movies} />
        </div>
    );
};

export default HomePage;