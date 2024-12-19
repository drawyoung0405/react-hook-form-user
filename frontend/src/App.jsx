// import { useState } from 'react'

import React from 'react'
import './App.css'
import FormInput from './components/FormInput'
import FormList from './components/FormList'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from 'react'
const schema = yup.object().shape({
  first_name: yup.string().required("First Name is required").min(3, "First name must be at least 3 characters"),
  last_name: yup.string().trim().required("Last Name is required").min(3, "Last Name must be at least 3 characters"),
  email: yup.string().required("Email is required").email("Invalid email format!"),
  address: yup.string().required("address is required"),
  city: yup.string().required("city is required"),
  district: yup.string().required("district is required")
});


function App() {
  const [user, setUser] = React.useState([]);
  const [editId, setEditId] = React.useState(null)
  const { register, handleSubmit, reset,  formState: { errors }} = useForm({
    mode: 'all',
    resolver: yupResolver(schema)
  });

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
  // async function onSubmit(dataUser) {
  //   const newRegister = {
  //     data: {
  //       avatar: "https://cdn.fakercloud.com/avatars/ManikRathee_128.jpg",
  //       firstName: dataUser["first_name"],
  //       lastName: dataUser["last_name"],
  //       email: dataUser["email"],
  //       position: "Front End Engineer",
  //       dateJoin: "2024-10-24",
  //       location: [
  //         {
  //           address: dataUser["address"],
  //           city: dataUser["city"],
  //           district: dataUser["district"],
  //         },
  //       ],
  //     },
  //   };
  //   const res = await fetch(
  //     "https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/member",
  //     {
  //       method: "post",
  //       headers: { "content-type": "application/json" },
  //       body: JSON.stringify(newRegister),
  //     }
  //   );
  //   const data = await res.json();
  //   setUser((prevState) => {
  //     return [...prevState, data.data];
  //   });
  // }
  const onSubmit = async (dataUser) => {
    if (editId) {
      const updatedUser = {
        ...user,
        firstName: dataUser.first_name,
        lastName: dataUser.last_name,
        email: dataUser.email,

      };
      await fetch(`https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/member/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: updatedUser }),
      });
      const updatedList = user.map((item) =>
        item._id === editId ? { ...item, ...updatedUser } : item
      );
      setUser(updatedList);
      setEditId(null);
    } else {
      const newUser = {
        firstName: dataUser.first_name,
        lastName: dataUser.last_name,
        email: dataUser.email,
      };
      const res = await fetch('https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/member', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: newUser }),
      });
      const responseData = await res.json();
      setUser([...user, responseData.data]);
    }
    reset();
  };
  const handleEdit = (id) => {
    const userToEdit = user.find((item) => item._id === id);
    if (userToEdit) {
      reset({
        first_name: userToEdit.firstName,
        last_name: userToEdit.lastName,
        email: userToEdit.email,
      });
      setEditId(id); // Lưu ID user đang chỉnh sửa
    }
  };

  async function deleteUser(id) {
    try {
      await fetch(
        `https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/member/${id}`,
        {
          method: "delete",
        }
      );
      const newUser = user.filter((item) => item._id !== id);
      setUser(newUser);
    } catch (err) {
      // do something
      console.log(err);
    }
    
  }

  return (
    <>
      <FormInput
         register={register}
         handleSubmit={handleSubmit}
         errors={errors}
         onSubmit={onSubmit}
      />
      <FormList
       user={user}
       deleteUser={deleteUser}
      //  updateUser={updateUser}
      handleEdit={handleEdit}
      />
    </>
  );
}

export default App;
