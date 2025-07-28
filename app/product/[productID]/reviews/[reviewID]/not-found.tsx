"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Custom404() {
  // const productID = usePathname().split("/")[2];
  const reviewID = usePathname().split("/")[4];
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Review not exist</h2>
      <p className="text-gray-600 mt-2">
        More than {reviewID} reviews are not exist
      </p>
      <Link href="/" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Go Back Home
      </Link>
    </div>
  );
}
