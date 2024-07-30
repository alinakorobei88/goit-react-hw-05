import { Suspense, useEffect, useRef, useState } from "react";
import {Link, NavLink, Outlet, useLocation, useParams,} from "react-router-dom";
import { fetchMovieDetails } from "../../api";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  const location = useLocation();

  const goBackRef = useRef(location?.state || "/movies");
  useEffect(() => {
    try {
      const getData = async () => {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);
  if (!movie) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <>
      <div className={css.divLink}>
        <Link className={css.btn} to={goBackRef.current}>
          Go back!
        </Link>
      </div>
      <div className={css.div}>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
          className={css.img}
        />
        <div className={css.details}>
          <h3 className={css.h3}>{movie.title}</h3>
          <p className={css.p}>
            Overview:
            <span className={css.span}>{movie.overview}</span>
          </p>
          <p className={css.p}>
            Runtime:
            <span className={css.span}>{movie.runtime}</span>
          </p>
          <p className={css.p}>
            Popularity:
            <span className={css.span}>{movie.popularity}</span>
          </p>
        </div>
      </div>
      <div className={css.nav}>
        <NavLink className={css.cast} to="cast">
          Cast
        </NavLink>
        <NavLink className={css.reviews} to="reviews">
          Reviews
        </NavLink>
      </div>
      <Suspense
        fallback={
          <div>Loading...</div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
