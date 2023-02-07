import React from 'react'
import {useFormik} from 'formik';

const SimpleForm = () => {
    const formik=useFormik({
        initialValues:{
            name:"",
            email:"",
            channel:"",
        },
        onSubmit:values=>{
            console.log(values);
        }
    })

    // console.log("Form Vslues",formik.values);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
        <label htmlFor='email'>E-mail</label>
              <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
        <label htmlFor='channel'>Channel</label>
              <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} />
              <button type='submit' className='form-control-btn'>Submit</button>
      </form>
    </div>
  )
}

export default SimpleForm
