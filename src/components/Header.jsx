import { Link } from "react-router-dom";
import Buscador from "./Buscador";

function Header() {
  return (
    <>
      <header className="header-container container-fluid ">
        <nav className="d-flex flex-md-row flex-column align-items-center justify-content-md-between justify-content-center ">
          <div>
            <ul
              className="d-flex mb-md-0 mb-3"
              style={{ listStyle: "none" }}
            >
              <li>
                <Link
                  to={"/"}
                  className="btn-link text-white fw-bold fz-5"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    paddingRight: "5rem",
                  }}
                >
                  AlkeFlix
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    paddingRight: "2rem",
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/listado"}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    paddingRight: "2rem",
                  }}
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

