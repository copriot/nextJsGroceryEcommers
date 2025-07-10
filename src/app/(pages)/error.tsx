"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-[80vh]">
      <div className="h-[50%] bg-red-500 text-white grid place-items-center">
        <p className="font-semibold text-4xl text-center">An Error Occurred</p>
      </div>
      <div className="h-[50%] p-10 mt-5 text-center text-black">
        <p className="text-lg">If you have any questions, please contact us.</p>
        <p className="mt-5 mb-10 text-zinc-800">
          {error.message || "An unknown error occurred"}
        </p>
        <div className="flex justify-center gap-5">
          {" "}
          <Link
            href="/"
            className="border shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg transition-all duration-300"
          >
            Home
          </Link>
          <button
            onClick={reset}
            className="border cursor-pointer shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
