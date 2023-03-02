import { Routes ,Route} from "react-router-dom"
import { lazy, Suspense } from "react";
import Footer from "./components/Footer";
import "./css/main.css";
import { Private_Routes } from "./routes";
const Home = lazy( ()=>import("./pages/Home")) ;
const Login = lazy(()=> import("./components/Login"));
const Detalle = lazy(()=> import("./components/Detalle"));
const Favoritos = lazy(()=> import("./components/Favoritos"));
const Resultados = lazy(()=> import("./components/Resultados"));


/* poner lazy loading lo q no se usa al abrir la pagina */

function App() {
  return (
 <>
<div className="home-container container-fluid p-0">
      <Suspense fallback={<h1 style={{fontSize:"15rem",textAlign:"center",color:"whitesmoke"}}>Cargando</h1>}>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path={Private_Routes.LISTADO} element={<Home/>}/>
      <Route path={Private_Routes.DETALLE} element={<Detalle/>}/>
      <Route path={Private_Routes.RESULTADOS} element={<Resultados  />}/>
      <Route path={Private_Routes.FAVORITOS} element={<Favoritos/>}/>
    </Routes>
      </Suspense>
    <Footer/>
    </div>
 </>
  );
}

export default App;
