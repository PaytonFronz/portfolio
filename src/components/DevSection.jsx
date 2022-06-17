import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const bootstrap = require('bootstrap');

const DevSection = () => {
  return (
    <div id='container'>
      <div className='toolkit'>
        <h2 className='text-light toolkit'>My Dev Toolkit</h2>
        <img className="html5" src={require("../img/html5.png")} alt="HTML5 Icon" />
        <img className="css3" src={require("../img/css3.png")} alt="CSS3 Icon" />
        <img className="java-script" src={require("../img/java-script.png")} alt="Javascripts Icon" />
        <img className="react" src={require("../img/react.png")} alt="React Icon" />
      </div>

      <div className='projects'>
        <h2 className='text-light projects'>Projects</h2>

        <div className='calcApp'>
          <img className='calc_example' src={require("../img/calc_ex.png")} />
        </div>

        <div id='calc-project'>
          <a href='https://paytonfronz.github.io/Calculator/'> <button style={{ textDecoration: 'none' }} class="btn btn-light" href='https://paytonfronz.github.io/Calculator/'>Live</button></a>
        
          <a href='https://github.com/PaytonFronz/Calculator'><button style={{ textDecoration: 'none' }} class="btn btn-light">Github</button></a>
        </div>
      </div>
    </div>
  )
}

export default DevSection;