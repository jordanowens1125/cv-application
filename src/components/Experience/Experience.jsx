import React,{useState , useRef} from 'react'
import './Experience.css'
import useOutsideClick from '../../hooks/useOutsideClick'
const fields = [
  'Company',
  'Title',
  'Start',
  'End',
  'Details',
]

const objects = [
  {
    "Company": "Super Awesome Web Company",
    "Title": "Web Developer",
    "Start":  "JULY 2020",
    "End":  "JULY 2020",
    "Details":   "Lorem ipsum dolor",
  },
  {
    "Company": "Another Web Company",
    "Title": "B.S Web Development",
    "Start":  "JULY 2020",
    "End":  "JULY 2020",
    "Details":   "Lorem ipsum dolor",
  },
]

const Experience = () => {
  const [experiences ,setExperiences] = useState(objects)
  const [open, setOpen] = useState(false)
  const impactRef = useRef();
  const handleDelete = (e,index) =>{
    const update = [...experiences]
    update.splice(index,1)
    setExperiences(update)
  }

  const handleClick = () => {
    //open form for new addExperience section
    setOpen(true)
  }

  const closeModal = (e) =>{
    for (let i = 0; i < fields.length; i++)
    {
      let element = document.getElementById('Experience-'+fields[i]+'-field')
      element.value = ''
    }
    setOpen(false)
  }

  const addExperience = () =>{
    //get values from 
    const newExperienceObject = {}
    for (let i = 0; i < fields.length; i++)
    {
      //get value for this element from dom
      let element = document.getElementById('Experience-'+fields[i]+'-field')
      console.log(element)
      let value = element.value
      //set newExperienceObject object property
      newExperienceObject[fields[i]] = value 
      element.value = ''
    }
    const copy = [...experiences]
    copy.push(newExperienceObject)
    setExperiences(copy)
    setOpen(false)
  }
  useOutsideClick(impactRef, () => setOpen(false));
  return (
    <div id = 'Experience'>
      <h2>Experience</h2>    
      <ul>
          {
            experiences.map((object,index)=>
            <li key={index}>
              <h4 id='date'>
                {object.Start}  -  {object.End}
              </h4>
              <h4 id ='title'>
                {object.Title}
              </h4>
              <h3 id="company">
                {object.Company}
              </h3>
              <p id='location'>
                {object.Location}
              </p>
              <p id='details'>
                {object.Details}
              </p>
              <svg xmlns="http://www.w3.org/2000/svg"  
                viewBox="0 0 24 24" 
                width="20px" 
                height="20px"
                id='delete'
                onClick={(e) => handleDelete(e,index)}
                fill="currentColor" 
                >   
                <path d="M 10 2 L 9 3 L 5 3 C 4.448 3 4 3.448 4 4 C 4 4.552 4.448 5 5 5 L 7 5 L 17 5 L 19 5 C 19.552 5 20 4.552 20 4 C 20 3.448 19.552 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.105 5.895 22 7 22 L 17 22 C 18.105 22 19 21.105 19 20 L 19 7 L 5 7 z"/>
              </svg>
            </li>
            )
          }
      </ul>
      <svg fill="currentColor" 
        width="20px" 
        height="20px" 
        viewBox="0 0 1920 1920" 
        onClick={(e) => handleClick(e)}
        xmlns="http://www.w3.org/2000/svg">
        <path d="M866.332 213v653.332H213v186.666h653.332v653.332h186.666v-653.332h653.332V866.332h-653.332V213z" fillRule="evenodd"/>
      </svg>
      <div className='plus' style={{"display":open ? 'grid' : 'none'}}>
          <div id='add-experience' ref={impactRef} className="wrapper" style={{"display":open ? 'grid' : 'none'}}>
              <div id="heading">
                <h4>New Experience</h4>
                <svg 
                  xmlns="http://www.w3.org/2000/svg"  
                  viewBox="0 0 30 30" 
                  onClick={(e)=>closeModal(e)}
                  width="20px" 
                  height="20px">    
                  <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/>
                </svg>
              </div>
              <div>
                <label htmlFor="title">Your Title</label>
                <input type="text" id="Experience-Title-field" name="Experience-Title-field" ></input>
              </div>
              <div>
                <label htmlFor="company">Company Name</label>
                <input type="text" id="Experience-Company-field" name="Experience-Company-field"></input>
              </div>
              <div>
                <label htmlFor="start">Start Date</label>
                <input type="text" id="Experience-Start-field" name="Experience-Tenure-Start-field" ></input>
              </div>
              <div>
                <label htmlFor="end">End Date</label>
                <input type="text" id="Experience-End-field" name="Experience-End-field" ></input>
              </div>
              <div id ="experience-details">
                <label htmlFor="details">Desciption</label>
                <textarea type="text" id="Experience-Details-field" name="Experience-Details-field" ></textarea>
              </div>
              <input type="submit" onClick={(e)=>(addExperience(e))}/>
        </div>
      </div>
    </div>
  )
}

export default Experience