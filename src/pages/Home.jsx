import React from 'react'
import Card from '../components/Card';
import Layout from '../components/Layout'
import { useMovies } from '../hooks/useMovies';
import SearchResults from './SearchResults';

function Listado({movies}) {
  return (
    <>
      {/* estructura basica  */}
      <div>
      <div className="row py-5 d-flex justify-content-center" style={{
        width:"100%"
      }}>
        { movies.map((movie) => {
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



function Home() {

const { moviesList, moviesFound } = useMovies();
  console.log(moviesFound,"home")
  return (
    <div>
        <Layout>
        {moviesList ? <Listado movies={moviesList}/> : <SearchResults/>}
        </Layout>
    </div>
  )
}

export default Home;