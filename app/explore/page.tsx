'use client';
import { useEffect } from 'react';
import { ContainerBox } from "./components/containerBox"
import { sources } from '@/utils/tools'
import Masonry from 'react-masonry-css'
import { getItems } from '@/utils/localStorage';
import { JobListings } from './components/JobListings';
const breakpointColumns = {
  default: 5,
  1536: 4,  // xl
  1280: 3,  // lg
  1024: 3,  // md
  768: 2,   // sm
  640: 1    // xs
};

export default function Explore() {
  useEffect(() => {
    const fetchPosts = () => {
      const response = getItems();
      console.log(response);
    }
    fetchPosts();
  }, []);

  return (
     <div className="w-full   ">
    {/* // <div className="w-full max-w-7xl mx-auto px-4"> */}

  <Masonry
    breakpointCols={breakpointColumns}
    className=" w-full  flex   justify-center md:justify-start  "
    columnClassName="flex flex-col  items-center md:items-start gap-4"
  >
    {sources.map((post, index) => (
      index === 2
        ? <div key={index}><JobListings /></div>
        : <div key={index}>
           <ContainerBox 
                username={post.username}
                title={post.title}
                description={post.content}
                imageUrl={post.image}
              />
        </div>
    ))}
  </Masonry>
</div>

    // <div className="w-full overflow-x-hidden ">
    //   <div className="  md:px-0 max-w-full flex justify-center md:justify-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
    //     <Masonry
    //       breakpointCols={breakpointColumns}
    //       className="my-masonry-grid"
    //       columnClassName="my-masonry-grid_column"
    //     >
    //       {sources.map((post, index) => (
    //         index === 2?
    //         <div key={index} className="rounded-xl  mb-8">
    //        <JobListings />
    //        </div>
    //        :
            
    //         <div key={index} className="  rounded-xl  mb-8">
    //           <ContainerBox 
    //             username={post.username}
    //             title={post.title}
    //             description={post.content}
    //             imageUrl={post.image}
    //           />
    //         </div>
    //       ))}
    //     </Masonry>
    //   </div>
    // </div>
  )
}