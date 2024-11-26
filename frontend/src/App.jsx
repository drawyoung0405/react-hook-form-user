// import { useState } from 'react'

import React from 'react'
import './App.css'
import FormInput from './components/FormInput'
import FormList from './components/FormList'
import {useForm} from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from 'react'
const schema = yup.object().shape({
  first_name: yup.string().required("Last Name is required").min(3, "First name must be at least 3 characters"),
  last_name: yup.string().trim().required("Last Name is required").min(3, "Last Name must be at least 3 characters"),
  userEmail: yup.string().required("Email is required").email("Invalid email format!"), 
});


function App() {
  const [user, setUser] = React.useState([]);
  const { register, handleSubmit, formState:{ errors } } = useForm({
  resolver: yupResolver(schema)
});
  // handle Submit button 
  
  useEffect(() => {
    fetch('https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/member', {
      method: "GET"
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)
        setUser(data.data);
      });
  }, []);
  async function onSubmit() {
    
  }
  return (
    <>
      <FormInput 
        register = {register}
        errors = {errors}
        handleSubmit = {handleSubmit}
        onSubmit = {onSubmit}
      />
      <FormList
        user={user}
      />
    </>
  )
}

export default App
