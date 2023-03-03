import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import Header from "./Header";



function Resultados (){



    return (
        <div className="home-container">
     
           <h2 className="p-3 text-white">Buscaste: Búsqueda</h2>
         <div className="row my-5" style={{minHeight:"80vh",width:"100%"}}>
          
       {/*  {resultado.map((movie,idx) => {
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
        })} */}
      {/*   <Paginado page={page} setPage={setPage}/> */}
      </div>

        </div>
    )
};


export default Resultados;