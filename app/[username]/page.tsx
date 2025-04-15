'use client';

import { getItem ,getUserDetails} from "@/utils/localStorage";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// <Avatar className="h-8 w-8">
//             <AvatarImage src={`https://github.com/${username}.png`} />
//             <AvatarFallback>{username[0]}</AvatarFallback>

// Define the Item type structure if not already globally defined
interface Item {

  username: string;
  email: string;
  image?: string;
  description?: string;
  createdAt: number;
}


export default  function UserPage({ params }: { params: { username: string } }) {
  const [item, setItem] = useState<Item | null | undefined>(undefined); // undefined for loading state
 const {username} =  params;
 
  useEffect(() => {
 
    try {
      const foundItem:any = getUserDetails(username); // Fetch using the actual username param
      console.log(foundItem,'foundItem');
 setItem(foundItem);
    } catch (e) {
      console.error("Error fetching item:", e);
      setItem(null); // Set to null on error
    }
  }, [params.username]);

  if (item === undefined) {
    return <div>Loading...</div>; // Show loading state
  }

  if (!item) {
    return <div>User not found.</div>; // Show not found state
  }

  // Render a specific property, e.g., username or title
  return( 
  <div className='flex flex-col items-center justify-center h-screen'>
    <div className="flex flex-col items-start justify-center w-1/3">
    <div className="flex flex-row items-center justify-center">
    <Avatar className="h-20 w-20 flex-row mr-5">
            <AvatarImage src={item.image} />
            {/* <AvatarFallback>{username[0]}</AvatarFallback> */}
          </Avatar>
          <div>
            <h2 className="text-2xl">{item.username}</h2>
            <p className="text-gray-500">{item.email}</p>
          </div>
    </div>

      {/* <h1 className="text-4xl font-bold">{item.username}</h1> */}
      <p className="text-gray-500">{item?.description}</p>
    </div>
  </div>
  );
 
}
