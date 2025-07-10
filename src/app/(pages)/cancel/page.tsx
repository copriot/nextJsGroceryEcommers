import Link from "next/link";
import { IoIosCloseCircle as CancelIcon } from "react-icons/io";

export default function CancelPage() {
  return (
    <div className="h-[80vh] ">
      <div className="h-[50%] bg-red-500 text-white grid place-items-center">
        <div className="flex flex-col items-center gap-10">
          <CancelIcon className="text-6xl" />

          <p className="font-semibold text-4xl text-center">Payment Failed</p>
        </div>
      </div>
      <div className="h-[50%] p-10 mt-5 text-center text-black">
        <p className="text-lg">Your payment was not successful. Please try again.</p>
        <p className="mt-5 mb-10 text-zinc-800">
          If you have any questions, please contact us.
        </p>
        <Link
          href="/cart"
          className="border shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg transition-all duration-300"
        >
          My Orders
        </Link>
        <br />
        <br />
        <br />
        <Link
          href="/"
          className="border shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg transition-all duration-300"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
