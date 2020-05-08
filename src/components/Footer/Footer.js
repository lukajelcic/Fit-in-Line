import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';


import PhoneIcon from '@material-ui/icons/Phone';
import MapIcon from '@material-ui/icons/Map';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import ScheduleIcon from '@material-ui/icons/Schedule';

const Footer =()=>{
    return(
        <div className="main-footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <span>LOGO</span>
                    </div>
                    <div className="col">
                        <h4>Fit In Line</h4>
                        <hr />
                        <ul className="list-unstyled">
                            <li><PhoneIcon style={{marginRight:'5px',color:'#B3F2F8'}}/> +381 66 34 36 06</li>
                            <li><MapIcon style={{marginRight:'5px',color:'#B3F2F8'}}/> Kragujevac, Srbija</li>
                            <li><LocationOnIcon style={{marginRight:'5px',color:'#B3F2F8'}}/> Janka Veselinovica 35</li>
                            <li><MailIcon style={{marginRight:'5px',color:'#B3F2F8'}}/> tanja20nikolic@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Linkovi</h4>
                        <hr />
                        <ul className="list-unstyled">
                            <li><Link to="/about" style={{textDecoration:'none',color:'white'}}> O nama</Link></li>
                            <li><Link to="/nutrition" style={{textDecoration:'none',color:'white'}}> Ishrana</Link></li>
                            <li><Link to="/programs" style={{textDecoration:'none',color:'white'}}> Programi</Link></li>
                            <li><Link to="/news" style={{textDecoration:'none',color:'white'}}> Vesti</Link></li>
                            <li><Link to="/gallery" style={{textDecoration:'none',color:'white'}}> Galerija</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                    <h4>Radno vreme</h4>
                    <hr />
                        <ul className="list-unstyled">
                            <li>Ponedeljak-Nedelja</li>
                            <p><ScheduleIcon style={{marginRight:'5px',color:'#B3F2F8'}} /> 08h-22h</p>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} FIT IN LINE | All right reserved | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;