import React, { useEffect, useRef, useState } from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
const Header = () => {
    const first = useRef();

// Here  is the Yup for Validation //

const validationSchema = Yup.object({
  name: Yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'), 
    
});


    const formik = useFormik({
      initialValues: {
      name: '',
        password: '',
      
      },
      onSubmit: (values) => {
       console.log(values)
      },
    });

useEffect( ()=>{

console.log(first)
}, []
)
    
  return (
    <div>

<form  onSubmit={formik.handleSubmit} >
      <label>Name: </label>
      <input  name='name'  
      onChange={formik.handleChange}
      value={formik.values.name}  
      type="text" /> <br />
{/* Error Code */}
{formik.errors.name && formik.touched.name 
?<p className="tr">{formik.errors.name}</p>: null }
      <label>Password: </label>

      <input  onChange={formik.handleChange} 
       name='password'  
       value={formik.values.password}
       type="text" /> <br />
       {/* Error Code */}
{formik.errors.password && formik.touched.password 
?<p className="tr">{formik.errors.password}</p>: null }


      <label >Profile Photo: </label>

      <input 
       name='profilephoto'  
       onChange={(e)=> 
        formik.setFieldValue(" profilephoto", e.target.files[0]) } 
       value={formik.values.profilephoto}
       type="file" /> <br />
          {/* Error Code */}
{formik.errors.profilephoto && formik.touched.profilephoto 
?<p className="tr">{formik.errors.profilephoto}</p>: null }
<button  type='submit' >Submit</button>
</form>
    </div>
  )
}

export default Header
