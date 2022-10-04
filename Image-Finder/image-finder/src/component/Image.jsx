import { Card, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle=makeStyles({
    image:{
        width:'100%',
        paddingTop:20,
        height:300,
        objectFit:'cover'
    }

})
const Image = ({image}) => {
    const classes=useStyle()
    return (
        <Card>
<img src={image.largeImageURL} className={classes.image}/>
        </Card>
 
    )
}

export default Image
