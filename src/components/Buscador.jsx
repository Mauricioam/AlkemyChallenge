import swal from "@sweetalert/with-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../App";
import { Private_Routes } from "../routes";


function Buscador() {
  const navigate = useNavigate()
  const provider = useContext(SearchContext)

  /* ver como reiniciar el input */


  const submmitHandler = (e) => {
    e.preventDefault();
    if (provider.error) {
      swal(<h4 className="text-white">{provider.error}</h4>, {
        className: "sweet-alert-search",
        button: true,
      });
    } else {
      const keyword = provider.search
      provider.getSearchResult(keyword)
      sessionStorage.setItem("keyword",keyword);
      navigate(Private_Routes.RESULTADOS)
  
    }
  };

  const handleChangeInput = (e) => {
    const keywordSearch = e.target.value;
    provider.setSearch(keywordSearch);
  };

  return (
    <div>
      <form   className="d-flex" onSubmit={submmitHandler}>
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
