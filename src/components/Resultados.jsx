import { useContext } from "react";
import Paginado from "./Paginado";
import { SearchContext } from "../App";
import Listado from "./Listado";
import NoResults from "./NoResults";

function Resultados() {
  const provider = useContext(SearchContext);
  let keyword = sessionStorage.getItem("keyword");

  return (
    <div className="home-container">
      <h2 className="p-3 text-white">Buscaste: {keyword}</h2>
      <div className="row my-5" style={{ minHeight: "80vh", width: "100%" }}>
        {provider.moviesFound.results?.length > 1 ? (
          <Listado movies={provider.moviesFound.results} />
         
        ) : 
          <NoResults/>
        }
          <Paginado setPage={provider.setPage} page={provider.page}/>
      </div>
    </div>
  );
}

export default Resultados;
