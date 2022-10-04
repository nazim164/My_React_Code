import React from 'react'
import "./HomePage.css"

const HomePage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <h1>!!!!!!! Log In SuccessFully !!!!!</h1>
            <div className="button" onClick={()=>setLoginUser({})}>
                Logout
            </div>
           
        </div>
    )
}

export default HomePage
