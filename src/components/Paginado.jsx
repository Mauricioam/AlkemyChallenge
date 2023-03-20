import { useContext } from "react";
import { SearchContext } from "../App";

function Paginado({ page, setPage }) {
  const provider = useContext(SearchContext);
  console.log(provider);
  const incrementPage = () => {
    if(page  < provider.moviesFound.results > 1 ? provider.moviesFound.pages.totalPages : provider.moviesList.pages.totalPages){
      setPage((prev) => prev + 1) 
    } else {
      return
    }
  }

  const decrementPage = () => {
    if(page  > 1){
      setPage((prev) => prev - 1) 
    } else {
      return
    }
  }

  return (
    <div className="my-5">
      <ul className="main-container  pagination justify-content-center">
        <li className="page-item">
          <a className={`page-link ${page <= 1 ? "invisible":""}`} onClick={decrementPage} tabindex="-1">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link">{page}</a>
        </li>

        <li className="page-item">
          <a className="page-link " onClick={incrementPage}>
            {" "}
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Paginado;
