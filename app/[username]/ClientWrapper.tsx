"use client";

import { getUserDetails, UserDetails } from "@/utils/localStorage";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react";

export default function ClientWrapper({ username }: { username: string }) {
  const [item, setItem] = useState<UserDetails | null>(null);

  useEffect(() => {
    const userDetails = getUserDetails(username);
    setItem(userDetails || null);
  }, [username]);

  if (!item) {
    return <div>User not found.</div>;
  }

  return (
    <div className='flex flex-col items-center min-h-screen w-full overflow-x-hidden bg-white'>
      <div className="flex flex-col items-start justify-center w-full max-w-md px-4 py-6">
        <div className="flex flex-row items-center w-full">
          <Avatar className="h-20 w-20 flex-shrink-0 mr-5">
            <AvatarImage src={item.image} />
          </Avatar>
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-semibold truncate">{item.username}</h2>
            <p className="text-gray-500 truncate">{item.email}</p>
          </div>
        </div>
        <p className="text-gray-500 mt-4 w-full break-words">{item?.description}</p>
      </div>
    </div>
  );
}
