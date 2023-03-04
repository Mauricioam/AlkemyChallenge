import axios from "axios";
const API_KEY = "a0f3bb61ecf1b015b1381fecd6742e7b";
const allMoviesEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES`;

export const getMovies = async () => {
  try {
    const response = await axios.get(allMoviesEndpoint);
    const apiData = await response.data;
    return apiData?.results.map((movie) => ({
      id: movie.id,
      title: movie.original_title,
      overview: movie.overview,
      image: movie.poster_path,
      rating: movie.vote_average,
      pages: movie.total_pages,
    }));
  } catch (error) {
    throw new Error("Error en la llamada a API");
  }
};

export const getSearchMovies = async (keyword) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${API_KEY}&language=es-ES`
    );
    const apiData = await response.data;
    return apiData?.results.map((movie) => ({
        id: movie.id,
        title: movie.original_title,
        overview: movie.overview,
        image: movie.poster_path,
        rating: movie.vote_average,
        pages: movie.total_pages,
      }));
  } catch (error) {
    throw new Error("Error en la busqueda");
  }
};
