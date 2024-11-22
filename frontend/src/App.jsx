// import { useState } from 'react'

import React from 'react'
import './App.css'
import FormInput from './components/FormInput'
import FormList from './components/FormList'
import { useEffect } from 'react'

function App() {
  const [user, setUser] = React.useState([]);
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

  return (
    <>
   <FormInput/>
   <FormList
   user = {user}
   />
   </>
  )
}

export default App
