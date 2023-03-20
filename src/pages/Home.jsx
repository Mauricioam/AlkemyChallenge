import React, { useContext } from 'react'
import { SearchContext } from '../App';
import Listado from '../components/Listado';
import Loader from '../components/Loader';
import Paginado from '../components/Paginado';




function Home() {
  const provider = useContext(SearchContext);

  return (
    <div style={{minHeight:"100vh"}}>
      {provider.moviesList.results?.length > 1 ? <Listado movies={provider.moviesList.results}/> : <Loader/> }
      <Paginado setPage={provider.setPage} page={provider.page}/>
    </div>
  )
}

export default Home;