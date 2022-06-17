import './App.css';
import './Responsive.css'
import Home from '../src/components/pages/Home';
import Bio from '../src/components/pages/Bio';
import Art from '../src/components/pages/Art';
import Dev from '../src/components/DevSection';
import background from './img/chalkboard.jpg';
import { Link } from 'react-router-dom';
import ContactButton from './components/ContactButton';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>

      <section id="contact">
        <ContactButton />
      </section>

      <section id='home'>
        <Home />
      </section>

      <section id='dev'>
        <Dev />
      </section>

      <section id='art'>
        <Art />
      </section>

      <section id='bio'>
        <Bio />
      </section>

      <Link style={{ textDecoration: 'none' }} to="/" onClick={e => {
        let home = document.getElementById("home");
        e.preventDefault();  
        home && home.scrollIntoView();
      }}
      >
        <div className='UpArrow'>
          ^
        </div>
      </Link>
      <div className='footer'>♡ ♡ ♡ Website and illustrations all developed and created by Payton Fronczak ♡ ♡ ♡</div>
    </div>
  );
}

export default App;
