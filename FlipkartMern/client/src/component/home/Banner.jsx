import { Box } from '@material-ui/core'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {bannerData} from '../../constants/data'

const Banner = () => {
    return (
        <Carousel>
        {
            bannerData.map( image =>(
         
                    <img src={image} style={{width:'100%'}}/>
         
            ) )
        }
    </Carousel>
    )
}

export default Banner
