import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import swal from "@sweetalert/with-react";
import Cargando from "./Cargando";

function Detalle() {
  const [detail, setDetail] = useState();

  let token = sessionStorage.getItem("token");

  let query = new URLSearchParams(window.location.search);
  /* ID que mandamos por query */
  let movieID = query.get("movieID");

  let endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=a0f3bb61ecf1b015b1381fecd6742e7b&language=es-ES`;

  const getApiData = () => {
    axios
      .get(endPoint)
      /* LLamado solo del array con datos del detalle de peliculas */
      .then((response) => {
        const apiData = response.data;
        setDetail(apiData);
      })
      .catch((error) => {
        swal("Hubo un error intenta mas tarde");
      });
  };

  useEffect(getApiData, [setDetail]);

  return (
    <>
      {!token && <Navigate to={"/"} />}
      {!detail && <Cargando/>}
      {detail && (
        <>
      <div className=" detail-container container text-white">
        <div className="row py-4">
        <div className="col- col-md-4  d-flex align-items-center justify-content-center p-0">
            <img src={`https://image.tmdb.org/t/p/w185${detail.poster_path}`}  alt="poster_image"/>
        </div>
        <div className="detail-card col- col-md-7 my-sm-4 " >
        <h5 className="text-center my-3">Título: {detail.name ? detail.name : detail.original_title}</h5>
          <h4>Reseña:</h4>
          <p>{detail.overview}</p>
          <h5>Rating: <span>{detail.vote_average}</span></h5>
          <h5>Generos:</h5><span>{detail.genres?.map((genero,idx) => <p key={idx}>{genero.name}</p>)}</span>
      
          </div>
          </div>
      </div>
      </>

      )} 
    </>
  );
}

export default Detalle;
