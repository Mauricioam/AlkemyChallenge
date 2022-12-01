import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import swal from "@sweetalert/with-react";
import "../css/components/favoriteBtn.css";
import "../css/components/Card/card.css";
import Cargando  from "./Cargando";
import  Card  from "./Card";


function Listado() {
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
        { moviesList.length ? moviesList.map((movie, idx) => {
          return (
           <Card
           key={idx}
           idx={idx}
           id={movie.id}
           poster={movie.poster_path}
           title={movie.title}
           overview={movie.overview}
           moviesList={moviesList}/>
          );
        }): <Cargando/>}
      </div>
    </>
  );
}

export default Listado;
