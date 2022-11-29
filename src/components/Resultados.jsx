import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import swal from "@sweetalert/with-react";
import "../css/components/favoriteBtn.css"

function Resultados ({addOrRemoveFav}){

  let token = sessionStorage.getItem("token");

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
        {!token && <Navigate to={"/"} />}
           <h2 className="my-4">Buscaste: {keyword}</h2>
         <div className="row my-5">
        {resultado.map((movie,idx) => {
          return (
            <>
            <div className="col-3" key={idx}>
            <div className="card mx-2 mb-3">
            <button
                  onClick={addOrRemoveFav}
                  className="favorite-btn"
                  data-movieID={movie.id}
                >

                
           {/*        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill={"red"}
                    class="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                  </svg> */}
                </button>
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