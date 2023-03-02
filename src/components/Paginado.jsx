function Paginado ({page,setPage}){


    const getNextPage = () => {
       setPage(page + 1);
     
    } 
    const getPrevPage = () => {
        if(page > 1){
            setPage(page - 1);
        }
    } 
 

    return(
        <>
        <div className=" my-5">
    <ul class="main-container  pagination justify-content-center">
    <li class= "page-item">
      <a class="page-link" onClick={getPrevPage} tabindex="-1"><span aria-hidden="true">&laquo;</span></a>
    </li>
    <li class="page-item active">
      <a class="page-link">{page}</a>
    </li>
   
    <li class="page-item">
      <a class="page-link"onClick={getNextPage}> <span aria-hidden="true">&raquo;</span></a>
    </li>
  </ul>
  </div> 
        </>
    )
};

export default Paginado;
