import { useContext, useState } from "react";
import { getImageUrl } from "../../utils/cine-utility";

import { MovieContext } from "../../context";
import MovieDetailsModel from "./MovieDetailsModel";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
  const [showModel, setShowModel] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { cartData, setCartData } = useContext(MovieContext);

  const handleModelClose = () => {
    setSelectedMovie(null);
    setShowModel(false);
  };

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModel(true);
  };

  const handleAddToCart = (event, movie) => {
    event.stopPropagation();

    const found = cartData.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      setCartData([...cartData, movie]);
    } else {
      console.error(
        `The movie ${movie.title} has been added to the cart already!`
      );
    }
  };

  return (
    <>
      {showModel && (
        <MovieDetailsModel
          movie={selectedMovie}
          onClose={handleModelClose}
          onCartAdd={handleAddToCart}
        />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
