'use client';

import { useEffect } from 'react';
import GiftItem from './components/GiftItem';

interface Product {
  id: number;
  name: string;
  description: string;
  details: string;
  price: number;
  imageUrl: string;
  sizes?: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "URL Hat",
    description: "Our favorite URL embroidered on a washed cotton dad hat. A low-key and durable everyday wear that looks good on everyone.",
    details: "One size, with an adjustable metal strap back. Hats include free domestic and international shipping.",
    price: 30,
    imageUrl: "https://res.cloudinary.com/read-cv/image/upload/c_limit,h_1536,w_2048/dpr_1.0/v1/1/marketing/gift-shop/explore-hat-transparent.png?_a=DATAdtAAZAA0",
  },
  {
    id: 2,
    name: "Egg Tee",
    description: "Start your day off right with an egg tee, our first official merch collab with our friend @hannahlee. The graphic is on the back of the t-shirt with the front blank.",
    details: "Printed by Poppy Press on a 8oz heavyweight combed cotton tee, made in Canada by Roopa Knitting Mills. View their site for sizing.",
    price: 30,
    imageUrl: "https://res.cloudinary.com/read-cv/image/upload/c_limit,h_1536,w_2048/dpr_1.0/v1/1/marketing/gift-shop/breakfast-tee-transparent.png?_a=DATAdtAAZAA0",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 3,
    name: "In the Zone Tee",
    description: "We found this beautiful signage in Hawaii and asked community member @iarafath to immortalize it in his highly detailed illustrative style. The graphic is on the back of the t-shirt, without branding or other embellishments.",
    details: "Printed by Poppy Press on a 8oz heavyweight combed cotton tee, made in Canada by Roopa Knitting Mills. View their site for sizing.",
    price: 30,
    imageUrl: "https://res.cloudinary.com/read-cv/image/upload/c_limit,h_1536,w_2048/dpr_1.0/v1/1/marketing/gift-shop/in-the-zone-tee-transparent.png?_a=DATAdtAAZAA0",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
];

export default function GiftShop() {
  useEffect(() => {
    const handleScroll = () => {
      const productElements = document.querySelectorAll('.product-image');
      const windowHeight = window.innerHeight;

      productElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;

        if (elementCenter > 0 && elementCenter < windowHeight) {
          // Do something with the active product if needed
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen bg-white flex-col">

      {
        products.map((product) => (
          <GiftItem
            key={product.id}
            title={product.name}
            price={product.price}
            sizes={product.sizes}
            imageUrl={product.imageUrl}
          />
        ))
      }
    </div>
        
      
    
  );
}