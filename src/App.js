import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import HeadShot from './components/Headshot/HeadShot';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      
      {/*Div to add functionality
      liike change background image
      color of text or resume 
      <div className='nav'>
        Nav
      </div> */}
      <div className='resume'>
        <HeadShot/>
        <Contact/>
        <Skills/>
        <About/>
        <Education/>
        <Experience/>
      </div>
    </div>
  );
}

export default App;
