'use client';

import {  ArrowLeft,StickyNote } from "lucide-react"
import Link from "next/link"
import { SearchIcon } from "../icons/Search"

import { BrowserIcon } from "../icons/Browser"
import { useDataContext } from "@/context/DataContext"
import { NoteIcon } from "../icons/Note"
import { UserIcon } from "../icons/User"
import { SendIcon } from "../icons/Send"
import { FeedIcon ,PlusIcon} from "../icons/Feed"

// Menu items.
const items = [
  
  {
    title: "explore",
    url: "/explore",
    icon: NoteIcon,
  },
  {
    title: "profile",
    url: "/profile",
    icon: UserIcon,
  },
  {
    title: "search",
    url: "/search",
    icon: SearchIcon,
  },
  {
    title:"replies",
    url:"/replies",
    icon: SendIcon,
   },
  {
    title: "following",
    url: "/following",
    icon: FeedIcon,
  },
  {
    title: "sites",
    url: "/sites",
    icon: BrowserIcon,
  },

  
]

export function AppSidebar() {
  const {moveTo,setMoveTo} = useDataContext();
  return (
    <div className="w-15 bg-light-500 text-white h-full flex flex-col">
      <div className="p-4">
        <Link href="/">
          <ArrowLeft className="w-5 h-5 text-black" />
        </Link>
      </div>
      
      {/* <div className="p-4">
        <Link onClick={()=>setMoveTo("home")} href="/">
        <StickyNote className="w-5 h-5 text-black" />
        </Link>
      </div> */}

      <nav className="flex-1 flex items-center justify-center">
        <ul className="flex flex-col gap-4">
          {items.map((item) => (
            <li key={item.title}>
              <Link
                href={item.url}
                className="group relative flex items-center gap-2 p-2  rounded"
              >
                <item.icon className="w-5 h-5 text-black" />
                {/* <item.icon className="w-5 h-5 text-black" /> */}
                <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.title}
                </span>
              </Link>
            </li>
           
          ))}
          {
            moveTo === "home" && <li className="mb-20">
              <Link   className="group relative flex items-center gap-2 p-2  rounded" href="/create">
              <PlusIcon width={16} height={16} fill="black" />
                {/* <CirclePlus className="w-5 h-5 text-white bg-black rounded-full" /> */}
              </Link>
            </li>
          }
        </ul>
      </nav>
      <div className="p-4">
        <Link onClick={()=>setMoveTo("home")} href="/">
        <StickyNote className="w-5 h-5 text-black" />
        </Link>
      </div>
    </div>
  )
}
