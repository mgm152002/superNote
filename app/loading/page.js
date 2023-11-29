'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    // Simulate a delay with setTimeout and then redirect to /dashboard
    const timeoutId = setTimeout(() => {
      router.push('/dashboard');
    }, 200); // Adjust the delay time as needed

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-base-200">
      <span className="loading loading-dots loading-lg text-error"></span>
    </div>
  );
}
