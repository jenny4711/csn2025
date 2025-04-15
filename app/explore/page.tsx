'use client';
import { useState , useEffect} from 'react';
import { useRouter } from 'next/navigation';
import NavBar from "@/components/NavBar"
import { ContainerBox } from "./components/containerBox"
import { sources } from '@/utils/tools'
import Masonry from 'react-masonry-css'
import { getItems } from '@/utils/localStorage';
const items = [
  {title:"Front page",url:"/explore"},
  {title:"Job board",url:"/explore/job-board"},
  {title:"Activity",url:"/explore/activity"},
  {title:"Gift shop",url:"/explore/gift-shop"},
  {title:"Pricing",url:"/explore/pricing"},
  {title:"About",url:"/explore/about"},
]

const breakpointColumns = {
  default: 5,
  1536: 4,  // xl
  1280: 3,  // lg
  1024: 3,  // md
  768: 2,   // sm
  640: 1    // xs
};

const posts = [
  {
    username: "pedropequeno",
    title: "New York Creative Meet",
    description: "It's February which means we are officially THREE WEEKS AWAY from the IRL NYC creative meet!",
    imageUrl: "https://picsum.photos/800/400"
  },
  {
    username: "wojtek",
    title: "Headers Club",
    description: "Browse the hottest header images on the Internet.",
    imageUrl: "https://picsum.photos/800/401"
  },
  {
    username: "emre",
    title: "Corts Brand Identity",
    description: "Corts is a platform for Beauty, Fashion & Sport from Los Angeles, CA.",
    imageUrl: "https://picsum.photos/800/402"
  },
  // Add more sample posts as needed
]

export default function Explore() {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    const fetchPosts =  () => {
      const response:any =  getItems();
      console.log(response);
      // setPosts(response);
    }
    fetchPosts();
  },[])
  return (
    <div>
      {/* <NavBar title={items} url="/explore" /> */}
      <div className="p-4">
        <Masonry
          breakpointCols={breakpointColumns}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {sources.map((post, index) => (
            <div key={index}>
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