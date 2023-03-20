import axios from "axios";
import { mappedApiData } from "../utils/mappedApiData";
const API_KEY = "a0f3bb61ecf1b015b1381fecd6742e7b";


export const getMovies = async (page) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES&page=${page}`);
    const apiData = await response.data;
    return mappedApiData(apiData)
  } catch (error) {
    throw new Error("Error en la llamada a API");
  }
};

export const getSearchMovies = async (keyword,page) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${API_KEY}&language=es-ES&page=${page}`
    );
    const apiData = await response.data;
    return mappedApiData(apiData)
  } catch (error) {
    throw new Error("Error en la busqueda");
  }
};

export const getDetailMovie = async (movieId) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a0f3bb61ecf1b015b1381fecd6742e7b&language=es-ES`)
    const apiData = await response.data;
    return mappedApiData(apiData)
  } catch (error) {
    throw new Error("Error al buscar la pelicula")
  }
}
