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
    const title = parent.querySelector("h5").innerText;
    const overview = parent.querySelector("p").innerText;
    const movieId = btn.dataset.movieid;
    const movieFav = {
      imgURL,
      title,
      overview,
      id: movieId,
    };
    console.log(movieFav)
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
      <div className=" col-sm-6 col-md-3 col-12 d-flex justify-content-center" key={idx}>
        <div className="card mb-4" >
          <div className="card-body p-0">
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
          <img
            src={`https://image.tmdb.org/t/p/w185${poster}`}
            className=" poster-img img-fluid-top"
            alt="poster_image"
            />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center p-3">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{overview.substring(0, 40)}...</p>
            <Link to={`/detalle?movieID=${id}`} className="detail-button btn btn-secondary">
              Detail
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
