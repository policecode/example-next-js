"use client";
import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
export default function Header({ children }) {
  const [hiddenMenu, setHiddenMenu] = useState(true);

  const handleShowMenu = (e) => {
    console.log(e.target);
    setHiddenMenu(!hiddenMenu);
  };
  return (
    <header className="py-6 bg-[#4e5a87]">
      <nav className="flex flex-row justify-between items-center">
        <Link
          href="/"
          className="basis-1/6 text-center text-xl text-white font-semibold cursor-pointer"
        >
          MediaSocial
        </Link>
        <ul
          className={`lg:basis-4/6 lg:flex lg:items-center lg:justify-end lg:gap-8 uppercase text-sm  text-white font-medium ${clsx(
            { hidden: hiddenMenu }
          )} fvn-mobile-top-menu-item`}
        >
          <li className="fvn-top-menu-item">
            <Link href="/" className="">
              Youtube Downloader
            </Link>
          </li>
          {/* <li className="fvn-top-menu-item">
            <Link href="#" className="">
              Product
            </Link>
          </li>
          <li className="fvn-top-menu-item">
            <Link href="#" className="">
              Blog
            </Link>
          </li> */}
        </ul>

        <ul className="basis-3/6 lg:basis-1/6 flex justify-end lg:justify-start items-center ml-8 sm:ml-16 uppercase text-sm text-white font-medium">
          <li className="">
            <Link href="/" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
{/* 
              <span className="fvn-badge-circle bg-orange-400 text-white">
                99+
              </span> */}
            </Link>
          </li>
        </ul>
        <div
          onClick={handleShowMenu}
          className="basis-1/6 lg:hidden flex text-white cursor-pointer px-2 sm:px-4"
        >
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
