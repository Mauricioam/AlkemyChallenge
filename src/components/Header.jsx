import { Link } from "react-router-dom";
import Buscador from "./Buscador";

function Header() {
  return (
    <>
      <header className="header-container container-fluid ">
        <nav className="d-flex flex-md-row flex-column align-items-center justify-content-md-between justify-content-center ">
          <div>
            <ul
              className="links-style d-flex flex-md-row flex-column mb-md-0 mb-3"
              
            >
              <li>
                <Link
                  to={"/"}
                  className="btn-link text-white fw-bold fz-5 me-md-5"
             
                >
                  AlkeFlix
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/listado"}
            
                >
                  Listado
                </Link>
              </li>
              <li>
                <Link
                  to={"/favoritos"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Favoritos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Buscador />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

