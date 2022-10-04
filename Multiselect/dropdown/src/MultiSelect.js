import React, { useState } from 'react'
import {Multiselect} from 'multiselect-react-dropdown'

export default function MultiSelect() {
    const data=[
        {Country:"India"},
        {Country:"USA"},
        {Country:"UAE"},
        {Country:"England"},
    ]
    const[options]=useState(data);
    return (
        <div>
              <h1>Multi Select Drop Down</h1>
            <Multiselect options={options} displayValue="Country"></Multiselect>
        </div>
    )
}

