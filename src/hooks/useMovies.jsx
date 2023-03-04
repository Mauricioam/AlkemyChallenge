import axios from "axios";
import swal from "@sweetalert/with-react";
import { useState, useEffect } from "react";
import { getMovies } from "../services/movies";
const API_KEY = "a0f3bb61ecf1b015b1381fecd6742e7b"


export function useMovies (search){
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
      getAllMovies()
    
      return () => {
        
      }
    }, [])

    const getSearchResult = (keyword) => {
     
      let endPoint = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${API_KEY}&language=es-ES`
      axios
        .get(endPoint)
        /* LLamado solo del array con datos del detalle de peliculas */
        .then((response) => {
          const apiData = response.data;
           const movies = apiData.results.map((movie)=>({
            id: movie.id,
            title: movie.original_title,
            overview : movie.overview,
            image: movie.poster_path,
            rating: movie.vote_average
         }));
        setMoviesFound(movies);
        })
        .catch((error) => {
          swal("No pudimos encontrar lo que buscabas, intenta nuevamente");
        });
    }
    
  return { moviesList, moviesFound, getSearchResult };
}