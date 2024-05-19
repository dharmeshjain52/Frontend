import React from "react";


export default function Tweet(){
    return (
        <>
        <div className="flex flex-row">
        <div class="min-h-screen flex flex-row">
          <div class="flex flex-col w-72 bg-white rounded-r-3xl overflow-hidden border-r-2">
            <div class="flex items-center justify-center h-20 shadow-md">
              <h1 class="text-3xl uppercase text-indigo-500">VideoLib</h1>
            </div>
            <ul class="flex flex-col py-4">
              <li>
                <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg"><i class="fa-sharp fa-solid fa-house fa-xl"></i></span>
                  <span class="text-2xl font-semibold">Home</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg"><i class="fa-solid fa-video fa-xl"></i></span>
                  <span class="text-2xl font-semibold">Subscriptions</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg"><i class="fa-solid fa-display fa-xl"></i></span>
                  <span class="text-2xl font-semibold">DashBoard</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg"><i class="fa-sharp fa-solid fa-clock-rotate-left fa-xl"></i></span>
                  <span class="text-2xl font-semibold">History</span>
                </a>
              </li>
            </ul>
            <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg"><i class="fa-sharp fa-solid fa-user fa-xl"></i></span>
                  <span class="text-xl font-black">Sign in/Sign up</span>
                </a>
          </div>
        </div>
        <div className="flex flex-row">     
        <div className="w-screen flex flex-col items-stretch mt-16 mb-auto ">
        <h1 className="text-6xl font-black mt-auto mb-5 ml-12">Tweets</h1>
            <form class="max-w-xl ml-16">
                <label for="message" class="block mb-2 text-xl font-medium text-gray-90">Add Tweet</label>
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Leave a comment..."></textarea>
            </form>

        <ul className="ml-12 my-auto items-center justify-center"> 
            <li className="w-fit">
                <div role="button" class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div class="grid mr-4 place-items-center">
                        <img alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg" class="relative inline-block h-16 w-16 !rounded-full  object-cover object-center" />
                    </div>
               <div className="">
                <div className="flex flex-row mt-6">     
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                    @ Material Tailwind
                </p>
                <p class="ml-2 block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                    time posted
                </p>
              </div>  
              <p class="ml-2 block font-sans text-xl antialiased font-medium leading-normal tracking-normal text-blue-gray-900">
                    Emma Willeverkhghjkdhgjkhfxjkgjxfhgjkfhgjkhfkjghfjkgjkfchgjkfhgjkfhgjkfhgjkh
                </p>
              <div className="flex flex-row items-start mt-2">
                <a title="like" href="#" class="flex flex-row rounded-full  h-8 transform transition-transform ease-in duration-200 bg-gray-200 hover:bg-gray-300 my-auto mr-4">
                  <span class="text-xl p-1"><i class="fa-regular fa-thumbs-up"></i></span>
                </a>
                <p className="mx-1 my-auto">likes</p>   
              </div>  
              </div>  
                </div>
            </li>
            <li className="w-fit">
                <div role="button" class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div class="grid mr-4 place-items-center">
                        <img alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg" class="relative inline-block h-16 w-16 !rounded-full  object-cover object-center" />
                    </div>
               <div className="">
                <div className="flex flex-row mt-6">     
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                    @ Material Tailwind
                </p>
                <p class="ml-2 block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                    time posted
                </p>
              </div>  
              <p class="ml-2 block font-sans text-xl antialiased font-medium leading-normal tracking-normal text-blue-gray-900">
                    Emma Willeverkhghjkdhgjkhfxjkgjxfhgjkfhgjkhfkjghfjkgjkfchgjkfhgjkfhgjkfhgjkh
                </p>
              <div className="flex flex-row items-start mt-2">
                <a title="like" href="#" class="flex flex-row rounded-full  h-8 transform transition-transform ease-in duration-200 bg-gray-200 hover:bg-gray-300 my-auto mr-4">
                  <span class="text-xl p-1"><i class="fa-regular fa-thumbs-up"></i></span>
                </a>
                <p className="mx-1 my-auto">likes</p>   
              </div>  
              </div>  
                </div>
            </li>
            <li className="w-fit">
                <div role="button" class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div class="grid mr-4 place-items-center">
                        <img alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg" class="relative inline-block h-16 w-16 !rounded-full  object-cover object-center" />
                    </div>
               <div className="">
                <div className="flex flex-row mt-6">     
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                    @ Material Tailwind
                </p>
                <p class="ml-2 block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                    time posted
                </p>
              </div>  
              <p class="ml-2 block font-sans text-xl antialiased font-medium leading-normal tracking-normal text-blue-gray-900">
                    Emma Willeverkhghjkdhgjkhfxjkgjxfhgjkfhgjkhfkjghfjkgjkfchgjkfhgjkfhgjkfhgjkh
                </p>
              <div className="flex flex-row items-start mt-2">
                <a title="like" href="#" class="flex flex-row rounded-full  h-8 transform transition-transform ease-in duration-200 bg-gray-200 hover:bg-gray-300 my-auto mr-4">
                  <span class="text-xl p-1"><i class="fa-regular fa-thumbs-up"></i></span>
                </a>
                <p className="mx-1 my-auto">likes</p>   
              </div>  
              </div>  
                </div>
            </li>
          </ul>
        </div> 
       </div> 
        </div>
        </>
    )
}