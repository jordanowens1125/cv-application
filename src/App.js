import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import HeadShot from './components/Headshot/HeadShot';
import Skills from './components/Skills/Skills';
//classNames I dont want to show in pdf download
const classNames = [
  'delete',
]

const reformatPage = () => {
  showElements()
  const nav = document.getElementsByClassName('nav')[0]
  nav.style.justifyContent = 'center'
  nav.style.alignItems = 'center'
}

const removeElements = () =>{
  for (let i = 0; i < classNames.length; i++ )
    {
      const elements = document.getElementsByClassName(classNames[i])
      for (let i = 0; i < elements.length; i++)
      {
        elements[i].style.display='none'
      }
    }

    const svgs = document.getElementsByTagName('svg')
    for (let i = 0; i < svgs.length; i++)
    {
      svgs[i].style.display='none'
    }
    
    const nav = document.getElementsByClassName('nav')
    for (let i = 0; i < nav.length; i++)
    {
      nav[i].style.display='none'
    }
}

const showElements = () =>{
  for (let i = 0; i < classNames.length; i++ )
    {
      const elements = document.getElementsByClassName(classNames[i])
      for (let i = 0; i < elements.length; i++)
      {
        elements[i].style.display='block'
      }
    }

    const svgs = document.getElementsByTagName('svg')
    for (let i = 0; i < svgs.length; i++)
    {
      svgs[i].style.display='block'
    }

    const nav = document.getElementsByClassName('nav')
    for (let i = 0; i < nav.length; i++)
    {
      nav[i].style.display='flex'
    }
}

const formatPDF = () => {
  removeElements()
  const app = document.getElementsByClassName('App')[0]
  app.style.alignItems ='center'
}

function App() {
  const saveAsPDF = () => {
    // const input = document.getElementById('resume');
    const app = document.getElementsByClassName('App')[0]
    removeElements()
    formatPDF()

    html2canvas(app)
    .then((canvas)=>{
      //get image url of profile img
      let img = document.getElementById("profile-img")//.style.backgroundImage
      let style = img.currentStyle || window.getComputedStyle(img, false)
      let URL = style.backgroundImage.replace('url(', '').replace(')', '').replace(/["']/g, "");
      const imgData = canvas.toDataURL(URL);
        const pdf = new jsPDF("p", "mm", "a4");
        let width = pdf.internal.pageSize.getWidth();
        let height = pdf.internal.pageSize.getHeight();
        let ratio = width/height
        pdf.addImage(imgData, 'JPEG', 0, 0, height * ratio, width/ratio);
        // pdf.output('dataurlnewwindow');
        pdf.save("resume.pdf");
    })
    //show all items again
    reformatPage()
  }
  return (
    <div className="App">
      {/*Div to add functionality
      liike change background image
      color of text or resume */}
      <div className='nav'>
        <button onClick={()=>saveAsPDF()}>
          Download PDF
        </button>
      </div> 
      <div id='resume'>
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
