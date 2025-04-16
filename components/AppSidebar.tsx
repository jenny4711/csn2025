'use client';
import SideBarMD from "./SideBarMD";
import { ArrowLeft, StickyNote } from "lucide-react"
import Link from "next/link"
import { SearchIcon } from "../icons/Search"
import { BrowserIcon } from "../icons/Browser"
import { useDataContext } from "@/context/DataContext"
import { NoteIcon } from "../icons/Note"
import { UserIcon } from "../icons/User"
import { SendIcon } from "../icons/Send"
import { FeedIcon, PlusIcon } from "../icons/Feed"

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
    title: "replies",
    url: "/replies",
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
  const { moveTo, setMoveTo } = useDataContext();
  
  return (
    <div className=" h-screen w-13 flex flex-col   items-center py-5  fixed top-0 left-0 right-0 z-50 ">
      {/* Top arrow */}
      <div className=" hidden md:block mb-8 mt-2.5">
        <Link href="/">
          <ArrowLeft className="w-4 h-4 text-black" />
        </Link>
      </div>

      {/* Sidebar navigation */}
      <div className=" hidden md:block  flex-1 flex items-center content-center ">
        <nav className="  flex flex-col gap-2.5  ">
          <ul className="flex flex-col gap-2.5 ">
          {items.map((item) => (
            <li key={item.title} className="list-none">
              <Link
                href={item.url}
                className="group relative flex items-center gap-2 p-2 rounded hover:bg-gray-100 transition-colors"
              >
                <item.icon className="w-5.7 h-5.7 text-gray-500" />
                <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
          {moveTo === "home" && (
            <li className="list-none">
              <Link href="/create" className="group relative flex items-center gap-2 p-2 rounded hover:bg-gray-100 transition-colors">
                <PlusIcon width={16} height={16} fill="black" />
              </Link>
            </li>
          )}
          </ul>
        </nav>
      </div>
      {/*mobile*/}
<SideBarMD />
      {/* Bottom sticky note */}
      <div className=" hidden md:block mt-8">
        <Link onClick={() => setMoveTo("home")} href="/">
          <StickyNote className="w-5 h-5 text-black" />
        </Link>
      </div>






    </div>
  )
}
