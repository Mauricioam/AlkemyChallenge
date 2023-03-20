import Card from "./Card";

 function Listado({movies}) {
 
    return (
      <>
        {/* estructura basica  */}
        <div>
        <div className="row py-5 d-flex justify-content-center" style={{
          width:"100%"
        }}>
          { movies?.map((movie) => {
            return (
             <Card
             key={movie.id}
             id={movie.id}
             poster={movie.image}
             title={movie.title}
             overview={movie.overview}
             />
            );
          })}
        </div>
        </div>
      </>
    );
  };
  
  export default Listado;