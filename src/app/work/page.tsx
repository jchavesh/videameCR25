
"use client";

import { useRouter } from 'next/router';
import { useEffect } from 'react';

// This page has been moved to /clientes.
// We are redirecting users to the new page.
export default function WorkPageRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/clientes');
  }, [router]);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <p>Redirigiendo a la página de clientes...</p>
    </div>
  );
}
