import { Routes ,Route} from "react-router-dom"
import { createContext, lazy, Suspense } from "react";
import Footer from "./components/Footer";
import "./css/main.css";
import { Private_Routes } from "./routes";
import Loader from "./components/Loader";
import AuthGuard from "./components/AuthGuard";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import { useSearch } from "./hooks/useSearch";
import { useMovies } from "./hooks/useMovies";
import Layout from "./components/Layout";
import Home from "./pages/Home";
const Detail = lazy(()=> import("./components/Detalle"));
const Favorites = lazy(()=> import("./pages/Favorites"));
const SearchResults = lazy(()=> import("./pages/SearchResults"));

export const SearchContext = createContext(null);

function App() {
  const { search, setSearch, error } = useSearch();
  const { getSearchResult, moviesFound} = useMovies()
  return (
 <>
<div className="home-container container-fluid p-0">
      <SearchContext.Provider value={{search,setSearch,error,getSearchResult,moviesFound}}>
      <Suspense fallback={<Loader/>}>
    <Routes>
      <Route exact path="/" element={<LoginPage/>}/>
      <Route element={<AuthGuard/>}>
      <Route path={Private_Routes.LISTADO} element={<Layout><Home/></Layout>}/>
      <Route path={Private_Routes.DETALLE} element={<Layout><Detail/></Layout>}/>
      <Route path={Private_Routes.RESULTADOS} element={<Layout><SearchResults/></Layout>}/>
      <Route path={Private_Routes.FAVORITOS} element={<Layout><Favorites/></Layout>}/>
      </Route>
    </Routes>
      </Suspense>
      </SearchContext.Provider>
    <Footer/>
    </div>
 </>
  );
}

export default App;
