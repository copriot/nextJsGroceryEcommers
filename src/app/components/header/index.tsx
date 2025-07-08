import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import SearchForm from "./searchForm";

export default function Header() {
  return (
    <div className="bg-white text-green-600 flex justify-between items-center py-5 px-7 lg:py-6 lg:px-10 shadow-sm">
      <Link href="/" className="text-2xl lg:text-3xl font-bold flex items-center gap-2">
        <MdOutlineLocalGroceryStore />
        <span>Grocery</span>
      </Link>
      <SearchForm />
      <div className="flex items-center gap-5">
        <Link href="/orders" className="header_links">
          <RiFileList3Line className="text-2xl" />
          <span className="max-md:hidden">Orders</span>
        </Link>
        <Link href="/cart" className="header_links">
          <FaShoppingCart className="text-2xl" />
          <span className="max-md:hidden">My Basket</span>
        </Link>
      </div>
    </div>
  );
}
