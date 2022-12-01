function Paginado ({page,setPage}){


    const getNextPage = () => {
       setPage(page + 1);
       console.log("sgt")
    } 
    const getPrevPage = () => {
        if(page > 1){
            setPage(page - 1);
        }
    } 


    return(
        <>
        <div className="container d-flex justify-content-evenly w-25 my-5">
            <a  onClick={getPrevPage}>{`<< Atras`}</a>
            <p>{page}</p>
            <a onClick={getNextPage}>{`Siguiente >>`}</a>
        </div>
        </>
    )
};

export default Paginado;