import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import swal from "@sweetalert/with-react";
import Card from "./Card";


function Resultados (){

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
            swal("No pudimos encontrar lo que buscabas, intenta nuevamente");
          });
      };

    useEffect(getApiData,[setResultado])
      console.log(resultado)

    return (
        <>
        {!token && <Navigate to={"/"} />}
           <h2 className="my-4">Buscaste: {keyword}</h2>
         <div className="row my-5" style={{minHeight:"80vh"}}>
          
        {resultado.map((movie,idx) => {
          return (
            <>
               <Card
           key={idx}
           idx={idx}
           id={movie.id}
           poster={movie.poster_path}
           title={movie.title}
           overview={movie.overview}
          />
            </>
          )
        })}
   
      </div>
        </>
    )
};


export default Resultados;