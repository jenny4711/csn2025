"use client"
import {usePathname} from "next/navigation"


export default function NavBar({title}:{title:{title:string,url:string}[],url:string}) {
  const pathname = usePathname();

  return <div className="h-18 w-full flex justify-first items-center ml-5">
    <ul className='flex flex-row space-x-6'>
      {title.map((item) => (
        <li key={item.title}>
          <a 
            className={`size-16 ${pathname === item.url ? 'text-black' : 'text-gray-400'} hover:text-black transition-colors`}
            href={item.url}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
}