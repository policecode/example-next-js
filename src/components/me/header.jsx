'use client'
import * as React from "react";
import Link from "next/link";
import { useState } from 'react';
import clsx from 'clsx'
export default function Header({ children }) {
 
  const [hiddenMenu, setHiddenMenu] = useState(true);

  const handleShowMenu = (e) => {
    console.log(e.target);
    
    setHiddenMenu(!hiddenMenu)
  }
  return (
    <header className="py-6 mx-10">
      <nav className="flex flex-row justify-between items-center">
        <Link href="/" className="basis-2/6 text-center text-xl font-semibold cursor-pointer">
          MediaSocial
        </Link>
        <ul className={`lg:basis-3/6 lg:flex lg:items-center lg:justify-end lg:gap-8 uppercase text-sm text-gray-500 font-medium ${clsx({'hidden':hiddenMenu})} fvn-mobile-top-menu-item`}>
          <li className="fvn-top-menu-item">
            <Link href="#" className="">
              Home
            </Link>
          </li>
          <li className="fvn-top-menu-item">
            <Link href="#" className="">
              Our Product
            </Link>
          </li>
          <li className="fvn-top-menu-item">
            <Link href="#" className="">
              Blog
            </Link>
          </li>
          <li className="fvn-top-menu-item">
            <Link href="#" className="">
              About
            </Link>
          </li>
          <li className="fvn-top-menu-item">
            <Link href="#" className="">
              Contact
            </Link>
          </li>
          <li className="fvn-top-menu-item">
            <Link href="#" className="">
              StyleGuide
            </Link>
          </li>
          <li className="fvn-top-menu-item">
            <Link href="#" className="" target="_blank">
              Hoang Dat Police
            </Link>
          </li>
        </ul>

        <ul className="basis-3/6 lg:basis-1/6 flex justify-end lg:justify-start items-center ml-8 sm:ml-16 uppercase text-sm text-gray-500 font-medium">
          <li className="fvn-top-menu-item">
            <Link href="#" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="fvn-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>

              <span className="mx-2">Cart</span>
              <span className="fvn-badge-circle bg-orange-400 text-white">
                99+
              </span>
            </Link>
          </li>
        </ul>
        <div onClick={handleShowMenu} className="basis-1/6 lg:hidden flex  cursor-pointer px-2 sm:px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}
