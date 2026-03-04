import React from 'react'

export default function Navbar() {
  return (
    <div className='max-w-[1200px] mx-auto'> 
      <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">CS-Ticket System</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
      <li ><a className='bg-gradient-to-r from-purple-600 to-indigo-500 text-white' >+ New Ticket</a></li>
      
    </ul>
  </div>
</div>

    </div>
  )
}
