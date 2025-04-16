"use client"
import {usePathname} from "next/navigation"
import { useState } from 'react';
import NavMD from './NavMD';

export default function NavBar({title}:{title:{title:string,url:string}[],url:string}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return <div className="h-18 w-full flex  justify-first items-center ml-0 md:ml-0  ">
    {/* <ul className='flex flex-row space-x-6 '> */}
    <ul className={`flex flex-row space-x-6 hidden md:flex `}>
      {title.map((item) => (
        <li key={item.title}>
          <a 
            className={`text-14 font-light ${pathname === item.url ? 'text-black' : 'text-gray-400'} hover:text-black transition-colors`}
            href={item.url}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
    <div className="flex items-center  md:hidden">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <NavMD />
             
            </div>
          </div>
  </div>
}