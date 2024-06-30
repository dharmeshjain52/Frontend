import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'
import swal from 'sweetalert'

export default function SignUp(){
    const [username,setUserName] = useState('')
    const [fullName,setfullName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [avatar,setAvatar] = useState()
    const [coverImage,setCoverImage] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        swal({
            title:"Registering",
            text:"Please Be Patient",
            buttons:false
        })

        const formData = new FormData()

        formData.append("username",username)
        formData.append("fullName",fullName)
        formData.append("email",email)
        formData.append("password",password)
        formData.append("avatar",avatar,avatar.name)
        
        if(coverImage){
            formData.append("coverImage",coverImage,coverImage.name)
        } 
       

        axios.post("/api/v1/users/register",formData)
        .then((response)=>{
            if(response.data.success){
                swal("Registered Successfully", "Redirected to Login", "success")
                navigate('/SignIn')
            }
        })
        .catch((error)=>{
            swal("Error","Could Not Register","error")
        })

    }
    
    return (
<>
<div class="w-full flex flex-wrap">

  <div class="w-full md:w-1/2 flex flex-col">

    <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
        <NavLink to='/'className="text-3xl uppercase text-indigo-500">VideoLib</NavLink>        
    </div>

    <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
        <form class="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
            <div class="flex flex-col pt-4">
                <label htmlFor="name" class="text-lg">Full Name</label>
                <input required type="text" id="name" onChange={(e)=>{setfullName(e.target.value)}} placeholder="John Smith" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="flex flex-col pt-4">
                <label htmlFor="user-name" class="text-lg">Username</label>
                <input required type="text" id="user-name" onChange={(e)=>{setUserName(e.target.value)}} placeholder="Username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div class="flex flex-col pt-4">
                <label htmlFor="email" class="text-lg">Email</label>
                <input required type="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div class="flex flex-col pt-4">
                <label htmlFor="password" class="text-lg">Password</label>
                <input required type="password" id="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div class="flex flex-col pt-4">
                <label htmlFor="confirm-password" class="text-lg">Confirm Password</label>
                <input required type="password" id="confirm-password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div class="flex flex-col pt-4">
                <label htmlFor="Avatar" class="text-lg">Avatar</label>
                <input required type="file" accept="image/png,image/jpeg" onChange={(e)=>{setAvatar(e.target.files[0])}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div class="flex flex-col pt-4">
                <label htmlFor="cover-image" class="text-lg inline-flex gap-2">Cover Image <p className="text-gray-400">(optional)</p></label>
                <input type="file" accept="image/png,image/jpeg" onChange={(e)=>{setCoverImage(e.target.files[0])}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <input type="submit" value="Register" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
        </form>
        <div class="text-center pt-12 pb-12">
            <p>Already have an account? <NavLink to="/SignIn" className="underline font-semibold">Log in here.</NavLink></p>
        </div>
    </div>

  </div>

  <div class="w-1/2 shadow-2xl">
    <img class="object-cover w-full h-screen hidden md:block" src="./SignUpLogo.jpeg" alt="Background" />
  </div>
</div>
</>
    )
}