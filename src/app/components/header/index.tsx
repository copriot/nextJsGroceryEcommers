import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import SearchForm from "./searchForm";
import { getBasket } from "@/app/services/basketService";
import { userId } from "@/app/utils/constants";

export default async function Header() {
  const { cart } = await getBasket(userId);
  const totalQuantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
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
          <div className="relative">
            <FaShoppingCart className="text-2xl" />
            {cart.items.length > 0 && (
              <span className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalQuantity}
              </span>
            )}
          </div>
          <span className="max-md:hidden">My Basket</span>
        </Link>
      </div>
    </div>
  );
}
