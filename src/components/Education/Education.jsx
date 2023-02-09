import React,{useState , useRef} from 'react'
import useOutsideClick from '../../hooks/useOutsideClick'
import './Education.css'

const fields = [
  'School',
  'Degree',
  'Start',
  'End',
  'Minor',
  'GPA',
]

const objects = [
  {
    "School": "Cool University",
    "Degree": "B.S Web Development",
    "Start":  "JULY 2020",
    "End":  "JULY 2020",
    "Minor":   "Minor",
    "GPA": 4.0,
  },
  {
    "School": "Cool University",
    "Degree": "B.S Web Development",
    "Start":  "JULY 2020",
    "End":  "JULY 2020",
    "Minor":   "Lorem ipsum dolor",
    "GPA": 4.0,
  },
]
const Education = () => {
  const [schools ,setSchools] = useState(objects)
  const [open, setOpen] = useState(false)
  const impactRef = useRef();
  const handleDelete = (e,index) =>{
    const update = [...schools]
    update.splice(index,1)
    setSchools(update)
  }
  const handleClick = () => {
    //open form for new education section
    setOpen(true)
  }
  const closeModal = (e) =>{
    for (let i = 0; i < fields.length; i++)
    {
      let element = document.getElementById('Education-'+fields[i]+'-field')
      element.value = ''
    }
    setOpen(false)
  }
  const addEducation = () =>{
    //get values from 
    //school, degree, start, end, location, minor,gpa

    const newEducationObject = {}
    for (let i = 0; i < fields.length; i++)
    {
      //get value for this element from dom
      let element = document.getElementById('Education-'+fields[i]+'-field')
      let value = element.value
      //set newEducation object property
      newEducationObject[fields[i]] = value 
      if(fields[i] === "GPA"){
        newEducationObject[fields[i]] = parseInt(value) 
      }
      element.value = ''
    }
    const copy = [...schools]
    copy.push(newEducationObject)
    setSchools(copy)
    setOpen(false)
  }
  useOutsideClick(impactRef, () => setOpen(false));
  return (
    <div id='Education'>
      <h2>Education</h2>
      <ul>
          {
            schools.map((object,index)=>
            <li key={index}>
              <h4 id='date'>
                {object.Start}  -  {object.End}
              </h4>
              <h4 id ='degree'>
                {object.Degree}
              </h4>
              <h3 id="school">
                {object.School}
              </h3>
              <p id='minor'>
                {object.Minor}
              </p>
              <p id='gpa'>
                GPA : {object.GPA.toFixed(2)}
              </p>
              <svg xmlns="http://www.w3.org/2000/svg"  
                id='delete'
                onClick={(e) => handleDelete(e,index)}
                viewBox="0 0 24 24" 
                width="20px" 
                height="20px"
                fill="currentColor" 
                >   
                <path d="M 10 2 L 9 3 L 5 3 C 4.448 3 4 3.448 4 4 C 4 4.552 4.448 5 5 5 L 7 5 L 17 5 L 19 5 C 19.552 5 20 4.552 20 4 C 20 3.448 19.552 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.105 5.895 22 7 22 L 17 22 C 18.105 22 19 21.105 19 20 L 19 7 L 5 7 z"/>
              </svg>
            </li>
            )
          }
      </ul>
      <div id='plus'>
      <svg fill="currentColor" 
          width="20px" 
          height="20px" 
          onClick={handleClick}
          viewBox="0 0 1920 1920" 
          xmlns="http://www.w3.org/2000/svg">
          <path d="M866.332 213v653.332H213v186.666h653.332v653.332h186.666v-653.332h653.332V866.332h-653.332V213z" fill-rule="evenodd"/>
        </svg>
        <div id='add-education' ref={impactRef} className="wrapper" style={{"display":open ? 'grid' : 'none'}}>
          <div id="heading">
              <h4>New Education</h4>
                <svg 
                  xmlns="http://www.w3.org/2000/svg"  
                  viewBox="0 0 30 30" 
                  fill='currentColor'
                  onClick={(e)=>closeModal(e)}
                  width="20px" 
                  height="20px">    
                  <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/>
                </svg>
          </div>
          <div>
            <label htmlFor="school">School</label>
            <input type="text" id="Education-School-field" name="Education-School-field" />
          </div>
          <div>
            <label htmlFor="degree">Major</label>
            <input type="text" id="Education-Degree-field" name="Education-Degree-field" />
          </div>
          <div>
            <label htmlFor="start">Start Date</label>
            <input type="text" id="Education-Start-field" name="Education-Start-field" />
          </div>
          <div>
            <label htmlFor="end">End Date</label>
            <input type="text" id="Education-End-field" name="Education-End-field" />
          </div>
          <div>
            <label htmlFor="minor">Minor</label>
            <input type="text" id="Education-Minor-field" name="Education-Minor-field" />
          </div>
          <div>
            <label htmlFor="gpa">GPA</label>
            <input type="text" id="Education-GPA-field" name="Education-GPA-field"/>
          </div>
          <input type="submit" onClick={(e)=>(addEducation(e))}/>
        </div>
      </div>
    </div>
  )
}

export default Education