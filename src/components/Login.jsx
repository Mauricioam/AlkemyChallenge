import axios from "axios";
import swal from "@sweetalert/with-react";
import { useNavigate , Navigate } from "react-router-dom";

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
    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        swal(<h2>Perfecto, ingresaste correctamente</h2>);
        const tokenRecibido = res.data.token;
        sessionStorage.setItem("token", tokenRecibido);
        navigate("/listado");
      });
  };

  return (
    <>
    {token && <Navigate to={"/listado"} /> }
      <div className="d-flex justify-content-center">
        <div className="my-2">
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
