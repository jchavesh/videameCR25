
"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// This page has been moved to /portal.
// We are redirecting users to the new page.
export default function WorkPageRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/portal');
  }, [router]);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <p>Redirigiendo al portal...</p>
    </div>
  );
}
