import React from "react";
import { NavLink } from "react-router-dom";


export default function Home() {
    return (   
       <>
<div className="flex flex-col w-full">       
<div className="flex flex-row w-full">     
  <div id="search-bar" class="w-1/2 max-h-12 bg-white rounded-full shadow-lg z-10 border-2 border-gray-300 mx-auto my-8">
    <form class="flex items-center justify-center p-2">
        <input type="text" placeholder="Search here"
            class="w-full  px-2 py-1 focus:outline-none focus:border-transparent"/>
        <button type="submit"
            class="bg-gray-800 text-white rounded-full px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
            Search
        </button>
    </form>
  </div>
  <div className="my-8 h-fit mr-20 p-2 border-2 rounded-full border-gray-300">  
        <NavLink to="SignIn" className={({isActive})=>`flex flex-row items-center h-12 hover:text-gray-800 ${isActive?"text-gray-800":"text-gray-500"}`}>
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg"><i class="fa-sharp fa-solid fa-user fa-xl"></i></span>
                  <span class="text-xl font-black">Sign in/Sign up</span>
        </NavLink>
  </div>  
</div>
<div className="flex flex-col ml-16">  
        <NavLink  to="/dashboard" role="button" className="flex items-start my-12 w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
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
        </NavLink>
            <div className=" flex flex-row">
                <h1 className="text-5xl font-bold">Your Videos</h1>
                <div className="border-2 border-gray-300 ml-72 rounded-full p-4 hover:bg-gray-300">
                <i role="button" className="fa-solid fa-angle-left fa-2xl"></i>
                </div>
                <div className="border-2 border-gray-300 ml-2 rounded-full p-4 hover:bg-gray-300">
                <i role="button" className="fa-solid fa-angle-right fa-2xl"></i>
                </div>
            </div>
            <ul className="mb-5">
            <li className="w-fit">
              <div className="flex items-center w-full pt-5 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
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
              </div>
            </li>
            <li className="w-fit">
              <div className="flex items-center w-full pt-5 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
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
              </div>
            </li>
            <li className="w-fit">
              <div className="flex items-center w-full pt-5 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
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
              </div>
            </li>
            </ul>     
       </div>
</div> 

        </>
    )
}