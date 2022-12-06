import axios from "axios";
import swal from "@sweetalert/with-react";
import { useNavigate , Navigate } from "react-router-dom";
import "../css/components/Login/login.css";


function Login() {
  const navigate = useNavigate();

  let token = sessionStorage.getItem("token");

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    if (email === "" || password === "") {
      swal(<h2>Los campos no pueden quedar vacios</h2>);
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      swal("Escriba direccion valida");
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      swal("Credenciales invalidas");
    }
   
     /* harcodeo sino no funciona en el deploy */
  
        swal(<h4 className="text-white">Ingresaste correctamente</h4>,{
          className:"sweet-alert",
          button:false,
          timer:3000
        });
        const tokenRecibido = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE";
        sessionStorage.setItem("token", tokenRecibido);
        navigate("/listado");
    
  };

  return (
    <>
    {token && <Navigate to={"/listado"} /> }
      
      <div className="login-container  d-flex justify-content-md-end justify-content-center  align-items-center " >
        <div className="login-card border border-dark rounded  p-3">
          <h1 className="display-6 text-center mb-4">Login</h1>
          <form onSubmit={submitHandler}>
            <div className="d-flex flex-column">
              <label className="mb-2">
                <span className="fw-bold">Correo</span>
              </label>
              <input className="mb-3" type="text" name="email" />
              <label className="mb-2">
                <span className="fw-bold">Contraseña</span>
              </label>
              <input type="password" name="password" />
              <button className=" btn  btn-success my-4 " type="submit">
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
