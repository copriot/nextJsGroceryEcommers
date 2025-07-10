import Link from "next/link";
import { MdRemoveShoppingCart } from "react-icons/md";

export default function EmptyCard() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <MdRemoveShoppingCart className="text-6xl text-gray-500" />
      <p className="text-gray-500">Sepetiniz boş</p>
      <p className="text-gray-500">Sepetinize ürün ekleyiniz.</p>
      <Link
        href="/"
        className="px-2 py-2 bg-green-500 text-white rounded-md my-5 hover:bg-green-400 transition-all duration-300 hover:shadow-lg"
      >
        Hemen alışverişe başla
      </Link>
    </div>
  );
}
