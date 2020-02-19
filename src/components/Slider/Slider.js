import React, { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";

import './Slider.css'

class Slider extends Component {
    render(){
        const images = [
            {url:"https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/374783_103248286458628_1654765810_n.jpg?_nc_cat=104&_nc_ohc=1FPdoUrHxa4AX-wmfX3&_nc_ht=scontent-sof1-1.xx&oh=935aec1e9f56a67988ea5c91ab2df524&oe=5EBBA2C1"},
            {url:"https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/375227_103248809791909_2012931097_n.jpg?_nc_cat=104&_nc_ohc=xD5snJ04zlIAX9OX_VS&_nc_ht=scontent-sof1-1.xx&oh=1a6872121e6503979eb19d99d45fe241&oe=5F01805A"},
            {url:"https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/373884_103248573125266_1985205443_n.jpg?_nc_cat=100&_nc_ohc=lWvcVoKVTpAAX9aefPU&_nc_ht=scontent-sof1-1.xx&oh=f68159deb4409ed5ab16e7e4e9848031&oe=5EC27201"},
            {url:"https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/383590_103248349791955_53509021_n.jpg?_nc_cat=108&_nc_ohc=L7hVeOx9EQMAX_bYIhb&_nc_ht=scontent-sof1-1.xx&oh=8549ac3c8a822857515549a0b7f88ec3&oe=5EC20CCD"},
        ];

        return(
            <div className="slider">
                <SimpleImageSlider
                width={window.innerWidth}
                height={600}
                showBullets ={false}
                images={images}
                slideDuration ={1}
                />
            </div>
        );
    }
}

export default Slider;