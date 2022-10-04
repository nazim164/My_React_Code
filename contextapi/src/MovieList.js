import React,{useContext, useState} from 'react'

import { MovieContext } from './MovieContext'

const MovieList = () => {
   const [value]=useContext(MovieContext);
//    console.log(value)
    return (
        <div>
            <center> {/* <h1>{value}</h1> */}
            {value.map(movie =>(
            //  <Movie key={movie.id} name={movie.name} price={movie.price}/>
            <div key={movie.id}>
                <h3>{movie.name}</h3>
            <h4>{movie.price}</h4>
            </div>
            ))}</center>
           
        </div>
    )
}

export default MovieList
