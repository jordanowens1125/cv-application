import React, {useState, useRef} from 'react'
import './Contact.css'
import useOutsideClick from '../../hooks/useOutsideClick'
const fields = [
  'Phone',
  'Email',
  'Link'
]

const placeholder = {
  Phone:'555-555-5555',
  Email: 'info@website.com',
  Link: 'website.com',  
}

const Contact = () => {
  const [info, setInfo] = useState(placeholder)
  const [open, setOpen] = useState(false)
  const impactRef = useRef();
  const handleChange = (e) =>{
    const inputValue = e.currentTarget.value
    const inputTitle = e.currentTarget.id
    const newInfo = {...info}
    newInfo[inputTitle]=inputValue
    setInfo(newInfo)
  }
  const handleClose = () =>{
    for (let i= 0; i < fields.length;i++)
    {
      const element = document.getElementById(fields[i])
      element.value = ''
    }
    setOpen(false)
  }
  useOutsideClick(impactRef, () => handleClose());
  return (
    <>
      <div id="Contact">
        <div id='header'>
          <svg fill="currentColor"  
            viewBox="-5 0 32 32" 
            version="1.1" 
            onClick={(e)=>setOpen(true)}
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <title>pencil</title> <path d="M18.344 4.781l-3.406 3.063s1.125 0.688 2.156 1.656c1 0.969 1.719 2.063 1.719 2.063l2.906-3.469s-0.031-0.625-1.406-1.969c-1.406-1.344-1.969-1.344-1.969-1.344zM7.25 21.938l-0.156 1.5 10.813-11.25s-0.719-1-1.594-1.844c-0.906-0.875-1.938-1.563-1.938-1.563l-10.813 11.25 1.688-0.094 0.188 1.813zM0 26.719l2.688-5.5 1.5-0.125 0.125 1.719 1.813 0.25-0.188 1.375-5.438 2.75z"/> </g>
          </svg>
          <h2>Contact</h2>
        </div>
        <div>
          <h3 >Phone</h3>
          <p>{info.Phone}</p>
        </div>
        <div>
          <h3 >Email</h3>
          <p>{info.Email} </p>
        </div>
        <div>
          <h3 >Online</h3>
          <p>{info.Link}</p>
        </div>
      </div>
      <div id='plus'>
        {
        <div id='update-contact' ref={impactRef} className="wrapper" style={{"display":open ? 'flex' : 'none'}}>
          <div id='header'>
            <h4>
              Update Contact
            </h4>
            <svg 
              xmlns="http://www.w3.org/2000/svg"  
              onClick={(e)=>handleClose(e)}
              viewBox="0 0 30 30" 
              fill='currentColor'
              width="20px" 
              height="20px">    
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/>
            </svg>
          </div>
          
          <label htmlFor="Phone-field">Phone</label>
          <input type="text" id="Phone" name="Phone-field" onChange={handleChange}/>
          
          <label htmlFor="Email-field">Email</label>
          <input type="text" id="Email" name="Email-field" onChange={handleChange}/>

          <label htmlFor="Link-field">Link</label>
          <input type="text" id="Link" name="Link-field" onChange={handleChange}/>
        </div>
      }
      </div>
    </>
  )
}

export default Contact