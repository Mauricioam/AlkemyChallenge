import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import swal from "@sweetalert/with-react";
import Cargando  from "./Cargando";
import  Card  from "./Card";
import Paginado from "./Paginado";


function Listado() {
  let token = sessionStorage.getItem("token");
  
  const [moviesList, setMoviesList] = useState([]);
  
  const [page , setPage] = useState(1);
  
  
  
  
  const getApiData = () => {
    
      const endPoint =
       `https://api.themoviedb.org/3/discover/movie?api_key=a0f3bb61ecf1b015b1381fecd6742e7b&language=es-ES&page=${page}` ;
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


  useEffect(getApiData, [page]);

  return (
    <>
      {/* Proteccion de ruta con token */}
      {!token && <Navigate to={"/"} />}
      {/* estructura basica  */}
      <div className="home-container">
      <div className=" row py-5 d-flex justify-content-center">
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
        <Paginado page={page} setPage={setPage}/>
      </div>
      </div>
    </>
  );
}

export default Listado;
