import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { uploadFile } from "../service/api";
import { useHistory } from "react-router-dom";

// const InitialValue={
//   name:'',
//   email:'',
//   contact:'',
//   gender:'',
//   picture:'',
//   address:'',
//   resume:'',
//   country:'',
//   state:'',
//   cityname:''
// }
const UserConsole = () => {
  let countryname = ["India","UAE","Pakistan"];
  let statename = [];
  let cityname = [];
  
  

  const [file, setFile] = useState('');
  const [filename,setFileName]=useState()
  const[uploadfile,setUploadFile]=useState({})
  const [changecountry, setChangeCountry] = useState("");
  const [chnagestate, setChangeState] = useState("");
  const [changecity, setChangeCity] = useState("");
  const [dis, setDis] = useState([]);
  const [filldata, setFilldata] = useState("");
  const[post,setPost]=useState([])
  const[gen,setGen]=useState()
  


  const fname = useRef();
  const email = useRef();
  const contact = useRef();
  
  const docfile = useRef();
  const add = useRef();
  const upfile = useRef();
  const gendercheck=useRef()
  const country = useRef();
  const state = useRef();
  const city = useRef();
  // const[image,setImage]=useState()
  // const [post, setPost] = useState(InitialValue)
  // const handleChange=(e)=>{
  //   setPost({...post,[e.target.name]:e.target.value})
  // }
  const history=useHistory()
  const onSubmit = async () => {
    let res = await axios.post("http://localhost:9000/showdetail/postuser", {
      name: fname.current.value,
      email: email.current.value,
      contact: contact.current.value,
      gender:gendercheck.current.value,
      picture: upfile.current.value,
      address: add.current.value,
      resume: docfile.current.value,
      country: country.current.value,
      state: state.current.value,
      city: city.current.value,
    });
    console.log(res);
    history.push('/Alluser')
    // await createPost(post);

    const countdata = dis.filter((data) => {
      return data.countryname === changecountry;
    });
    const statedata = countdata.filter((data) => {
      return data.statename === chnagestate;
    });
    const citydata = dis.filter((data) => {
      return data.cityname === changecity;
    });
    setFilldata(citydata);
    console.log(
      dis.map((dis) => {
        return dis.countryname;
      })
    );
    console.log(countdata);
    console.log(statedata);
    console.log(citydata);
    console.log(changecity);
  };
  useEffect(() => {
    console.log(file);
    onSubmit()
      
    
   
  }, []);

  // const createPost=async(post)=>{
  //   try{
  //    return  await axios.post('http://localhost:9000/showdetail/postuser',post)
  //   }catch(error){
  //       console.log('Error While Post Api',error)
  //   }
  // }
  // useEffect(()=>{
  //   console.log(file)
  //   const getImage=async()=>{
  //     if(file){
  //       const data=new FormData()
  //       data.append("name",file.name)
  //       data.append("file",file)

  //     const image=  await uploadFile(data)
  //     post.picture=image.data
  //     // setImage(image.data)
  //     }
        

  //   }
  //   getImage()

  // },[file])

  const countValue = (e) => {
    setChangeCountry(e.target.value);
  };
  const stateValue = (e) => {
    setChangeState(e.target.value);
  };
  const cityValue = (e) => {
    setChangeCity(e.target.value);
  };
  if (changecountry === "India") {
    statename = ["Select","Mahrashtra", "Rajisthan"];
  } else if (changecountry === "UAE") {
    statename = ["Select","AbuDhaabi", "Dubai"];
  }else if(changecountry==="Pakistan"){
    statename=["Select","Peshawar","Lahore"]
  }
  switch (chnagestate) {
    case "Mahrashtra":
      cityname = ["Select","Nagpur", "Mumbai", "Pune"];
      break;
    case "Rajisthan":
      cityname = ["Select","Ajmer", "Pushkar"];
      break;
    case "AbuDhaabi":
      cityname = ["Select","Madinat Zayed", "Mirfa"];
      break;
    case "Dubai":
      cityname = ["Select","Al Khawaneej", "AlJeer"];
      break;
    case "Peshawar":
      cityname= ["Select","Mardan","Mingora"]
      break;
    case "Lahore":
      cityname=["Select","Rehmatpura","Begampura"]
  }
//   const handlechange=e=>{
//     const target=e.target
//     const name=target.name
//     const value=target.value
//     setChangeGender({
//         ...changegender,
//         [name]:value
//     })
// }
const onValue=(e)=>{
  setFile(e.target.value[0])
  setFileName(e.target.value[0].name)
}
     

  return (
    <div class=" justify-content-center"style={{backgroundColor:'rgb(0, 117, 128)'}}>
        <center>
        <div className="mt-3 "style={{fontSize:30,backgroundColor:'tomato',marginLeft:600,marginRight:600,padding:10}}>
             <i class="fas fa-user-friends "><br/></i>
        </div>
        <p style={{fontSize:30,fontWeight:600}}>User Console</p>
        </center>
     <div className="d-flex">
     <form style={{ width: 400 ,marginLeft:200}} className=" pt-5 " >
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" ref={fname} />
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={email}
          />
        </div>
        <div className="mb-5 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Contact
          </label>
          <input type="number" className="form-control" ref={contact} />
        </div>
      <div className="d-flex">
        <p>Gender:</p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"onChange={()=>setGen('male')} value={gen} ref={gendercheck}/>
      <label class="form-check-label" for="flexRadioDefault1">
      Male
      </label>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  onChange={()=>setGen('female')} value={gen} ref={gendercheck}/>
      <label class="form-check-label" for="flexRadioDefault1">
      FeMale
      </label>
      </div>
      </div>
       
        <div className="mt-2">
          <span>Profile Picture :</span>
          <input
            class="form-control"
            type="file"
            id="formFile"
            ref={upfile} /**/
            name="picture"
            onChange={onValue}
            placeholder="Choose Profile Picture"
          />
          <br/>
          <span>ID Proof :</span>
           <input
            class="form-control"
            type="file"
            id="formFile"
            ref={upfile} /**/
            name="picture"
            onChange={onValue}
            placeholder="Choose Id Proof"
          />
          {/* <label className="custom-file-label" htmlFor="customFile">
            Choose File
          </label> */}
        </div>

        {/* <button type="submit" className="btn btn-primary">Submit</button> */}
      </form>
      <form style={{ width: 400,marginLeft:120 }} className="p-5">
        <label className="form-check-label">Address</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          ref={add}
        ></textarea>

        <div className="mt-4">
          <select
            class="form-control"
            id="exampleFormControlSelect1 mt-5"
            onChange={countValue}
            ref={country}
          >
            <option>Select Country</option>
            {countryname.map((data) => (  
              <option key={data} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4">
          {changecountry === " " ? (" ") : (
            <select
              onChange={stateValue}
              className="form-control"
              id="exampleFormControlSelect1 mt-5"
              ref={state}
            >
              {statename.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="mt-4">
          {chnagestate === " " ? (
            " "
          ) : (
            <select
              class="form-control"
              onChange={cityValue}
              className="form-control"
              id="exampleFormControlSelect1 mt-5"
              ref={city}
            >
              {cityname.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
          )}
        </div>
        <div class="mt-2">
        <span>Resume :</span>
          <input class="form-control" type="file" ref={docfile} id="formFile" placeholder="Choose Resume"/>

          <br/>
          <span>Certificate :</span>
          <input class="form-control" type="file" ref={docfile} id="formFile" placeholder="Choose Certificate"/>
        </div>
        <div className="mt-5 ">
          <button
            type="button"
            
            style={{ width: "50%", marginLeft: -160 ,backgroundColor:'black',color:'#ffffff'}}
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </form>
     </div>
 
    </div>
  );
};

export default UserConsole
