import React from 'react'
import MovieList from './MovieList'
import Nav from './Nav'
import AddList from './AddList'
import { MovieProvider } from './MovieContext'


const App = () => {
  return (
    <div>
   <MovieProvider>
      
      <Nav />
      <AddList/>
      <MovieList />

  </MovieProvider>
    </div>
 

  )
}

export default App

