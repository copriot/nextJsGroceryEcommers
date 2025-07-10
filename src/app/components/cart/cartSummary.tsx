import { GetBasketResponse } from "@/app/types";
import CheckOutBtn from "./checkOutBtn";
import Link from "next/link";

export default function CartSummary({ cart }: GetBasketResponse) {
  return (
    <div className="lg:w-1/4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden p-3 sticky top-4">
        <h2 className="text-lg font-bold text-zinc-800">Sipariş Özeti</h2>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-gray-600">
            <span>Toplam Ürünler</span>
            <span>{cart.items.length}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Kargo</span>
            <span>Ücretsiz</span>
          </div>

          <div className="border-t border-gray-200 pt-3 mt-3">
            <div className="flex justify-between font-bold text-lg">
              <span>Toplam</span>
              <span className="text-green-500">{cart.totalAmount}₺</span>
            </div>
          </div>
        </div>

        <CheckOutBtn />
        <Link
          href="/"
          className="w-full block text-center text-green-500 hover:text-green-600 hover:underline decoration-green-600 decoration-2 transition-all duration-300"
        >
          Alışverişe Devam Et
        </Link>
      </div>
    </div>
  );
}
