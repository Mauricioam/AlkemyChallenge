import { Link } from "react-router-dom";
import Buscador from "./Buscador";


function Header() {
  return (
    <>
      <header className="header-container container-fluid p-0">
        <div >
      <nav className="d-flex justify-content-between ">
      <ul className="d-flex align-items-center mb-0" style={{listStyle:"none"}}>
        <li>
        <Link to={"/"} className="btn-link text-white fw-bold" style={{textDecoration:"none",color:"inherit",paddingRight:"5rem"}} >AlkeFlix</Link>
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


