
import Image from 'next/image';

export function Logo() {
  return (
    <Image 
      src="/images/VideameLogoFinal.svg"
      alt="Videame Logo"
      width={140}
      height={40}
      priority
    />
  );
}
