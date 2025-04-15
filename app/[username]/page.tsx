import { getUserDetails } from "@/utils/localStorage";
import { Avatar, AvatarImage } from "@/components/ui/avatar"

// <Avatar className="h-8 w-8">
//             <AvatarImage src={`https://github.com/${username}.png`} />
//             <AvatarFallback>{username[0]}</AvatarFallback>

interface UserDetails {
  username: string;
  displayName: string;
  password?: string;
  image?: string;
  email?: string;
  description?: string;
  createdAt: Date;
}

export default async function UserPage({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;
  const item = getUserDetails(username);

  if (!item) {
    return <div>User not found.</div>;
  }

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
