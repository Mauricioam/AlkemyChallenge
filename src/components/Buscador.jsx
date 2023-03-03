import swal from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import { useSearch } from "../hooks/useSearch";

function Buscador() {
  const navigate = useNavigate();
  const { search, setSearch, error } = useSearch();
  const { getSearchResult } = useMovies(search);

  const submmitHandler = (e) => {
    e.preventDefault();
    if (error) {
      swal(<h4 className="text-white">{error}</h4>, {
        className: "sweet-alert-search",
        button: true,
      });
    } else {
      e.currentTarget.keyword.value = "";
      navigate(`/resultados?keyword=${search}`);
      getSearchResult();
    }
  };

  const handleChangeInput = (e) => {
    const keywordSearch = e.target.value;
    setSearch(keywordSearch);
  };

  return (
    <div>
      <form className="d-flex" onSubmit={submmitHandler}>
        <div>
          <input
            onChange={handleChangeInput}
            className=" my-2 form-control"
            value={search}
            type="text"
            name="keyword"
            placeholder="Buscar..."
          />
        </div>
        <div>
          <button className=" btn btn-danger my-2 ms-2" type="submit">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Buscador;
