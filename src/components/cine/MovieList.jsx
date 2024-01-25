import { getAllMovies } from "../../data/movies";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const moviesData = getAllMovies();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {moviesData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
