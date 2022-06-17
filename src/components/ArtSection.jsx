import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../img/art1.png';
import image2 from '../img/art2.png';
import image3 from '../img/art3.png';
import image4 from '../img/art4.jpg';
import image5 from '../img/art5.jfif';
import image6 from '../img/art6.jfif';
import image7 from '../img/art7.png';
import image8 from '../img/art8.png';
import image9 from '../img/art9.jpg';
import image10 from '../img/art10.jfif';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
const bootstrap = require('bootstrap');

const ArtSection = () => {
    return (
        <div id='container'>
            <div>
            <div>
                <h1 className='text-light art' style={{ fontSize: 50 }}>MY DIGITAL ARTWORK</h1>
                <p className='text-light' style={{ fontSize: 22 }}> Feel free to click through some of my art in the carousel below!</p>
            </div>
                <div className="Carousel">
                <AliceCarousel autoPlay autoPlayInterval="2000">
                    <img src={image1} className="sliderimg" />
                    <img src={image2} className="sliderimg" />
                    <img src={image3} className="sliderimg" />
                    <img src={image4} className="sliderimg" />
                    <img src={image5} className="sliderimg" />
                    <img src={image6} className="sliderimg" />
                    <img src={image7} className="sliderimg" />
                    <img src={image8} className="sliderimg" />
                    <img src={image9} className="sliderimg" />
                    <img src={image10} className="sliderimg" />
                </AliceCarousel>
                </div>
            </div>
        </div>
    );
}

export default ArtSection;