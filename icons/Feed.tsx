import { SVGProps } from 'react';

export function FeedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 28 28"
      width="28"
      height="28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 5.75A.75.75 0 016.25 5C15.5 5 23 12.5 23 21.75a.75.75 0 01-1.5 0c0-8.422-6.828-15.25-15.25-15.25a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75C12.187 11 17 15.813 17 21.75a.75.75 0 01-1.5 0 9.25 9.25 0 00-9.25-9.25.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75A4.75 4.75 0 0111 21.75a.75.75 0 01-1.5 0 3.25 3.25 0 00-3.25-3.25.75.75 0 01-.75-.75z"
        fill="currentColor"
      />
    </svg>
  );
} 



export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Black circle background */}
    <circle cx="8" cy="8" r="8" fill="black" />
    {/* White plus shape, scaled down for padding effect */}
    <path 
      d="M7.75 1C7.47386 1 7.25 1.22386 7.25 1.5V7.25H1.5C1.22386 7.25 1 7.47386 1 7.75V8.25C1 8.52614 1.22386 8.75 1.5 8.75H7.25V14.5C7.25 14.7761 7.47386 15 7.75 15H8.25C8.52614 15 8.75 14.7761 8.75 14.5V8.75H14.5C14.7761 8.75 15 8.52614 15 8.25V7.75C15 7.47386 14.7761 7.25 14.5 7.25H8.75V1.5C8.75 1.22386 8.52614 1 8.25 1H7.75Z" 
      fill="white" 
      transform="translate(8 8) scale(0.7) translate(-8 -8)" // Scale down and center
    />
  </svg>
); 