import React,{useContext} from 'react'
import { MovieContext } from './MovieContext'
function Nav() {
    const [value]=useContext(MovieContext);
    return (
        <div>
            <center>   Movies List :{value.length}</center>
         
            <hr/>
        </div>
    )
}

export default Nav
