'use client';
import { useEffect } from 'react';
import { ContainerBox } from "./components/containerBox"
import { sources } from '@/utils/tools'
import Masonry from 'react-masonry-css'
import { getItems } from '@/utils/localStorage';

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
    <div className="w-full overflow-x-hidden">
      <div className="px-4 max-w-full">
        <Masonry
          breakpointCols={breakpointColumns}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {sources.map((post, index) => (
            <div key={index} className="mb-4">
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
    </div>
  )
}