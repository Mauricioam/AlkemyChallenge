import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import swal from "@sweetalert/with-react";
import "../css/components/favoriteBtn.css";
import "../css/components/card.css";
import HeartIcon from "./HeartIcon";

function Listado({ addOrRemoveFav, favorites }) {
  let token = sessionStorage.getItem("token");

  const endPoint =
    "https://api.themoviedb.org/3/discover/movie?api_key=a0f3bb61ecf1b015b1381fecd6742e7b&language=es-ES&page=1";

  const [moviesList, setMoviesList] = useState([]);


  const getApiData = () => {
    axios
      .get(endPoint)
      /* LLamado solo del array con datos de las peliculas */
      .then((response) => {
        const apiData = response.data;
        setMoviesList(apiData.results);
      })
      .catch((error) => {
        swal("Hubo un error intenta mas tarde");
      });
  };


  useEffect(getApiData, [setMoviesList]);

  return (
    <>
      {/* Proteccion de ruta con token */}
      {!token && <Navigate to={"/"} />}
      {/* estructura basica  */}
      <div className="row my-5 ">
        {moviesList.map((movie, idx) => {
          return (
            <div className="col-3 p-0 d-flex justify-content-center"  key={idx}>
              <div className="card mb-4 text-center card-size">
                <button
                  onClick={addOrRemoveFav}
                  className="favorite-btn"
                  data-movieID={movie.id}
                >
                  <HeartIcon/>
                </button>
                <img
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  className="img-fluid-top"
                  alt="poster_image"
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">
                    {movie.overview.substring(0, 100)}...
                  </p>
                  <Link
                    to={`/detalle?movieID=${movie.id}`}
                    className="btn btn-secondary"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Listado;
