import React, { useRef } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import SearchZip from './SearchZip';

const useStyles = makeStyles({
    input:{
        fontSize:20,
        textAlign:'center',
        display:'flex',
        color:'navyblue',
        marginRight:200
    }
})

const Register = () => {
    const fname = useRef()
    const lname = useRef()
    const state = useRef()
    const city = useRef()
    const zip = useRef()

    //let dstate = ["", "MH", "MP", "UP"]
    // let dcity = []
    // const [changecity, setchangecity] = useState("");
    // const [changestate, setchangestate] = useState("");
    // const ct = (e) => {
    //     // console.log(e.target.value)
    //     setchangecity(e.target.value)
    //     console.log(changecity)
    // }
    // if (changestate === "MH") {
    //     dcity = ["Nagpur", "Pune", "Mumbai"]
    // }
    // else if (changestate === "MP") {
    //     dcity = ["Bhopal", "Jabalpur", "Baitul"]
    // }
    // if (changestate === "UP") {
    //     dcity = ["a", "b", "c"]
    // }
    // const st = (e) => {
    // console.log(e.target.value)
    //     setchangestate(e.target.value)

    // }

    // const handlesubmit = (e) => {
    //     e.preventDefault()
    // axios.post("http://localhost:5000/student/createuser",{[
    //    first_name=(fname.current.value)
    //    =(lname.current.value)
    //    =(state.current.value)
    //    =(city.current.value)
    //    =(zip.current.value)
    // ]}).then
    // const user = {
    //     first_name: fname.current.value,
    //     last_name: lname.current.value,
    //     state: state.current.value,
    //     city: city.current.value,
    //     zip: zip.current.value
    // };
    const handlesubmit = async () => {
        // if (fname.current.value === "" || lname.current.value === "" || state.current.value === "" || city.current.value === "" || zip.current.value === "") {
            // alert("plz enter data properly")\
        //     return
        // }
        // else {
            let res = await axios.post("http://localhost:5000/student/createuser", {
                first_name: fname.current.value,
                last_name: lname.current.value,
                state: state.current.value,
                city: city.current.value,
                zip: zip.current.value
            });
            console.log(res);
        };
    // }
    // handlesubmit();
    // };
    // }
    const classes=useStyles()

    return (
        
        <div className="container">
            {/* <div className="row">
                <form onClick={handlesubmit} >
                    <input  placeholder="Enter a First_Name" type="text" ref={fname} />
                    <input  placeholder="Enter a Last_Name" type="text" ref={lname} />
                    <input  placeholder="Enter a State" type="text" ref={state} />
                    <input  placeholder="Enter a city" type="text" ref={city} />
                    <input  placeholder="Enter a zip" type="text" ref={zip} />
                    <button className="btn btn-outline-secondary">submit</button>
                </form>
            </div> */}
            <form >
                <center>
                    <div className="mb-3" className={classes.input}>
                        {/* <center><h3>Register-Page</h3></center> */}
                        <input  placeholder="Enter a First_Name" type="text" ref={fname} />
                    </div>
                    <br/>
                    <div className="mb-3"className={classes.input}>
                        <input  placeholder="Enter a Last_Name" type="text" ref={lname} />
                    </div>
                    <br/>
                    <div className="mb-3"className={classes.input}>
                        <input  placeholder="Enter a State" type="text" ref={state} />
                    </div>
                    <br/>
                    <div className="mb-3"className={classes.input}>
                        <input  placeholder="Enter a city" type="text" ref={city} />
                    </div>
                    <br/>
                    <div className="mb-3"className={classes.input}>
                        <input  placeholder="Enter a zip" type="number" ref={zip} />
                    </div>
                    <br/>
                    <button onClick={handlesubmit} type="submit" className={classes.input}>Submit</button>

                </center>
            </form>
            {/* <div className="col ">
                <select className="form-select sm" ref={state} onChange={st} name="State" id="">
                    {dstate.map((data) => <option key={data} value={data}>{data}</option>)}
                </select><br />
            </div>
            {changestate === "" ? "  " :
                <div className="col">
                    <select className="form-select sm" ref={city} onChange={ct} name="City" id="">
                        {dcity.map((data) => <option key={data} value={data}>{data}</option>)}
                    </select>
                </div>
            } */}

<SearchZip/>
        </div >
    )
}

export default Register