import swal from "@sweetalert/with-react";
import { useState, useEffect } from "react";
import { getMovies, getSearchMovies } from "../services/movies";


export function useMovies() {
  const [moviesList, setMoviesList] = useState([]);
  const [moviesFound, setMoviesFound] = useState([]);

  const getAllMovies = async () => {
    try {
      const allMovies = await getMovies();
      setMoviesList(allMovies);
    } catch (error) {
      swal("Hubo un error intenta mas tarde");
    }
  };

  useEffect(() => {
    getAllMovies();
   

    return () => {};
  }, []);

  const getSearchResult = async (keyword) => {
    try {
      const searchedMovie = await getSearchMovies(keyword);
      setMoviesFound(searchedMovie);
    } catch (error) {
      swal("No pudimos encontrar lo que buscabas, intenta nuevamente");
    }
  };
  
  return { moviesList, moviesFound, getSearchResult };
}
