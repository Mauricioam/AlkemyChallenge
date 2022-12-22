import swal from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";


function Logout(){

    const navigate = useNavigate()
    
    const handleLogout = (e) =>  {
        e.preventDefault(e)
        sessionStorage.clear();
        swal(<h4 className="text-white">Gracias por visitar AlkeFlix</h4>,{
            className:"sweet-alert",
            button:false,
            timer:3000
          });
          navigate("/")
    }

    return (
        <>
                
        <button className="btn btn-warning my-2 ms-2" onClick={handleLogout}>Salir</button>
        </>
    )
};

export default Logout;