import React from "react";



export default function Subscriptions(){
    return(
        <>
    <div className="flex flex-row">     
        <div className="w-screen flex flex-col items-stretch mt-16 mb-auto ">
            <div className="flex flex-row gap-x-96">
                <h1 className="text-6xl font-black mt-auto mb-20 ml-16">Latest</h1>
                <a href="#" class="flex flex-row items-center h-12 transform transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 mt-2">
                    <span class="text-2xl font-black">Manage</span>
                </a> 
            </div>
        <ul className="ml-20 mb-auto items-center justify-center"> 
            <li>
              <div role="button" class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div class="grid mr-4 place-items-center">
                        <img alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg" class="relative inline-block h-24 w-24 !rounded-full  object-cover object-center" />
                    </div>
                <div>
                <h6 class="block font-sans text-2xl antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Emma Willever
                </h6>
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                    UI/UX Designer @ Material Tailwind
                </p>
                </div>
              </div>
            </li>  
            <li>
              <div role="button" class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div class="grid mr-4 place-items-center">
                        <img alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg" class="relative inline-block h-24 w-24 !rounded-full  object-cover object-center" />
                    </div>
                <div>
                <h6 class="block font-sans text-2xl antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Emma Willever
                </h6>
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                    UI/UX Designer @ Material Tailwind
                </p>
                </div>
              </div>
            </li>  
            <li>
              <div role="button" class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div class="grid mr-4 place-items-center">
                        <img alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg" class="relative inline-block h-24 w-24 !rounded-full  object-cover object-center" />
                    </div>
                <div>
                <h6 class="block font-sans text-2xl antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Emma Willever
                </h6>
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