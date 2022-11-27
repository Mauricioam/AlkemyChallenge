import { useEffect, useState } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";

function Resultados (){

    const [resultado , setResultado] = useState([]);

    let query = new URLSearchParams(window.location.search);
    /* que mandamos por query */
    let keyword = query.get("keyword");
        

    let endPoint = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=a0f3bb61ecf1b015b1381fecd6742e7b&language=es-ES`

    const getApiData = () => {
        axios
          .get(endPoint)
          /* LLamado solo del array con datos del detalle de peliculas */
          .then((response) => {
            const apiData = response.data;
            setResultado(apiData.results);
          })
          .catch((error) => {
            swal("Hubo un error intenta mas tarde");
          });
      };

    useEffect(getApiData)
    console.log(resultado);

    return (
        <>
           <h2 className="my-4">Buscaste: {keyword}</h2>
         <div className="row my-5">
        {resultado.map((movie,idx) => {
          return (
            <>
            <div className="col-3" key={idx}>
            <div className="card mx-2 mb-3">
              <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="poster_image"/>
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                {movie.overview.substring(0,100)}...
                </p>
              </div>
            </div>
            </div>
            </>
          )
        })}
   
      </div>
        </>
    )
};


export default Resultados;