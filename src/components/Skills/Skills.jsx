import React, { useState, useRef } from 'react'
import './Skills.css'
import useOutsideClick from '../../hooks/useOutsideClick'

const placeholder = [
  'Creative Thinking',
  'Communication',
  'Listening',
  'Detail-Oriented',
  'Adaptability',
  'Problem Solving',
]

const Skills = () => {
  const [info, setInfo] = useState(placeholder)
  const [open, setOpen] = useState(false)
  const impactRef = useRef();
  const handleClose = (e) =>{
    let element = document.getElementById('new-skill')
    element.value = ''
    setOpen(false)
  }
  useOutsideClick(impactRef, () => handleClose()); //Change my dropdown state to close when clicked outside
  const handleDelete = (e, index) => {
    const update = [...info]
    update.splice(index,1)
    setInfo(update)
  }
  
  const addSkill = () => {
    let element = document.getElementById('new-skill')
    //get value
    let value = element.value
    //make copy
    //set info
    let copy = [...info]
    copy.push(value)
    setInfo(copy)
    //reset element value
    element.value = ''
    setOpen(false)
  }

  return (
    <>
      <div id ='Skills'>
        <div id="header">
          <h2>Skills</h2>
          <svg fill="currentColor" 
            onClick={(e) => setOpen(true)}
            id='add-new'
            width="25px" 
            height="25px" 
            viewBox="0 0 1920 1920" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M866.332 213v653.332H213v186.666h653.332v653.332h186.666v-653.332h653.332V866.332h-653.332V213z" fillRule="evenodd"/>
          </svg>
          
        </div>
        <ul id="skills-list">
          {
            info.map((skill,index)=>
              <li key={index}>
                <div className='skill'>
                  <p >{skill}</p>
                  <svg fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"  
                    viewBox="0 0 30 30" 
                    width="20px" 
                    height="20px"
                    className='delete'
                    onClick={(e)=>handleDelete(e,index)}>    
                    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/>
                  </svg>
                  
                </div>
              </li>
            )
          }
        </ul> 
        <div className='plus' ref={impactRef} style={{"display":open ? 'flex' : 'none'}}>
          <div id="heading">
            <h4>New Skill</h4>
            <svg 
              xmlns="http://www.w3.org/2000/svg"  
              viewBox="0 0 30 30" 
              fill='currentColor'
              onClick={(e)=>handleClose(e)}
              width="20px" 
              height="20px">    
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/>
            </svg>
          </div>
          <input type="text" id="new-skill" name="new-skill"/>
          <input type="submit" onClick={(e)=> addSkill(e)}/>
        </div>
      </div>
    </>
  )
}

export default Skills