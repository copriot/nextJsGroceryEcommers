import Link from "next/link";
import { IoIosCheckmarkCircle as CheckIcon } from "react-icons/io";

export default function SuccessPage() {
  return (
    <div className="h-[80vh] ">
      <div className="h-[50%] bg-green-500 text-white grid place-items-center">
        <div className="flex flex-col items-center gap-10">
          <CheckIcon className="text-6xl" />

          <p className="font-semibold text-4xl text-center">Payment Successful</p>
        </div>
      </div>
      <div className="h-[50%] p-10 mt-5 text-center text-black">
        <p className="text-lg">Your order will be delivered soon</p>
        <p className="mt-5 mb-10 text-zinc-800">
          Please check your email for the order details
        </p>
        <Link
          href="/orders"
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
