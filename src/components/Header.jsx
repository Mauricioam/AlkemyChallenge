import { Link } from "react-router-dom";
import Buscador from "./Buscador";
import Logout from "./Logout";
import { Private_Routes } from "../routes";
import { useLocation } from 'react-router-dom';

const headerItems = [{
  title:"AlkeFlix",
  linkTo:"/",
  style:"main-link btn-link pe-sm-2   fw-bold fz-5 me-md-5"
},
{
  title:"Inicio",
  linkTo:"/",
  style:"secondary-link"
},
{
  title:"Favoritos",
  linkTo:Private_Routes.FAVORITOS,
  style:"secondary-link"
}]


function Header() {

  return (
    <>
      <header className="header-container container-fluid ">
        <nav className="d-flex flex-md-row flex-sm-row flex-column align-items-md-center align-items-center justify-content-sm-between justify-content-md-between ">
          <div>
            <ul
              className="links-style d-flex flex-sm-row  flex-md-row flex-column mb-md-0  mb-sm-0 mb-3  p-0"
            >
              {headerItems.map((item,idx)=>(
                <li key={idx}>
                  <Link
                  to={item.linkTo}
                  className={item.style}
                  >
                  {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="d-flex">
            <Buscador />
            <Logout/>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

