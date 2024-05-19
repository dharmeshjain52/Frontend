import React from "react";
import { NavLink } from "react-router-dom";



export default function Dashboard(){
    return (
        <>
      <div className="flex flex-col ml-10 mt-10">  
      <h1 className="text-6xl font-bold">Dashboard</h1>
        <div role="button" class="flex items-start my-12 w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div class="grid mr-4 place-items-center">
                        <img alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg" class="relative inline-block h-40 w-40 !rounded-full  object-cover object-center" />
                    </div>
                <div>
                <h6 class="block font-sans text-5xl antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900 m-auto">
                    Emma Willever
                </h6>
                <p class="block font-sans text-lg antialiased font-normal leading-normal text-gray-700 ml-4">
                    UI/UX Designer @ Material Tailwind
                </p>
                </div>
        </div>
        <h1 className="text-3xl font-bold">Playlists</h1>
            <ul>
            <li className="w-fit">
              <NavLink to="/Playlists" className="flex items-center w-full pt-5 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div className="grid mr-4 place-items-center">
                        <img alt="thumbnail" src="https://docs.material-tailwind.com/img/face-3.jpg" className="relative inline-block w-60 h-44 !rounded-lg object-cover object-center" />
                    </div>
                <div>
                <p class="block font-sans text-2xl antialiased font-semibold leading-normal tracking-normal text-blue-gray-900">
                    Emma Willever
                </p>
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                    UI/UX Designer @ Material Tailwind
                </p>
                </div>
              </NavLink>
            </li>
            </ul>
        <h1 className="text-3xl font-bold mt-10">Liked Videos</h1>
        <ul>
            <li className="w-fit">
              <div role="button" class="flex items-center w-full pt-5 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div class="grid mr-4 place-items-center">
                        <img alt="thumbnail" src="https://docs.material-tailwind.com/img/face-3.jpg" class="relative inline-block w-60 h-44 !rounded-lg object-cover object-center" />
                    </div>
                <div>
                <p class="block font-sans text-2xl antialiased font-semibold leading-normal tracking-normal text-blue-gray-900">
                    Emma Willever
                </p>
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                    UI/UX Designer @ Material Tailwind
                </p>
                </div>
              </div>
            </li>
        </ul>        
       <h1 className="text-3xl font-bold mt-10">Comments</h1>
       <ul>
        <li>
        <a href="#" class="flex flex-row items-center h-12 transform transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 mt-2">
                    <span class="text-2xl font-black">comment 1</span>
        </a>
        <a href="#" class="flex flex-row items-center h-12 transform transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 mt-2">
                    <span class="text-2xl font-black">comment 2</span>
        </a>  
        </li>
       </ul> 
       <h1 className="text-3xl font-bold mt-10">Tweets</h1>
       <ul>
        <li>
        <a href="#" class="flex flex-row items-center h-12 transform transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 mt-2">
                    <span class="text-2xl font-black">Tweet 1</span>
        </a>
        <a href="#" class="flex flex-row items-center h-12 transform transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 mt-2">
                    <span class="text-2xl font-black">Tweet 2</span>
        </a>  
        </li>
       </ul>     
       </div>
        </>
    )
}