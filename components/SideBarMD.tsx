"use client"

import {AlignLeft} from "lucide-react"
import {Button} from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,

  SheetTrigger,
} from "@/components/ui/sheet"

import Link from "next/link"
import { NoteIcon } from "../icons/Note"
import { UserIcon } from "../icons/User"
import { SendIcon } from "../icons/Send"
import { BrowserIcon } from "../icons/Browser"
import { useDataContext } from "@/context/DataContext"
const items = [
  {
    title: "Explore",
    url: "/explore",
    icon: NoteIcon,
  },
  {
    title: "profile",
    url: "/profile",
    icon: UserIcon,
  },
 
  {
    title: "replies",
    url: "/replies",
    icon: SendIcon,
  },
  
  {
    title: "Sites",
    url: "/sites",
    icon: BrowserIcon,
  },
]
export default function SideBarMD() {
    const { setMoveTo } = useDataContext();
    return (
       
    
        <div className="grid grid-cols-2 gap-2 relative">
          <Sheet key="left" >
            <SheetTrigger className="md:hidden absolute top-193 left-6 right-0 z-50  rounded-full w-12 h-12 flex items-center justify-center shadow-md " asChild>
              <Button variant="outline"> <AlignLeft className="w-7 h-7" /></Button>
            </SheetTrigger>
            <SheetContent className="w-75 flex flex-col justify-end " side="left">
              <div className="space-y-4">
               
                <div className="grid gap-7 pb-5 pl-8">
                  {
                    items.map((item,index) => (
                      <div key={index} className="grid grid-cols-6 items-center gap-4">
                        <item.icon className="w-6 h-6 text-black" />
                        <Link className="flex  flex-row text-sm" href={item.url}>
                        
                        {item.title}
                        </Link>
                      </div>
                    ))
                  }
               
                  <div className="flex justify-start  h-12">
                    <Button className="px-16 py-4 py-6 rounded-3xl" variant="outline" type="submit">Create a profile</Button>
                   
                  </div>
                  <div className="flex flex-row justify-start gap-5 pb-15  ">
                    {
                      [["Twitter","Discord"],["FAQ","Support"],["Terms","Privacy"]].map((item,index) => (
                        <div key={index} className="flex flex-col ">
                          <a href="/" className="text-xs text-gray-400">
                            {item[0]}
                          </a>
                          <a href="/" className="text-xs text-gray-400">
                            {item[1]}
                          </a>
                        </div>
                      ))
                    }

                    
                  </div>
              
                  <SheetClose className="md:hidden absolute top-196 left-5 right-0 z-50  rounded-full w-12 h-12 flex items-center justify-center shadow-md " asChild>
                    <Button variant="outline" type="submit"><AlignLeft className="w-7 h-7" /></Button>
                  </SheetClose>
                </div>
               
              </div>
            </SheetContent>
          </Sheet>
    
    </div>

    )
}