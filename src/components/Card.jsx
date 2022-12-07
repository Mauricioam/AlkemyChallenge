import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function Card({ idx, id, poster, title, overview ,moviesList }) {

const [heart,setHeart] = useState();


  const [favorites, setFavorites] = useState([]);


  /* Aca busca si hay favoritos en local */

  const getFavorites = () => {
    const favsInLocal = JSON.parse(localStorage.getItem("favs")) ;
    if (favsInLocal) {
      setFavorites(favsInLocal);
    let heartInFavs = favsInLocal.filter(item => item.id == id);
      if(heartInFavs.length){
        setHeart(true)
      }
   
    }
  }   

/* ejecuta esa funcion para ver  */
   useEffect(getFavorites, [setFavorites]); 

const addOrRemoveFav = (e) => {
    
      let favMovies = localStorage.getItem("favs");
    
      let tempFavMovies;
    
      if (favMovies === null) {
        tempFavMovies = [];
      } else {
        tempFavMovies = JSON.parse(favMovies);
      }
    
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector("img").src;
    const movieId = btn.dataset.movieid;
    const movieFav = {
      imgURL,
      id: movieId,
    };
  
    let movieIsinArray = tempFavMovies.find(
      (movie) => movie.id == movieFav.id
    );

    if (!movieIsinArray) {
      tempFavMovies.push(movieFav)
    
      localStorage.setItem("favs", JSON.stringify(tempFavMovies));
      console.log(tempFavMovies,"movies add")
      setFavorites(tempFavMovies);
      setHeart(true)
     
    } else {
      let moviesLeft = tempFavMovies.filter(
        (movie) => movie.id !== movieFav.id
      );
    
      localStorage.setItem("favs", JSON.stringify(moviesLeft));
      setFavorites(moviesLeft);
      setHeart(false)
   
    }
  };


  return (
    <>
      <div className=" col-sm-6 col-md-3 col-12 d-flex justify-content-center p-0" key={idx}>
        <div className="card mb-4" >
         
          <button
            onClick={addOrRemoveFav}
            className="favorite-btn"
            data-movieid={id}
          >
          
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill={heart ? "red" : "currentColor"}
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </button>
          <div className="container-fluid p-0">
          <Link to={`/detalle?movieID=${id}`}>
            
          <img
            src={`https://image.tmdb.org/t/p/w185${poster}`}
            alt="poster_image"
            className="poster-img"
            />
            </Link>
            </div>
       
        </div>
      </div>
    </>
  );
}

export default Card;
