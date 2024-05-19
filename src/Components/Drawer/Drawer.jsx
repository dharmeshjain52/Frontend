import React from "react";
import { NavLink } from "react-router-dom";



export default function Drawer(){
    return (
        <>
         <div class="min-h-screen flex flex-row">
          <div class="flex flex-col w-72 bg-white rounded-r-3xl overflow-hidden border-r-2">
            <div class="flex items-center justify-center h-20 shadow-md">
              <h1 class="text-3xl uppercase text-indigo-500">VideoLib</h1>
            </div>
            <ul class="flex flex-col py-4">
              <li>
                <NavLink to='/' className={({isActive})=>`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 hover:text-gray-800 ${isActive?"text-gray-800":"text-gray-500"}`}>
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg"><i class="fa-sharp fa-solid fa-house fa-xl"></i></span>
                  <span class="text-2xl font-semibold">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="Subscription" className={({isActive})=>`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 hover:text-gray-800 ${isActive?"text-gray-800":"text-gray-500"}`}>
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg"><i class="fa-solid fa-video fa-xl"></i></span>
                  <span class="text-2xl font-semibold">Subscriptions</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="DashBoard" className={({isActive})=>`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 hover:text-gray-800 ${isActive?"text-gray-800":"text-gray-500"}`}>
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg"><i class="fa-solid fa-display fa-xl"></i></span>
                  <span class="text-2xl font-semibold">DashBoard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="History" className={({isActive})=>`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 hover:text-gray-800 ${isActive?"text-gray-800":"text-gray-500"}`}>
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg"><i class="fa-sharp fa-solid fa-clock-rotate-left fa-xl"></i></span>
                  <span class="text-2xl font-semibold">History</span>
                </NavLink>
              </li>
            </ul>
            <NavLink to="SignIn" className={({isActive})=>`flex flex-row items-center h-12  transform hover:translate-x-2 transition-transform ease-in duration-200 hover:text-gray-800 ${isActive?"text-gray-800":"text-gray-500"}`}>
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg"><i class="fa-sharp fa-solid fa-user fa-xl"></i></span>
                  <span class="text-xl font-black">Sign in/Sign up</span>
                </NavLink>
          </div>
        </div>
        </>
    )
}