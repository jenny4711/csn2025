import Image from 'next/image';
import { useState } from 'react';

interface GiftItemProps {
  title: string;
  description: string;
  details: string;
  price: number;
  sizes?: string[];
  imageUrl: string;
}

export default function GiftItem({
  title = "In the Zone Tee",
  description = "We found this beautiful signage in Hawaii and asked community member @iarafath to immortalize it in his highly detailed illustrative style. The graphic is on the back of the t-shirt, without branding or other embellishments.",
  details = "Printed by Poppy Press on a 8oz heavyweight combed cotton tee, made in Canada by Roopa Knitting Mills. View their site for sizing.",
  price = 30,
  sizes = ["S", "M", "L", "XL", "XXL"],
  imageUrl = "https://res.cloudinary.com/read-cv/image/upload/c_limit,h_1536,w_2048/dpr_1.0/v1/1/marketing/gift-shop/in-the-zone-tee-transparent.png?_a=DATAdtfiZAA0"
}: GiftItemProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-container min-h-screen flex items-center justify-center flex-row">
      <div className="product-content w-full flex flex-row ">
        <div className="product-image mb-8">
          <Image
            src={imageUrl}
            alt={title}
            width={800}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="product-details space-y-6">
          <div className="text-2xl font-bold">{title}</div>
          <div className="text-gray-600">
            <p className="mb-4">
              We <a
                href="https://twitter.com/read_cv/status/1705994057313558934"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                found this beautiful signage
              </a> in Hawaii and asked community member{' '}
              <a
                href="https://posts.cv/iarafath"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                @iarafath
              </a>{' '}
              to immortalize it in his highly detailed illustrative style. The graphic is on the back of the t-shirt, without branding or other embellishments.
            </p>
            <p>
              Printed by{' '}
              <a
                href="https://poppypress.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Poppy Press
              </a>{' '}
              on a 8oz heavyweight combed cotton tee, made in Canada by{' '}
              <a
                href="https://www.houseofblanks.com/collections/t-shirts/products/heavyweight-t-shirt-white"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Roopa Knitting Mills
              </a>
              . View their site for sizing.
            </p>
          </div>
          <div className="text-xl font-semibold">${price}</div>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-full border ${
                  selectedSize === size
                    ? 'bg-black text-white'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                disabled={size.toLowerCase() === 'm'}
              >
                {size.toLowerCase()}
              </button>
            ))}
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-24">
              <input
                type="number"
                step="1"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}