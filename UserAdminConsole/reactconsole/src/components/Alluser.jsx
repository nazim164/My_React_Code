import React, { useState,useEffect } from 'react'
import {  Box, Button, Card, CardContent, Dialog, DialogContent, Table,  TableBody,  TableCell, TableHead, TableRow, Typography} from '@material-ui/core'
import axios from 'axios'
// import {RemoveRedEyeIcon }from '@mui/icons-material/RemoveRedEye' 
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
const Alluser = () => {
    const [show,setShow]=useState([])
    const[getdata,setGetdata]=useState([])
    const[open,setOpen]=useState(false)
    const getValue=()=>{
        axios.get('http://localhost:9000/showdetail/add')
        .then((res)=>{
            const serverside=res.data
            console.log(serverside)
            const Id=serverside.filter((id)=>id);
            setShow(Id)
            // setShow(serverside)
        })
    }
    useEffect(() => {
        getValue()
    }, [show])
    const handleclose=()=>{
        setOpen(false)
    }
    return (
    
       <div style={{fontSize:100,backgroundColor:'rgb(106, 165, 170)'}}>
        <center>   
       <div style={{fontSize:100,backgroundColor:'tomato',marginLeft:580,marginRight:580}}>
       <i class="fas fa-user-cog pt-5"> </i>
       </div>
       <h3><b>Admin Console</b></h3>
        </center>
            <Table >
        <TableHead >
            <TableRow >
                <TableCell style={{fontWeight:600}}>Name</TableCell>
                <TableCell style={{fontWeight:600}}>Email</TableCell>
                <TableCell style={{fontWeight:600}}>Conatct</TableCell>
                <TableCell style={{fontWeight:600}}>Gender</TableCell>
                <TableCell style={{fontWeight:600}}>Show Data</TableCell>
                <TableCell style={{fontWeight:600}}>Download</TableCell>

                
                {/* <TableCell>file</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>State</TableCell>
                <TableCell>City</TableCell>
                <TableCell>DocFile</TableCell> */}
            </TableRow>
        </TableHead>
        <TableBody>
            {
                show.map((data=>
                <TableRow>
                <TableCell style={{fontWeight:600}}>{data.name}</TableCell>
                <TableCell style={{fontWeight:600}}>{data.email}</TableCell>
                <TableCell style={{fontWeight:600}}>{data.contact}</TableCell>
                <TableCell style={{fontWeight:600}}>{data.gender}</TableCell>
                {/* <TableCell>{data.picture}</TableCell>
                <TableCell>{data.address}</TableCell>
                <TableCell>{data.country}</TableCell>
                <TableCell>{data.state}</TableCell>
                <TableCell>{data.city}</TableCell>
                <TableCell>{data.resume}</TableCell> */}
                <TableCell><Button variant="contained" style={{backgroundColor:'tomato'}} onClick={()=>{
                    setOpen(true)
                    setGetdata(data._id)
                    }}>
         <VisibilityIcon/>
         </Button>
                
                </TableCell>
                <TableCell><Button style={{backgroundColor:'tomato'}}>
                    <DownloadIcon/>
                    </Button></TableCell>

            </TableRow>
            ))
            }
        </TableBody>
        </Table>
        <Dialog open={open} onClose={handleclose}>
            <DialogContent>
                {
                    show.filter((get)=>{
                        return get._id===getdata}).map((e)=>
                        <Card sx={{maxWidth:1000}}>
                            <CardContent>
                                <Box>
                                    <Typography><b>Name :</b>{e.name}</Typography>
                                </Box>
                                <Box>
                                    <Typography><b>Email :</b>{e.email}</Typography>
                                </Box>
                                <Box>
                                    <Typography><b>Contact :</b>{e.contact}</Typography>
                                </Box>
                                <Box>
                                    <Typography><b>Gender :</b>{e.gender}</Typography>
                                </Box>
                                <Box>
                                    <Typography><b>Profile :</b>{e.picture}</Typography>
                                </Box>
                                <Box>
                                    <Typography><b>Address :</b>{e.address}</Typography>
                                </Box>
                                <Box>
                                    <Typography><b>Country :</b>{e.country}</Typography>
                                </Box>
                                <Box>
                                    <Typography><b>State :</b>{e.state}</Typography>
                                </Box>
                                <Box>
                                    <Typography><b>City :</b>{e.city}</Typography>
                                </Box>
                                <Box>
                                    <Typography><b>Resume :</b>{e.resume}</Typography>
                                </Box>
                                
                            </CardContent>



                        </Card>
                        )}
            </DialogContent>
        </Dialog>
       </div>
    )
}

export default Alluser
