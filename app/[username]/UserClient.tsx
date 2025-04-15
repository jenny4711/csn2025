"use client";

import { useEffect, useState } from "react";
import { getUserDetails ,UserDetails} from "@/utils/localStorage";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import type { UserDetails } from "@/types/user";

export default function UserClient({ username }: { username: string }) {
  const [user, setUser] = useState<UserDetails | null>(null);

  useEffect(() => {
    const data = getUserDetails(username);
    console.log(data,'data!!!!!')
    if (data) setUser(data);
  }, [username]);

  if (!user) {
    return <div className="text-center mt-20 text-xl text-red-500">User not found.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-start justify-center w-1/3">
        <div className="flex flex-row items-center justify-center mb-4">
          <Avatar className="h-20 w-20 mr-5">
            <AvatarImage src={user.image} />
            <AvatarFallback>{user.username[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-semibold">{user.username}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>
        <p className="text-gray-500">{user.description}</p>
      </div>
    </div>
  );
}
