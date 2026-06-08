import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

function MovieDetails() {
  const { title } = useParams();
  const [movie, setMovie] = useState([]);
  const apikey = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apikey}&t=${title}`,
      );
      const data = await response.json();
      console.log(data);
      setMovie(data);
    };
    fetchData();
  }, []);

  return (
    <div className="details-main-bg">
      <h2 className="heading"> Movie Details </h2>
      <div className="details-bg">
        <div className="image">
          <img src={movie.Poster} alt={movie.Title} />
        </div>

        <div className="content">
          <h3 className="movie-title">Title : {movie.Title} ({movie.Year})
          </h3>
          <p className="director">
            Director : <b>{movie.Director}</b>
          </p>
          <p className="Actors">
            Actors : <b>{movie.Actors}</b>
          </p>
          <p className="Actors">
            Genre : <b>{movie.Genre}</b>
          </p>
          <p className="Actors">
            Plot : <b>{movie.Plot}</b>
          </p>
          <p className="Actors">
            IMDb Rating : <b>{movie.imdbRating}</b>
          </p>
          <p className="Actors">
            Runtime : <b>{movie.Runtime}</b>
          </p>
          <p className="Actors">
            Language : <b>{movie.Language}</b>
          </p>
          <p className="Actors">
            Country : <b>{movie.Country}</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
