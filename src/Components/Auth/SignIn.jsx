import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'
import swal from "sweetalert";
import {useDispatch, useSelector} from 'react-redux'
import { updateLogIn } from "../../features/AuthSlice";

export default function SignIn(){
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const disableInput = (id1,id2)=>{
        let inp1 = document.getElementById(id1);
        inp1.addEventListener("input", function () {
        document.getElementById(id2).disabled = this.value != "";
        document.getElementById(id1).setAttribute('required',true)
});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();

        swal({
            title:"Logging in",
            text:"Please Be Patient",
            buttons:false
        })

        const formData = {}
        
        if(username)  formData.username = username
        else formData.email = email

        formData.password = password

        JSON.stringify(formData)

        axios.post("/api/v1/users/login",formData)
        .then((response)=>{
            if(response.data.success){
                swal?.close()
                dispatch(updateLogIn())
                navigate("/")
            }
        })
        .catch((error)=>{
            swal("Error","Invalid Credentials\nPlease try again","error")
            setPassword('')
        })

    }
    return (
        <>
<div class="w-full flex flex-wrap">

  <div class="w-full md:w-1/2 flex flex-col">

    <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
        <NavLink to='/'className="text-3xl uppercase text-indigo-500">VideoLib</NavLink>
    </div>

    <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
        <p class="text-center text-3xl">Welcome.</p>
        <form class="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
            <div class="flex flex-col pt-4">
                <label htmlFor="email" class="text-lg">Email</label>
                <input type="email" id="email" value={email} placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" onChange={(e)=>{disableInput("email","username");setEmail(e.target.value)}}/>
            </div>
            
            <div class="flex flex-col pt-4">
                <h2>(or)</h2>
                <label htmlFor="username" class="text-lg">Username</label>
                <input type="text" id="username" value={username} placeholder="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" onChange={(e)=>{disableInput("username","email");setUsername(e.target.value)}}/>
            </div>

            <div class="flex flex-col pt-4">
                <label htmlFor="password" class="text-lg">Password</label>
                <input type="password" id="password" value={password} placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" onChange={(e)=>setPassword(e.target.value)} required/>
            </div>

            <input type="submit" value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"/>
        </form>
        <div class="text-center pt-12 pb-12">
            <p>Don't have an account? <NavLink to="/Signup" className="underline font-semibold">Register here.</NavLink></p>
        </div>
    </div>

  </div>

  <div class="w-1/2 shadow-2xl">
    <img class="object-cover w-full h-screen hidden md:block" src="./SignUpLogo.jpeg"/>
  </div>
</div>
        </>
    )
}