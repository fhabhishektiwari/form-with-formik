import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
const initialValues = {
    name: "Abhishek",
    email: "",
    channel: "",
}
const onSubmit=values=>{
    console.log(values);
}
const validationSchema=Yup.object({
    name:Yup.string().required("Required!"),
    email:Yup.string().email('Invalid email format').required('Required'),
    channel:Yup.string().required("Required"),
})
const SimpleForm = () => {
  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
      <Form>
        <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <Field
                type="text" 
                id="name" 
                name="name" 
            />
            <ErrorMessage name='name'/>
        </div>
        <div className='form-control'>
            <label htmlFor='email'>E-mail</label>
            <Field 
                type="email" 
                id="email" 
                name="email" 
            />
            <ErrorMessage name='email'/>
        </div>
        <div className='form-control'>
            <label htmlFor='channel'>Channel</label>
            <Field
                type="text" 
                id="channel" 
                name="channel" 
            />
            <ErrorMessage name='channel' className='error'/>
        </div>
        <button type='submit' className='form-control-btn'>Submit</button>
      </Form>
    </Formik>
  )
}
export default SimpleForm