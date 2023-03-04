import swal from "@sweetalert/with-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import { SearchContext } from "./Layout";

function Buscador() {
  const navigate = useNavigate();
  const provider = useContext(SearchContext)
 
  const submmitHandler = (e) => {
    e.preventDefault();
    if (provider.error) {
      swal(<h4 className="text-white">{provider.error}</h4>, {
        className: "sweet-alert-search",
        button: true,
      });
    } else {
      e.currentTarget.keyword.value = "";
      navigate(`/resultados?keyword=${provider.search}`);
    }
  };

  const handleChangeInput = (e) => {
    const keywordSearch = e.target.value;
    provider.setSearch(keywordSearch);
  };

  return (
    <div>
      <form className="d-flex" onSubmit={submmitHandler}>
        <div>
          <input
            onChange={handleChangeInput}
            className=" my-2 form-control"
            value={provider.search}
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
