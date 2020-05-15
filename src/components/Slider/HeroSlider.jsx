import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';

import img1 from '../../images/plate.jpg';
import img2 from '../../images/fast.jpg';
import img3 from '../../images/eat.jpg';


import './HeroSlider.css';

const HeroSliderConfigs = {
    containerClass:"swiper-container hero-slider",
    parallax:true,
    centerdSlides:true,
    speed:600,
    spaceBetween:0,
    effect:"slide",
    loop:true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
};


const HeroSlider = ()=>{
    const [parallaxSwiper,setParallaxSwiper]=useState(null);
    const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
    const parallaxOpacity = 0.5;

    return <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
        {/* 1 */}
        <div className="hero-slide">
            <div className="slide-image"
              data-swiper-parallax={parallaxAmount}
              data-swiper-parallax-opacity={parallaxOpacity}
              >
                  <img className="img-fluid" src={img1} alt="img1" style={{width:'100%',opacity:'0.7'}}/>
            </div>
            <div className="col-md-4 col-sm-6 offset-md-1 my-auto text-left text-white content">
                <h1 className="text-uppercase mb-4 font-weight-bold">Fit Plate</h1>
                <p className="mb-1 justify">Dinamičan tip treninga za samo 30 minuta! Kombinacija vežbi, istezanja i masaže uz vibraciju. Više informacija <Link style={{textDecoration:'none'}} to="/programs/2"> na klik...</Link></p>
            </div>
        </div>
        {/* 2 */}
        <div className="hero-slide">
            <div className="slide-image"
              data-swiper-parallax={parallaxAmount}
              data-swiper-parallax-opacity={parallaxOpacity}
              >
                  <img className="img-fluid" src={img2} alt="img2" style={{width:'100%',opacity:'0.7'}}/>
            </div>

            <div className="col-md-4 col-sm-6 offset-md-1 my-auto text-left text-white content">
                <h1 className="text-uppercase mb-4 font-weight-bold">Fit Fast</h1>
                <p className="mb-1 justify">Dovedite svoje telo u vrhunsku formu za tri meseca uz redovnu fizičku aktivnost i izbalansiranu ishranu. Tromesečni paket treninga i plana ishrane koji će vam pomoći da ostvarite željeni cilj . Više informacija <Link style={{textDecoration:'none'}} to="/programs/4"> na klik...</Link></p>
            </div>
        </div>
                {/* 3 */}
                <div className="hero-slide">
            <div className="slide-image"
              data-swiper-parallax={parallaxAmount}
              data-swiper-parallax-opacity={parallaxOpacity}
              >
                  <img className="img-fluid" src={img3} alt="img3" style={{width:'100%',opacity:'0.7'}}/>
            </div>
            <div className="col-md-4 col-sm-6 offset-md-1 my-auto text-left text-white content">
                <h1 className="text-uppercase mb-4 font-weight-bold">Fit Eat</h1>
                <p className="mb-1 justify">Individualni plan ishrane na osnovu merenja i vaših ciljeva! Više informacija <Link style={{textDecoration:'none'}} to="/nutrition"> na klik...</Link></p>
            </div>
        </div>
    </Swiper>
}

export default HeroSlider;