import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTime = () => {
  const [disdate, setdisdate] = useState();
  const [nxtdate,setnxtDate]=useState()
  const[dis,setDis]=useState()
const disntance=()=>{
  const days=disdate - nxtdate
  setDis(days)
}

  return (
    <center>
        <div>
        <div>
        <DatePicker selected={disdate} onChange={(date) => setdisdate(date)} />
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div>
          <DatePicker selected={nxtdate} onChange={(next)=>setnxtDate(next)}
          showYearDropdown
          />
      </div>
<button onClick={disntance}>lick</button>
{new Date (dis).toDateString()}
        </div>
     
    </center>
  );
};

export default DateTime;
