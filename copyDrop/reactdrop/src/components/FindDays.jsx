import React, { useRef, useState } from 'react'

const FindDays = () => {
    const curdates = useRef()
    const pdates = useRef()
    const [yyyy, setYear] = useState()
    const [mm, setMonth] = useState()
    const [dd, setDate] = useState()
    const Display = () => {
        var crdate = curdates.current.value.split("-")

        var prdate = pdates.current.value.split("-")


        var curyear = crdate[0]
        var curmonth = crdate[1]
        var curdate = crdate[2]
        var pyear = prdate[0]
        var pmonth = prdate[1]
        var pdate = prdate[2]


        if (curmonth < pmonth) {

            curmonth = curmonth + 12
            curyear = curyear - 1
        }
        if (curdate < pdate) {

            setDate(curdate - pdate)
            curmonth = curmonth - 1
        }
        else {
            setDate(curdate - pdate)
            
        }
        setYear(curyear - pyear)
        
        setMonth(curmonth - pmonth)
        


    }

    return (
        <div>
            <center>
            <label> Current Value</label>
            <input type="date" ref={curdates} />
            <br/><br/>
            <label> Past Value</label>
            <input type="date" ref={pdates} />
            <br/><br/>
            <button onClick={Display}>Click To Display</button>
            <h1>Display ={mm}-{dd}-{yyyy}</h1>
            </center>
        </div>
    )
}

export default FindDays;