import type { SVGProps } from "react";

export function VimeoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M13.75 6.25a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 0-5 0v3.75c0 3.11 2.65 5.62 5.92 5.62.2 0 .4-.01.6-.02v-3.3c-.2.01-.4.02-.6.02-1.39 0-2.5-1.11-2.5-2.5V10c1.39 0 2.5 1.11 2.5 2.5V15c3.27 0 5.92-2.51 5.92-5.62V6.25a2.5 2.5 0 0 0-3.34 0Z"></path>
    </svg>
  );
}
