function Paginado ({page,setPage}){


    

    return(
        <>
        <div className=" my-5">
    <ul class="main-container  pagination justify-content-center">
    <li class= "page-item">
      <a class="page-link"  tabindex="-1"><span aria-hidden="true">&laquo;</span></a>
    </li>
    <li class="page-item active">
      <a class="page-link">{page}</a>
    </li>
   
    <li class="page-item">
      <a class="page-link"> <span aria-hidden="true">&raquo;</span></a>
    </li>
  </ul>
  </div> 
        </>
    )
};

export default Paginado;
