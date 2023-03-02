import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import Cargando  from "./Cargando";
import Card  from "./Card";
import Paginado from "./Paginado";
import { useMovies } from "../hooks/useMovies";


function Listado() {
  let token = sessionStorage.getItem("token");
  const [page , setPage] = useState(1);
  const { moviesList } = useMovies(page);
 

  return (
    <>
      {/* Proteccion de ruta con token */}
      {!token && <Navigate to={"/"} />}
      {/* estructura basica  */}
      <div>
      <div className="row py-5 d-flex justify-content-center" style={{
        width:"100%"
      }}>
        { moviesList.length ? moviesList.map((movie) => {
          return (
           <Card
           key={movie.id}
           id={movie.id}
           poster={movie.image}
           title={movie.title}
           overview={movie.overview}
           />
          );
        }): <Cargando/>}
        <Paginado page={page} setPage={setPage}/>
      </div>
      </div>
    </>
  );
}

export default Listado;
