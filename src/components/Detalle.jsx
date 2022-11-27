import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import swal from "@sweetalert/with-react";

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
      {!detail && <p>Cargando...</p>}
      {detail && (
        <>
      <h5 className="text-center my-3">Título: {detail.name ? detail.name : detail.original_title}</h5>
      <div className=" row">
        <div className="col-sm-4 text-center mb-3">
            <img src={`https://image.tmdb.org/t/p/w185${detail.poster_path}`} className="img-fluid" alt="poster_image"/>
        </div>
        <div className="col-sm-8">
          <h4>Reseña:</h4>
          <p>{detail.overview}</p>
          <h5>Rating: <span>{detail.vote_average}</span></h5>
          <h5>Generos:
            <ul style={{ listStyle:"none"}}>
             {detail.genres?.map((genero,idx) => (
                <li key={idx}>{genero.name}</li>
          ))}
            </ul> 
          </h5>

       
        </div>
      </div>
      </>

      )} 
    </>
  );
}

export default Detalle;
