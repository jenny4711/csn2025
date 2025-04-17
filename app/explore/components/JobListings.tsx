import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const jobListings = [
    {
     
        company: "Rapha",
        position: "Software Engineer",
        avatar: "https://res.cloudinary.com/read-cv/image/upload/c_fill,h_36,w_36/dpr_1.0/v1/1/teams/EIbYyHYKQvRCbPRdXIL9/profilePhoto-95227e7b-0711-46f0-9ff2-bc9a322d4444.png?_a=DATAdtAAZAA0",
        link: "https://www.rapha.com/careers"
    },
    {
        
        company: "Mouthwash Studios",
        position: "Software Engineer",
        avatar: "https://res.cloudinary.com/read-cv/image/upload/c_fill,h_36,w_36/dpr_1.0/v1/1/users/tdLXwYvHNGfp0WrREIrfKaCK8Qq1/teamLogo-af87558f-8624-4893-bcb2-c640f70ec440.png?_a=DATAdtAAZAA0",
        link: "https://www.mouthwashstudios.com/careers"
    },
    {
       
        company: "Mouthwash Studios",
        position: "SDesign Director",
        avatar: "https://res.cloudinary.com/read-cv/image/upload/c_fill,h_36,w_36/dpr_1.0/v1/1/users/tdLXwYvHNGfp0WrREIrfKaCK8Qq1/teamLogo-af87558f-8624-4893-bcb2-c640f70ec440.png?_a=DATAdtAAZAA0",
    },
    {
     
        company: "Frma health",
        position: "Software Engineer",
        avatar: "https://res.cloudinary.com/read-cv/image/upload/c_fill,h_36,w_36/dpr_1.0/v1/1/teams/KEzuz8NhaFfMBeMmSI7B/profilePhoto-d1618892-b8e4-4766-b994-1827b23e362b.png?_a=DATAdtAAZAA0",
        link: "https://www.frmahealth.com/careers"
    },
    {
    
        company: "Square",
        position: "IOS Engineer",
        avatar: "https://res.cloudinary.com/read-cv/image/upload/c_fill,h_36,w_36/dpr_1.0/v1/1/teams/UO5ZifcJIOzp44XVZKIa/profilePhoto-939b7b78-d33d-4768-828f-17998898d27b.png?_a=DATAdtAAZAA0",
        link: "https://www.square.com/careers"
    },

    {
   
        company: "Square",
        position: "Software Engineer",
        avatar: "https://res.cloudinary.com/read-cv/image/upload/c_fill,h_36,w_36/dpr_1.0/v1/1/teams/UO5ZifcJIOzp44XVZKIa/profilePhoto-939b7b78-d33d-4768-828f-17998898d27b.png?_a=DATAdtAAZAA0",
        link: "https://www.square.com/careers"
    },
    {
    
        company: "Apple",
        position: "Software Engineer",
        avatar: "https://res.cloudinary.com/read-cv/image/upload/c_fill,h_36,w_36/dpr_1.0/v1/1/teams/EIbYyHYKQvRCbPRdXIL9/profilePhoto-95227e7b-0711-46f0-9ff2-bc9a322d4444.png?_a=DATAdtAAZAA0",
    },

    {
     
        company: "Microsoft",
        position: "Software Engineer",
        avatar: "https://res.cloudinary.com/read-cv/image/upload/c_fill,h_36,w_36/dpr_1.0/v1/1/teams/EIbYyHYKQvRCbPRdXIL9/profilePhoto-95227e7b-0711-46f0-9ff2-bc9a322d4444.png?_a=DATAdtAAZAA0",
        link: "https://www.microsoft.com/careers"
    },
    {
        id: 9,
        company: "Tesla",
        position: "Software Engineer",
        avatar: "https://res.cloudinary.com/read-cv/image/upload/c_fill,h_36,w_36/dpr_1.0/v1/1/teams/EIbYyHYKQvRCbPRdXIL9/profilePhoto-95227e7b-0711-46f0-9ff2-bc9a322d4444.png?_a=DATAdtAAZAA0",
        link: "https://www.tesla.com/careers"
    },

    {
        id: 10,
        company: "Airbnb",
        position: "Software Engineer",
        avatar: "https://res.cloudinary.com/read-cv/image/upload/c_fill,h_36,w_36/dpr_1.0/v1/1/teams/EIbYyHYKQvRCbPRdXIL9/profilePhoto-95227e7b-0711-46f0-9ff2-bc9a322d4444.png?_a=DATAdtAAZAA0",
        link: "https://www.airbnb.com/careers"
    },

]


export function JobListings() {
    return (
        <div className="bg-white border  border-gray-200 rounded-lg hover:shadow-lg transition-shadow h-fit w-80 max-w-full overflow-hidden">
            <p className="text-xs text-gray-400  font-light pt-4 ml-8">Job Listings</p>
            <ul className="flex flex-col gap-4 p-4  ">
             {
              jobListings.map((job, index) => (
                <li key={job.id || `job-${index}`} className="flex flex-row items-center gap-4">
                  {job.link ? (
                    <Link href={job.link}>
                      <Image src={job.avatar} alt={job.company} width={36} height={36} />
                    </Link>
                  ) : (
                    <Image src={job.avatar} alt={job.company} width={36} height={36} />
                  )}
                  <div>
                    <p className="text-xs text-gray-400">{job.company}</p>
                    <p className="font-light text-sm">{job.position}</p>
                  </div>
                </li>
              ))
             }
              <Button variant="outline" className="!text-gray-500  flex w-full justify-center !rounded-full">See all</Button>
            </ul>
        </div>
    )
}