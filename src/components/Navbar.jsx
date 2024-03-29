// import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const menuItems = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'About',
    to: '/about',
  },
  {
    name: 'Contact',
    to: '/contact',
  },
];

export default function Navbar() {

  return (
    <>
  <div className="">
    <div className="bg-zinc-500">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 lg:px-8 ">
            <ul className="inline-flex space-x-10 ">
              {menuItems.map((item) => (
               <li key={item.name}>
               <NavLink className={(e) => {return e.isActive ? "button_color":""}} to={item.to}> {item.name}</NavLink>  
                     {/* here, red is css classname */}
             </li>
              ))}
            </ul>

        </div>
    </div>
  </div>
    </>
  )
}

