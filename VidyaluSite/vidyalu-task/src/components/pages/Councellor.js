import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Councellor = () => {
    const[show,setShow]=useState([])

    const getCouns=()=>{
        axios.get("http://localhost:9090/show/getcouns")
        .then((res)=>{
            const serverside=res.data
            console.log(serverside)
            setShow(serverside)
        })
    }
    useEffect(() => {
        getCouns()
      
    }, [])
    return (
        <div>
           <div className="text-center mt-5 text-muted ">
                <h3 style={{textDecoration:'underline'}}>Counsellor List</h3>
            </div>
            <div>
                <Table>
                <TableHead className="text-center ml-5 mr-5  mt-5 bg-dark">
                    <TableRow >
                        <TableCell className="ml-5 text-white">Name :</TableCell>
                        <TableCell className="text-white">Email :</TableCell>
                        <TableCell className="text-white" typeof="password">Password :</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className="text-center ml-5 mr-5">
                {
                            show.map((data=>
                            <TableRow>
                                <TableCell>{data.name}</TableCell>
                                <TableCell>{data.email}</TableCell>
                                <TableCell >{data.password}</TableCell>
                            </TableRow>
                                
                                ))
                        }
                </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default Councellor
