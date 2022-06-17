import React from 'react'
import '../App.css';
import background from "../img/chalkboard.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
const bootstrap = require('bootstrap');

const BioSection = () => {
    return (
        <div id='container'>
            <div>
                <div>
                <h1 className='text-light about-me'>ABOUT ME❣</h1>
                </div>

                <div className='about-section'>
                <div className='pfp'>
                    <img className='my-pic' src={require("../img/paytonpfp.png")} alt="Photo of Payton Fronczak"/>
                </div>

                <div>

                <p className='text-light'>
                 Hello again! Thanks for scrolling this far! I am a recent graduate of Coding Dojo, a 14 week intensive coding bootcamp! I was trained in 3 full-stacks, but I specialize in front-end development!
                </p>
                <br/>
                <p className='text-light'>
                 When I'm not coding or creating artwork, I'm usually practicing fencing, playing with my two cats, Puff and Midnight, or immersing into video games! My favorite genre being RPGs.
                </p>

                </div>
                </div>

            </div>
        </div>
    )
}

export default BioSection;