import React from 'react';
import './Infobar.css'
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom'


const Brand = () =>{
    return (
        <Link to="/"><img src={logo} style={{width:'74px',height:'64px'}}/></Link>
    )
}

export default Brand;