import { Navigate } from "react-router-dom";
import "../css/components/card.css"
function Favoritos({addOrRemoveFav , favorites}){

    let token = sessionStorage.getItem("token");


    return (
        <>
        {!token && <Navigate to="/" /> }
        {!favorites.length && <><div className="container-fluid" style={{minHeight:"60vh"}}><p className="fw-bold my-3">No tienes agregado favoritos.</p></div></>}
        <div className="row my-5">
        {favorites.map((movie,idx) => {
          return (
            <div className="col-3" key={idx}>
            <div className="card mx-2 mb-3 text-center card-size">
              <button onClick={addOrRemoveFav} className=" favorite-btn" data-movieID={movie.id}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
               </svg>

              </button>
              <img src={movie.imgURL} className="img-fluid-top" alt="poster_image"/>
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                {movie.overview.substring(0,100)}...
                </p>
              </div>
            </div>
            </div>

          )
        })}
   
      </div>
        </>
    )
};

export default Favoritos;