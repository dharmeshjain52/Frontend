import React from "react";

export default function Video() {
    return (
     <> 
 <div className="flex flex-col ml-10">          
  <div className="overflow-hidden mx-auto mt-6" style={{width:1500,height:700}}>      
    <video className="rounded-lg w-full h-full border-2 border-gray-100" controls controlsList="nodownload" autoPlay>
        <source src="https://flowbite.com/docs/videos/flowbite.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
    </video>
  </div>
  <h1 className="text-3xl mx-8 my-5 font-bold">Title : with Spaces</h1>

  <div className="flex flex-row items-start mx-8">  
    <div title="Go to channel" role="button" class="flex items-center w-fit leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div class="grid mr-4 place-items-center">
                        <img alt="image" src="https://docs.material-tailwind.com/img/face-3.jpg" class="relative inline-block w-30 h-20 !rounded-full object-cover object-center" />
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
     <a href="#" class="flex flex-row rounded-full  h-12 transform transition-transform ease-in duration-200 bg-gray-400 hover:bg-gray-300 my-auto mx-8">
          <span class="text-xl p-3">Subscribe</span>
     </a> 
     <a title="like" href="#" class="flex flex-row rounded-full  h-12 transform transition-transform ease-in duration-200 bg-gray-200 hover:bg-gray-300 my-auto mr-4">
          <span class="text-xl p-3"><i class="fa-regular fa-thumbs-up"></i></span>
     </a> 
     <a title="dislike" href="#" class="flex flex-row rounded-full  h-12 transform transition-transform ease-in duration-200 bg-gray-200 hover:bg-gray-300 my-auto mr-4">
          <span class="text-xl p-3"><i class="fa-regular fa-thumbs-down"></i></span>
     </a> 
     <a title="add to playlist" href="#" class="flex flex-row rounded-full  h-12 transform transition-transform ease-in duration-200 bg-gray-200 hover:bg-gray-300 my-auto">
          <span class="text-xl p-3"><i class="fa-solid fa-list"></i></span>
     </a>
     <a title="comment" href="#" class="flex flex-row rounded-full  mx-3 h-12 transform transition-transform ease-in duration-200 bg-gray-200 hover:bg-gray-300 my-auto">
          <span class="text-xl p-3"><i class="fa-solid fa-comment"></i></span>
     </a> 
  </div>
  <div className="bg-gray-300 max-w-full h-fit rounded-lg mt-6 ml-8">
      <div className="flex flex-row my-3 mx-2">
      <h1 className="text-bold">123,456,789</h1>
      <h1 className="mx-1">views</h1>
      <h1 className="mx-2">Time Posted</h1>
      <h1>hashtags</h1>
      </div>
      <div className="my-3 mx-2">
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, 
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
  </div>  
</div>
     </>
    );
  }