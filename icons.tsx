import { SVGProps } from 'react';

// Plus Icon from provided SVG
export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7.75 1C7.47386 1 7.25 1.22386 7.25 1.5V7.25H1.5C1.22386 7.25 1 7.47386 1 7.75V8.25C1 8.52614 1.22386 8.75 1.5 8.75H7.25V14.5C7.25 14.7761 7.47386 15 7.75 15H8.25C8.52614 15 8.75 14.7761 8.75 14.5V8.75H14.5C14.7761 8.75 15 8.52614 15 8.25V7.75C15 7.47386 14.7761 7.25 14.5 7.25H8.75V1.5C8.75 1.22386 8.52614 1 8.25 1H7.75Z" fill="currentColor" />
  </svg>
);

// New Icon from provided SVG path
export const PaperPlaneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M6.26 15.006l-3.87-1.037a2 2 0 01-1.415-2.45l2.459-9.176A2 2 0 015.884.929l7.727 2.07a2 2 0 011.414 2.45l-1.425 5.32a4 4 0 01-1.864 2.428l-2.44 1.41a4 4 0 01-3.036.399zm4.976-2.675c.393-.227.726-.538.977-.906l-2.734-.733a1 1 0 00-1.225.707l-.733 2.735a3 3 0 001.274-.394l2.44-1.409zm-8.588.672l3.864 1.035.776-2.898a2 2 0 012.45-1.414l2.898.776 1.423-5.312a1 1 0 00-.707-1.225l-7.727-2.07a1 1 0 00-1.225.707L1.94 11.778a1 1 0 00.707 1.225z" fill="currentColor" />
  </svg>
); 