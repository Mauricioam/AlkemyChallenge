import { Routes ,Route} from "react-router-dom"
import { lazy, Suspense } from "react";
import Footer from "./components/Footer";
import "./css/main.css";
import { Private_Routes } from "./routes";
import Loader from "./components/Loader";
import AuthGuard from "./components/AuthGuard";
import LoginPage from "./pages/LoginPage";

const Home = lazy( ()=>import("./pages/Home")) ;
const Detail = lazy(()=> import("./components/Detalle"));
const Favorites = lazy(()=> import("./pages/Favorites"));
const SearchResults = lazy(()=> import("./pages/SearchResults"));


/* poner lazy loading lo q no se usa al abrir la pagina */

function App() {
  return (
 <>
<div className="home-container container-fluid p-0">
      <Suspense fallback={<Loader/>}>
    <Routes>
      <Route exact path="/" element={<LoginPage/>}/>
      <Route element={<AuthGuard/>}>
      <Route path={Private_Routes.LISTADO} element={<Home/>}/>
      <Route path={Private_Routes.DETALLE} element={<Detail/>}/>
      <Route path={Private_Routes.RESULTADOS} element={<SearchResults  />}/>
      <Route path={Private_Routes.FAVORITOS} element={<Favorites/>}/>
      </Route>
    </Routes>
      </Suspense>
    <Footer/>
    </div>
 </>
  );
}

export default App;
