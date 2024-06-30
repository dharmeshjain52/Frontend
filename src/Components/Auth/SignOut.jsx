import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateLogOut } from '../../features/AuthSlice.js';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  const handleAccountSettings = () => {
    navigate('/account')
  }
  const handleSignOut = () => {
    axios.post('/api/v1/users/logout')
    .then((response)=>{
      if(response.data.success){
        dispatch(updateLogOut())
        window.location.reload()
      }
    })
    .catch((error)=>{
      swal("Error","Could Not Sign Out","error")
      window.location.reload()
    })
  }

  return (
    <div className="relative " ref={dropdownRef}>
      <div className="mt-8 mb-2 h-fit mr-20 p-2">  
        <button className="flex flex-row items-center h-fit text-gray-500 hover:text-gray-800" onClick={toggleDropdown}>
        <div class="grid mr-4 place-items-center">
            <img alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg" class="relative inline-block h-20 w-20 !rounded-full  object-cover object-center" />
        </div>
        <i class="fa-solid fa-sort-down fa-2xl"></i>
        </button>
  </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0  w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              className="block px-4 py-2 text-lg text-gray-700  hover:text-gray-900 font-bold hover:bg-gray-100"
              role="menuitem"
              onClick={handleSignOut}
            >
            <i class="fa-solid fa-right-from-bracket fa-xl mr-2"></i>
            Sign Out
            </button>
            <button
              className="block px-4 py-2 text-lg text-gray-700  hover:text-gray-900 font-bold hover:bg-gray-100"
              role="menuitem"
              onClick={handleAccountSettings}
            >
            <i class="fa-solid fa-user-pen fa-xl mr-2"></i>
            Account
            </button>  
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;