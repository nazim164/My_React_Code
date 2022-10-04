
import { Grid } from '@material-ui/core'
import Image from './Image'
const Images = ({data}) => {
    console.log('data',data)
    return (
       <Grid container>
           {
                data.map(image=>{
                 return   <Grid key={image.id} xs={3} item> <Image image={image}/></Grid>
                   })
           }
       </Grid>
    )
}

export default Images
