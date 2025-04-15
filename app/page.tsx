"use client";

import Image from "next/image";
import {useRouter} from "next/navigation"
import {useState,useEffect,useContext} from "react"
import {useDataContext} from "@/context/DataContext"
//page - sidebar 
//explore , profile , settings,search,following,sites
//navbar - 왼쪽화살표,dashboard,Domains,tempates or fromt page job board activity gift shop Price about (특정페이지에따라 변경됨)
import { AppSidebar } from '@/components/AppSidebar';
export default function Home() {
  const {moveTo,setMoveTo} = useDataContext();
  const router = useRouter();
  
  useEffect(()=>{
    if(moveTo === "home"){
      router.push("/")
    }else{
      router.push("/explore")
    }
    // setMoveTo(null)
   
  },[moveTo, router, setMoveTo])
  return (
    <div >
 
 

      {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       
      </main> */}
      
    </div>
  );
}
