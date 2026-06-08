import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [title, setTitle] = useState("");
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
  }, [title]);

  return (
    <div>
      <h1 className="heading">Movie Search App</h1>
      <form action="">
        <label htmlFor="">
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
        <input
          type="search"
          name="title"
          id="title"
          placeholder="Enter Movie Name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </form>

      <div className="result-tab">
        {movie?.Response === "True" ? (
          <div className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h3 className="movie-title">
              {movie.Title} ({movie.Year})
            </h3>
            <p className="director">
              Directed by "<b>{movie.Director}</b>"
            </p>
            <p className="Actors">
              Actors "<b>{movie.Actors}</b>"
            </p>
            <Link to={`/movie/${movie.Title}`}>View Details</Link>
          </div>
        ) : (
          <div>
            <h2> Movie Not Found!</h2>
            <p>Search Another Movie</p>
          </div>
        )}

        {}
      </div>
    </div>
  );
}

export default Home;
