import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, ArrowRight } from "lucide-react";

type MovieItem = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type MovieResponse = {
  Search?: MovieItem[];
  totalResults?: string;
  Response: string;
  Error?: string;
};

function Home() {
  const [title, setTitle] = useState<string>("");
  const [movie, setMovie] = useState<MovieResponse | null>(null);
  const apiKey: string = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${title}`,
      );
      const data: MovieResponse = await response.json();
      console.log(data);
      setMovie(data);
    };
    fetchData();
  }, [title]);

  if (movie === null) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-5xl font-bold text-center mb-10">🎬 Movie Search</h1>

        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-2xl">
            <Search size={22} className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400"/>
            <input type="search" placeholder="Search movies..." value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              className=" w-full py-4 pl-14 pr-4 rounded-full bg-slate-900 border border-cyan-500  outline-none text-lg focus:ring-2 focus:ring-cyan-400 transition "
            />
          </div>
        </div>

        {movie?.Response === "True" ? (
          <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movie.Search?.map((item: MovieItem) => (
              <Link key={item.imdbID} to={`/movie/${item.imdbID}`} className="group block">
                <div className=" relative overflow-hidden rounded-2xl bg-slate-900 cursor-pointer transition-all duration-500   hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/30">
                  <img
                    src={
                      item.Poster !== "N/A"
                        ? item.Poster
                        : "https://via.placeholder.com/300x450?text=No+Poster"
                    }
                    alt={item.Title}
                    className=" w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110 "
                  />

                  <div className=" absolute top-3 right-3 bg-cyan-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1" >
                    <Calendar size={14} /> {item.Year}
                  </div>

                  <div className=" absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.Title}</h3>
                      <div className="flex items-center gap-2 mt-2 text-cyan-400">
                        <ArrowRight size={18} />
                        <span>View Details</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          title && (
            <div className="text-center mt-20">
              <h2 className="text-3xl font-bold text-red-400"> Movie Not Found</h2>
              <p className="text-slate-400 mt-3">Try another movie title</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Home;
