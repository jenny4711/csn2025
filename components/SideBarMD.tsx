"use client"

import {AlignLeft} from "lucide-react"
import {Button} from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
export default function SideBarMD() {
    return (
        // <div className="md:hidden absolute top-180 left-10 right-0 z-50  rounded-full w-12 h-12 flex items-center justify-center shadow-md">
        //     <Button className="hover:bg-white cursor-pointer flex items-center justify-center" variant="ghost" size="icon">
        //         <AlignLeft className="w-7 h-7" />
        //     </Button>
        // </div>

        <div className="grid grid-cols-2 gap-2 ">
          <Sheet key="left">
            <SheetTrigger className="md:hidden absolute top-193 left-6 right-0 z-50  rounded-full w-12 h-12 flex items-center justify-center shadow-md" asChild>
              <Button variant="outline"> <AlignLeft className="w-7 h-7" /></Button>
            </SheetTrigger>
            <SheetContent className="w-75 flex flex-col justify-end " side="left">
              <div className="space-y-8">
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when you're done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <h2>SideBarMD</h2>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <h2>SideBarMD</h2>
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </div>
            </SheetContent>
          </Sheet>
    
    </div>
    )
}
