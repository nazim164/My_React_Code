import React,{useState,useContext} from 'react'
import { MovieContext } from './MovieContext';
const AddList = () => {
    const[name,setName]=useState('');
    const[price,setPrice]=useState('');
    const[movies,setMovies]=useContext(MovieContext)

    const updatename=(e)=>{
        setName(e.target.value)
    }
    const updateprice=(e)=>{
        setPrice(e.target.value)
    }
    const addmovie=(e)=>{
        e.preventDefault()
        setMovies(preMovies=>[...preMovies,{name:name,price:price}])
    };
    return (
        <div>
            <center> <form onSubmit={addmovie } className="form">
                <label>Movies Name :</label>
                <input type="text" value={name} onChange={updatename}></input>
                <br/>    <br/>
                <label>Price :</label>
                <input type="text" value={price} onChange={updateprice}></input>
                <br/>    <br/>
                <button>Submit</button>
            </form></center>
           
        </div>
    )
}

export default AddList
