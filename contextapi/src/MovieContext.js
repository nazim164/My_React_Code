import React,{useState,createContext} from "react";

export const MovieContext=createContext()
export const MovieProvider=({children})=>{
    const[movies,setMovies]=useState([
        {
            name:"Harry Porter",
            price:"$10",
            id:"123"

        },

        {
            name:"Fast & Furious",
            price:"$10",
            id:"456"
        

        },

        {
            name:"Lucifer",
            price:"$10",
            id:"789"
  

        },
    ])
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {children}    
        </MovieContext.Provider>
    )
}