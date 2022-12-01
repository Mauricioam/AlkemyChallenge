import { Routes ,Route} from "react-router-dom"
import Login from "./components/Login";
import Listado from "./components/Listado.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle  from "./components/Detalle";
import Resultados from "./components/Resultados";
import Favoritos from "./components/Favoritos";
import "./css/main.css"

function App() {


  

  return (
 <>
<div className="container-fluid p-0">
 <Header/>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="/listado" element={<Listado />}/>
      <Route path="/detalle" element={<Detalle/>}/>
      <Route path="/resultados" element={<Resultados  />}/>
      <Route path="/favoritos" element={<Favoritos/>}/>
    </Routes>
    <Footer/>
    </div>
 </>
  );
}

export default App;
