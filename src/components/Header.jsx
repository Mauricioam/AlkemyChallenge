import { Link } from "react-router-dom";
import "../css/Links_Decoration.css";
import Buscador from "./Buscador";


function Header() {
  return (
    <>
      <header>
        <div className="container-fluid m-0 p-0">
      <nav className="bg-secondary text-white d-flex align-items-center justify-content-between">
      <ul className="d-flex align-items-center mb-0" style={{listStyle:"none"}}>
        <li>
        <Link to={"/"} className="btn-links" style={{textDecoration:"none",color:"inherit",paddingRight:"2rem"}} >AlkemyChallenge</Link>
        </li>
        <li>
        <Link to={"/"} style={{textDecoration:"none",color:"inherit",paddingRight:"2rem"}}>Home</Link>
        </li>
        <li>
        <Link to={"/listado"} style={{textDecoration:"none",color:"inherit",paddingRight:"2rem"}}>Listado</Link>
        </li>
        <li>
        <Link to={"/favoritos"} style={{textDecoration:"none",color:"inherit"}}>Favoritos</Link>
        </li>
       </ul>
      <Buscador/>
     </nav>
      </div>

      </header>
    </>
  );
}

export default Header;

<header>
  <nav>
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/listado"}>Listado</Link>
      </li>
    </ul>
  </nav>
</header>;
