import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="navbar bg-base-100 shadow-sm px-4 py-2">

        {/* Left - Logo */}
        <div className="flex-1">
          <a className="btn btn-ghost text-xl normal-case">
            CS-Ticket System
          </a>
        </div>

        {/* Right - Desktop Menu */}
        <div className="flex-none hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
            <li>
              <a className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-3 py-1 rounded">
                + New Ticket
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex-none md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-base-100 shadow mt-1 flex flex-col gap-2 p-4">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
          <li>
            <a className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-3 py-1 rounded w-full text-center">
              + New Ticket
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}