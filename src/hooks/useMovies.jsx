import axios from "axios";
import swal from "@sweetalert/with-react";
import { useState, useEffect } from "react";
const API_KEY = "a0f3bb61ecf1b015b1381fecd6742e7b"


export function useMovies (page){
    const [moviesList, setMoviesList] = useState([]);
    
    const getApiData = () => {
      
        const endPoint =
         `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES` ;
      axios
        .get(endPoint)
        /* LLamado solo del array con datos de las peliculas */
        .then((response) => {
          const apiData = response.data;
         // setMoviesList(apiData.results);
         const movies = apiData.results.map((movie)=>({
            id: movie.id,
            title: movie.original_title,
            overview : movie.overview,
            image: movie.poster_path,
            rating: movie.vote_average,
            pages: movie.total_pages
         }));
         setMoviesList(movies);
        })
        .catch((error) => {
          swal("Hubo un error intenta mas tarde");
        });
    };
  
  
    useEffect(() => {
      getApiData()
    
      return () => {
        
      }
    }, [])




    const getSearchResult = (keyword,page) => {
     
      let endPoint = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${API_KEY}&language=es-ES&page=${page}`
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
         return { moviesList : movies}
        })
        .catch((error) => {
          swal("No pudimos encontrar lo que buscabas, intenta nuevamente");
        });
    }
    
  return { moviesList, getSearchResult };
}