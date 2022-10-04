import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import Register from './Register';


const DynaMulDrop = () => {



    const [changecity, setchangecity] = useState([""]);
    const [changestate, setchangestate] = useState([""]);
    const [state, setstate] = useState([])
    const [city, setcity] = useState([])
    const [zip, setzip] = useState([])


    const [z, setz] = useState([""]);

    const [filtdata, setfiltdata] = useState([]);
    const [d, setd] = useState([])
    const dfserver = () => {
        axios.get('http://localhost:8000/display/sub')
            .then((res) => {
                const dfromserver = res.data
                console.log(dfromserver)
                setd(dfromserver)
            }
            )
    }
    const ct = (e) => {
        // console.log(e.target.value)
        setchangecity(e.target.value)
    }
    const st = (e) => {
        // console.log(e.target.value)
        setchangestate(e.target.value)

    }
    const zp = (e) => {
        setz(e.target.value)

    }
    useEffect(() => {
        dfserver()
    }, [])



    const searchfun = () => {

        const getUniq = (arr) => (
            [...new Set(arr)]
        )


        const filtstate = d.map((d) => { return d.state })
        // const getUniqState = (arr) => (
        //     [...new Set(arr)]
        // )

        console.log(filtstate)
        const s = getUniq(filtstate)
        setstate(s)
        const fildata = d.filter((data) => { return data.state === changestate })
        const filtcity = fildata.map((d) => { return d.city })
        // const getUniqcity = (arr) => (
        //     [...new Set(arr)]
        // )
        setcity(getUniq(filtcity))

        const fillcity = fildata.filter((data) => { return data.city === changecity })
        const filtzip = fillcity.map((d) => { return d.zip })
        // const getUniqzip = (arr) => (
        //     [...new Set(arr)]
        // )
        setzip(getUniq(filtzip))
        const finel = fillcity.filter((data) => { return data.zip === z })
        setfiltdata(finel)

        // console.log(fildata)
        // console.log(fillcity)
        // console.log(z)

    }


    return (
        <div className="container" >
            <div className='row justify-content-md-center ' style={{ border: "15px solid white" }}>
                <center><h3>SEARCH </h3></center>
                <div className="col ">
                    <select className="form-select sm" onChange={st} name="State" id="">
                        <option>select</option>
                        {state.map((data) => <option key={data} value={data}>{data}</option>)}
                    </select><br />
                </div>

                {changestate === "" ? "  " :
                    <div className="col">
                        <select className="form-select sm" onChange={ct} name="City" id="">
                            <option>select</option>

                            {city.map((data) => <option key={data} value={data}>{data}</option>)}
                        </select>
                    </div>
                }
                {changecity === "" ? "  " :
                    <div className="col">
                        <select className="form-select sm" onChange={zp} name="zip" id="">
                            <option>select</option>

                            {zip.map((data) => <option key={data} value={data}>{data}</option>)}
                        </select>
                    </div>
                }
                <div >
                    <center>
                        <input style={{ margin: "15px", width: "20%" }} type="button" value="Search" onClick={searchfun} /><br />
                    </center>
                </div>
            </div>
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
            )}<br />
            <div style={{ border: "10px solid white" }}>
                {/* <Register /> */}
            </div>
        </div>
    )
}

export default DynaMulDrop