import React, { useState, useEffect,useRef } from 'react'
import axios from 'axios';
// import SearchIcon from '@material-ui/icons/Search';
import Search from '@material-ui/icons/Search';

const SearchZip = () => {
    let ins=useRef()
    // let zip = []
    
    const [d,setd]=useState([])
    const [filtdata,setfiltdata]=useState([])
    const [z, setz] = useState("");

    const dfserver = () => {
        axios.get('http://localhost:5000/student/all')
            .then((res) => {
                const dfromserver = res.data
                console.log(dfromserver)
                setd(dfromserver)
            }
            )
    }
    useEffect(() => {
        dfserver()
    }, [])
    // const fillzip = d.filter((data) => { return data.zip === z })
    // setchangezip(fillzip)
    // setfiltdata(fillzip)

    const zp = () =>{
        setz(ins.current.value)
        const fillzip = d.filter((data) => { return data.zip === z })
        setfiltdata(fillzip)
    }
    return (
        <div className="container" style={{border:"15px solid white"}}>
            <center> <h3>Search Using Zip</h3>
            <div style={{width:"60%"}} class="input-group input-group-sm mb-3">
                
                
                <input type="text" ref={ins} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                <span class="input-group-text" id="inputGroup-sizing-sm"><button onClick={zp} className="danger"><Search/></button></span>
            </div>
            <br />
            </center>
            {filtdata.map((d) =>
                <div className="container" key={d._id}>
                    <div className="card" style={{ background: "brown", margin: "5px", textAlign: "center" }}>
                        <div className="card-body">
                            <h5 className="card-title">{d.first_name} {d.last_name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">City :{d.city} State :{d.state} </h6>
                            <h6>zip :{d.zip}</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div> 
                </div>
                //    d._id)
            )}
            {/* <h1>{z}</h1> */}
        </div>
    )
}

export default SearchZip