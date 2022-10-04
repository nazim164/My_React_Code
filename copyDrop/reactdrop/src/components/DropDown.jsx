import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import Register from '../components/Register';


const DropDown = () => {



    const [selectCity, setselectCity] = useState([""]);
    const [selectState, setselectState] = useState([""]);
    const [state, setstate] = useState([])
    const [city, setcity] = useState([])
    const [zip, setzip] = useState([])

    const st=useRef()
    const ci=useRef()
    const zipcode=useRef()
    const [z, setz] = useState([""]);

    const [subdata, setsubdata] = useState([]);
    const [dis, setd] = useState([])
    const backend = () => {
        axios.get('http://localhost:8000/display/sub')
            .then((res) => {
                const server = res.data
                console.log(server)
                setd(server)
            }
            )
    }
   
    useEffect(() => {
        backend()
    }, [])



    const valueSearch = () => {


        setselectState(st.current.value)
        setselectCity(ci.current.value)
        setz(zipcode.current.value)

        const getDis = (arr) => (
            [...new Set(arr)]
        )


        const filtstate = dis.map((dis) => { return dis.state })
        // const getDisState = (arr) => (
        //     [...new Set(arr)]
        // )

        console.log(filtstate)
        const s = getDis(filtstate)
        setstate(s)
        const fildata = dis.filter((data) => { return data.state === selectState })
        const filtcity = fildata.map((dis) => { return dis.city })
       
        setcity(getDis(filtcity))

        const fillcity = fildata.filter((data) => { return data.city === selectCity })
        const filtzip = fillcity.map((dis) => { return dis.zip })
       
        setzip(getDis(filtzip))
        const finel = fillcity.filter((data) => { return data.zip === z })
        setsubdata(finel)

        // console.log(finel)
      

    }

    useEffect(() => {
        valueSearch()
      
    })
    return (
        <div className="container"  >
            <div  style={{ border: "15px solid white" ,textAlign:'center',backgroundColor:'goldenrod'}} >
            
                <div className="col">
                    <select className="form-select sm" ref={st} onChange={valueSearch} name="State" id=""style={{width:'300px',padding:10}}>
                        <option>select</option>
                        {state.map((data) => <option key={data} value={data}>{data}</option>)}
                    </select>
                </div>
<br/><br/>
                {selectState === "" ? "  " :
                    <div className="col">
                        <select className="form-select sm" ref={ci} onChange={valueSearch} name="City" id="" style={{width:'300px',padding:10}}>
                            <option>select</option>

                            {city.map((data) => <option key={data} value={data}>{data}</option>)}
                        </select>
                    </div>
                }
                <br/><br/>
                {selectCity === "" ? "  " :
                    <div className="col">
                        <select className="form-select sm"ref={zipcode} onChange={valueSearch} name="zip" id=""style={{width:'300px',padding:10}}>
                            <option>select</option>

                            {zip.map((data) => <option key={data} value={data}>{data}</option>)}
                        </select>
                    </div>
                }
                <br /><br />
                <div >
                    <center>
                        {/* <input  type="button" value="Search" onClick={valueSearch}style={{width:'200px',padding:15,color:'navy',backgroundColor:'lightgreen'}} /> */}
                        
                    </center>
                </div>
            </div>
            {subdata.map((dis) =>
                <div  key={dis._id} style={{backgroundColor:'goldenrod',width:'100%'}}>
                    <div  style={{textAlign:'center',border:'2px solid black',marginLeft:500,marginRight:500}}>
                        <div >
                            <h5>{dis.first_name} {dis.last_name}</h5>
                            <h6 >City :{dis.city} State :{dis.state} </h6>
                            <h6>Pincode :{dis.zip}</h6>
                           
                        </div>
                    </div>
                </div>
               
            )}<br />


            <Register />
        </div>
    )
}

export default DropDown