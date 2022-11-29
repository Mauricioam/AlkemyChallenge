import { Routes ,Route} from "react-router-dom"
import Login from "./components/Login";
import Listado from "./components/Listado.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle  from "./components/Detalle";
import Resultados from "./components/Resultados";
import Favoritos from "./components/Favoritos";
import "./css/bootstrap.min.css"
import { useEffect , useState } from "react";

function App() {

  const [favorites, setFavorites] = useState([]);

  
  


  const getFavorites = () => {
          const favsInLocal = localStorage.getItem("favs");
          if(favsInLocal){
              setFavorites(JSON.parse(favsInLocal));
          }
      
  }

  useEffect(getFavorites,[]);
  
  
  let favMovies = localStorage.getItem("favs");
  
  let tempFavMovies;
  
  if(favMovies === null){
    tempFavMovies = []
  } else {
      tempFavMovies = JSON.parse(favMovies);
    }

  
    const addOrRemoveFav = (e) => {

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector("img").src;
    const title = parent.querySelector("h5").innerText;
    const overview = parent.querySelector("p").innerText;
    const movieId = btn.dataset.movieid
    const movieFav = {
      imgURL,title,overview,
      id: movieId,
     
    }

    let movieIsinArray = tempFavMovies.find(movie => movie.id === movieFav.id)
  
    if(!movieIsinArray){
            tempFavMovies.push(movieFav)
            console.log("se agregó");
            localStorage.setItem("favs",JSON.stringify(tempFavMovies));
            setFavorites(tempFavMovies);
        
        
    } else {
      let moviesLeft = tempFavMovies.filter(movie => movie.id !== movieFav.id);
      console.log("borro")
      localStorage.setItem("favs",JSON.stringify(moviesLeft));
      setFavorites(moviesLeft)
    }

     


  }
  return (
 <>
 <Header/>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="/listado" element={<Listado favorites={favorites} addOrRemoveFav={addOrRemoveFav}/>}/>
      <Route path="/detalle" element={<Detalle/>}/>
      <Route path="/resultados" element={<Resultados addOrRemoveFav={addOrRemoveFav} />}/>
      <Route path="/favoritos" element={<Favoritos favorites={favorites } addOrRemoveFav={addOrRemoveFav}/>}/>
    </Routes>
    <Footer/>
 </>
  );
}

export default App;
