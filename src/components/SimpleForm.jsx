import React from 'react'
import {useFormik} from 'formik';

const initialValues = {
    name: "Abhishek",
    email: "",
    channel: "",
}
const onSubmit=values=>{
    console.log(values);
}

const validate = values => {
    // values.name values.email values.channel
    // errors.name errors.email errors.channel
    // errors.name='This field is required'
    let errors = {}

    if (!values.name) {
        errors.name = "Required";
    } if (!values.email) {
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    } if (!values.channel) {
        errors.channel = "Required";
    }
    return errors;
}

const SimpleForm = () => {
    const formik=useFormik({
        initialValues,
        onSubmit,
        validate,
    })

    // console.log("Form Values",formik.values);
    console.log("Form Errors",formik.errors);

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
