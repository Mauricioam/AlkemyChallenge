import React from 'react'
import Listado from '../components/Listado';
import { useMovies } from '../hooks/useMovies';




function Home() {


const { moviesList } = useMovies();

  return (
    <div>
         <Listado movies={moviesList}/> 
    </div>
  )
}

export default Home;