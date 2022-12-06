import swal from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";


function Buscador(){

    const navigate = useNavigate();

    const submmitHandler = (e) => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value;
        if(keyword.length === 0){
            swal("Ingresa una palabra")
        }  else {
            e.currentTarget.keyword.value = ""
            navigate(`/resultados?keyword=${keyword}`)
        }
    }

    return(
        <div>
        <form className="d-flex" onSubmit={submmitHandler}>
              <div>
              <input className=" my-2 form-control" type="text" name="keyword" placeholder="Buscar..." />
              </div>
              <div>
              <button className=" btn btn-danger my-2 ms-2" type="submit">
                Buscar
              </button>
              </div>
          </form>
        </div>
    )
}

export default Buscador;