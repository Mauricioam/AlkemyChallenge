import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";



function Favoritos(){

    let token = sessionStorage.getItem("token");

    const [favorites , setFavorites] = useState([]);

    let favsInLocal = JSON.parse(localStorage.getItem("favs"));

    const getFavsInLocal = () => {
      
      if(favsInLocal){
        setFavorites(favsInLocal);
      }

    }
    

    useEffect(getFavsInLocal,[setFavorites]);

    
    const addOrRemoveFav = (e) => {
      e.preventDefault();
      let id = e.currentTarget.dataset.movieid;
      console.log(favsInLocal,"local");
      let moviesLeft = favsInLocal.filter(m => m.id !== id )
      localStorage.setItem("favs",JSON.stringify(moviesLeft));
      setFavorites(moviesLeft);
      
    };

    console.log()


    return (
        <>
         {!token && <Navigate to="/" /> }
        {!favorites.length && <><div className="container-fluid"><p className="text-white fw-bold py-3">No tienes agregado favoritos.</p></div></>}
        <div style={{
        minHeight:"90vh"
        }}>
        <div className=" row py-5 d-flex justify-content-center" >
        {favorites.map((movie,idx) => {
          return (
            <div className="col-md-3 col-sm-6 d-flex justify-content-center" key={idx}>
              <div className="mb-md-3 mb-sm-4 mb-4 card poster-container">
              <button onClick={addOrRemoveFav} className=" favorite-btn" data-movieID={movie.id}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
               </svg>
              </button>
              <img className="poster-img" src={movie.imgURL}  alt="poster_image"/>
              </div>
            </div>

          )
        })}
   
      </div> 
      </div>
        </>
    )
};

export default Favoritos;