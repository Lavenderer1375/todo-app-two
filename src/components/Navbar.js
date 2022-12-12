import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <nav className="w-full shadow-xl top-0 left-0 bg-stone-900 text-indigo-400">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold mr-5 text-4xl cursor-pointer flex items-center font[Poppins]">
          <span className="text-4xl mr-1 pt-2">
            <ion-icon name="logo-bitbucket"></ion-icon>
          </span>
          <Link to="/">ShoppinGo</Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-5xl absolute right-6 top-4 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? 'close' : 'menu-outline'}></ion-icon>
        </div>
        <ul
          className={`md:flex bg-stone-900 md:items-center md:pb-0 pb-9 absolute md:static md:z-auto left-0 w-full rounded-b-xl text-center text-2xl md:w-auto md:pl-0 transition-all duration-500 ease-in ${
            open ? 'left-0' : 'left-[-1200px]'
          } `}
        >
          <input
            className="w-full md:w-auto m-2 hover:shadow-none hover:placeholder:text-white hover:bg-indigo-200 duration-300 border-indigo-400 rounded p-2 shadow-inner shadow-stone-900"
            type="search"
            placeholder="Search..."
          />
          <button className="p-2 w-1/2 bg-indigo-400 text-stone-900 md:w-auto rounded-lg hover:translate-x-1 hover:cursor-pointer hover:bg-indigo-400 hover:text-stone-900 duration-300 ease-in">
            <ion-icon name="search-outline"></ion-icon>
          </button>
          <li className="p-2 w-full rounded-lg hover:translate-x-1 hover:cursor-pointer hover:bg-indigo-400 hover:text-stone-900 transition duration-300 ease-in">
            <Link to="/admin">Admin Panel</Link>
          </li>
          <li className="p-2 w-full rounded-lg hover:translate-x-1 hover:cursor-pointer hover:bg-indigo-400 hover:text-stone-900 transition duration-300 ease-in">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-2 w-full h-100% rounded-lg hover:translate-x-1 hover:cursor-pointer hover:bg-indigo-400 hover:text-stone-900 transition duration-300 ease-in">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
