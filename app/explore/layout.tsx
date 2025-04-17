"use client"
 import NavBar from "@/components/NavBar"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
const items=[
  {title:"Front page",url:"/explore"},
  {title:"Job board",url:"/explore/job-board"},
  {title:"Activity",url:"/explore/activity"},
  {title:"Gift shop",url:"/explore/gift-shop"},
  {title:"Pricing",url:"/explore/pricing"},
  {title:"About",url:"/explore/about"},
  
]

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  return <div>
    <div className="flex flex-row justify-between items-center">
    <NavBar title={items} url="/explore"  />
    <Button className='rounded-full bg-black text-white mr-35' onClick={()=>{
      router.push("/auth/signup")
    }}>
      <p>Log in or sign up</p>
    </Button>
    </div>
    <div className="flex flex-1">
      <main className="flex-1 overflow-auto  ">
        {children}
        <span className="hidden" suppressHydrationWarning>{new Date().toLocaleTimeString()}</span>
      </main>
    </div>
  </div>
}