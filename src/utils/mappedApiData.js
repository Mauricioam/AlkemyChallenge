export const mappedApiData = (data) => {
  let allData = {};

  allData.pages = {
    page: data.page,
    totalPages: data.total_pages,
  };
  allData.results = data.results.map((movie) => ({
    id: movie.id,
    title: movie.original_title,
    overview: movie.overview,
    image: movie.poster_path,
    rating: movie.vote_average,
  }));

  return allData;
};
