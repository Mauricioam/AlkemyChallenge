import { Link } from "react-router-dom";
import Buscador from "./Buscador";

function Header() {
  return (
    <>
      <header className="header-container container-fluid pb-sm-0">
        <nav className="collapse d-flex justify-content-between ">
          <div className="d-flex col-md-8 col-sm-12 col-12">
            <ul
              className="d-flex align-items-center mb-0"
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
          <div className="col-md-4 col-sm-12 col-12">
            <Buscador />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

<nav class="navbar navbar-expand-lg">
  <div class="container">
    <a href="#" class="col-md-4 navbar-brand">
      Bootstap Tutorial
    </a>
    <div className="col-md-8" id="navmenu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a href="#products" class="nav-link">
            Products
          </a>
        </li>
        <li class="nav-item">
          <a href="#services" class="nav-link">
            Services
          </a>
        </li>
        <li class="nav-item">
          <a href="#contact" class="nav-link">
            Contact
          </a>
        </li>
        <li class="nav-item">
          <Buscador />
        </li>
      </ul>
    </div>
  </div>
</nav>;
