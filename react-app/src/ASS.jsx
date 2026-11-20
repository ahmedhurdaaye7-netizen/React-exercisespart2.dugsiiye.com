import React, { useState } from 'react'
import './app.css'
const Form = () => {
    const [formData,setFormData] = useState({
        username:'',
        email: ''
    })
    const [errors,setErrors] = useState({})
    const handleSubmit = (e)=>{

          e.preventDefault();
          const validationErros = validationForm()
          console.log(validationErros)
        //   console.log(formData)
        if(Object.keys(validationErros).length===0){
            console.log('sucess')
        }else{
       setErrors(validationErros)
        }
    }
    const handleChange = (e)=>{
        const{ name,value} = e.target;
        setFormData((prev)=>({...prev,[name]:value}))
        if(name=== 'email' && !value.includes('@')){
            setErrors((prev)=>({...prev,eamil:'email is invalid'}))
        } else{
            setErrors((prev)=>({...prev,[name]:''}))
        }

    }
  const validationForm = ()=>{
    const errors = {};
    if(!formData.username.trim()){
        errors.username = 'username is required'
    }
    return errors;
   


  }

   
  return (
    <div>
       <form onSubmit={handleSubmit}>
        <h1>registration</h1>
        <input type="text"  name='username'
          value={formData.username}  onChange={handleChange} />
          {errors.username && <p className='error'>{errors.username}</p>}
        
        <input type="email"    name='email'
          value={formData.email}  onChange={handleChange} />
           {errors.email && <p className='error'>{errors.email}</p>}
        <button type='submit'>submit</button>



       </form>
      
    </div>
  )
}

export default Form
