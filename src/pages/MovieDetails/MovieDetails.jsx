import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const apikey = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apikey}&i=${id}`,
      );
      const data = await response.json();
      console.log(data);
      setMovie(data);
    };
    fetchData();
  }, []);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto p-8">
        <div
          className="
      grid
      md:grid-cols-2
      gap-10
      bg-slate-900
      rounded-3xl
      p-8
      shadow-2xl
    "
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="
          w-full
          rounded-2xl
          object-cover
        "
          />

          <div>
  <h1 className="text-5xl font-bold mb-2">
    {movie.Title}
  </h1>

  <p className="text-slate-400 text-lg mb-6">
    {movie.Year} • {movie.Rated} • {movie.Runtime}
  </p>

  {/* Stats Cards */}

  <div className="grid grid-cols-2 gap-4 mb-8">

    <div className="bg-slate-800 p-4 rounded-xl">
      <p className="text-cyan-400 text-sm">
        IMDb Rating
      </p>

      <h3 className="text-2xl font-bold">
        ⭐ {movie.imdbRating}
      </h3>
    </div>

    <div className="bg-slate-800 p-4 rounded-xl">
      <p className="text-cyan-400 text-sm">
        Metascore
      </p>

      <h3 className="text-2xl font-bold">
        {movie.Metascore}
      </h3>
    </div>

    <div className="bg-slate-800 p-4 rounded-xl">
      <p className="text-cyan-400 text-sm">
        Votes
      </p>

      <h3 className="text-xl font-bold">
        {movie.imdbVotes}
      </h3>
    </div>

    <div className="bg-slate-800 p-4 rounded-xl">
      <p className="text-cyan-400 text-sm">
        Box Office
      </p>

      <h3 className="text-xl font-bold">
        {movie.BoxOffice}
      </h3>
    </div>

  </div>

  {/* Movie Information */}

  <div className="space-y-3 text-slate-300">

    <p>
      <span className="text-cyan-400 font-semibold">
        Director:
      </span>{" "}
      {movie.Director}
    </p>

    <p>
      <span className="text-cyan-400 font-semibold">
        Writer:
      </span>{" "}
      {movie.Writer}
    </p>

    <p>
      <span className="text-cyan-400 font-semibold">
        Actors:
      </span>{" "}
      {movie.Actors}
    </p>

    <p>
      <span className="text-cyan-400 font-semibold">
        Genre:
      </span>{" "}
      {movie.Genre}
    </p>

    <p>
      <span className="text-cyan-400 font-semibold">
        Released:
      </span>{" "}
      {movie.Released}
    </p>

    <p>
      <span className="text-cyan-400 font-semibold">
        Language:
      </span>{" "}
      {movie.Language}
    </p>

    <p>
      <span className="text-cyan-400 font-semibold">
        Country:
      </span>{" "}
      {movie.Country}
    </p>

    <p>
      <span className="text-cyan-400 font-semibold">
        Awards:
      </span>{" "}
      🏆 {movie.Awards}
    </p>

  </div>

  {/* Plot */}

  <div className="mt-8">
    <h2 className="text-2xl font-bold mb-3">
      Plot
    </h2>

    <p className="leading-8 text-slate-300">
      {movie.Plot}
    </p>
  </div>

  {/* Ratings */}

  <div className="mt-8">
    <h2 className="text-2xl font-bold mb-4">
      Ratings
    </h2>

    <div className="space-y-3">
      {movie.Ratings?.map((rating) => (
        <div
          key={rating.Source}
          className="bg-slate-800 p-4 rounded-lg"
        >
          <p className="font-semibold">
            {rating.Source}
          </p>

          <p className="text-cyan-400">
            {rating.Value}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
