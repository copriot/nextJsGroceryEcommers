"use client";
import { addToBasket, checkoutSingleItem } from "@/app/services/basketService";
import { Product } from "@/app/types";
import { userId } from "@/app/utils/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaMinus, FaPlus, FaShoppingCart, FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";

export default function OrderButtons({ grocery }: { grocery: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleAddToCart = async () => {
    if (quantity < 1 || grocery.stock < quantity) return;
    try {
      setIsLoading(true);
      await addToBasket(userId, grocery._id, quantity);
      toast.success(`${quantity} kilo/adet ${grocery.name} sepete eklendi`);
      setQuantity(1);
    } catch (error) {
      toast.error("Ürün sepete eklenemedi");
    } finally {
      setIsLoading(false);
    }
  };
  const handleBuyNow = async () => {
    if (quantity < 1 || grocery.stock < quantity) return;
    try {
      setIsLoading(true);
      //Backendden satın alım sayfasının urlini al
      const { url } = await checkoutSingleItem(grocery, quantity);
      //Yeni sekmede aç
      window.open(url, "_blank");
      setQuantity(1);
      router.refresh();
    } catch (error) {
      toast.error("Ürün satın alımı sırasında bir hata oluştu");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center border border-gray-300 rounded">
          <button
            className="order_buttons"
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity <= 1}
          >
            <FaMinus />
          </button>
          <span className="px-3 py-1 border-x border-gray-300 hover:bg-gray-300 min-w-[40px]text-center">
            {quantity}
          </span>
          <button
            className="order_buttons"
            disabled={quantity >= grocery.stock}
            onClick={() => setQuantity(quantity + 1)}
          >
            <FaPlus />
          </button>
        </div>
        <span className="text-gray-700">{grocery.price * quantity} TL</span>
        <span className="text-gray-700">Stok:{grocery.stock - quantity}</span>
      </div>

      <div className="flex gap-3 mt-4">
        <button
          disabled={isLoading}
          onClick={handleAddToCart}
          className="flex-1 gap-2 bg-white border-2 border-green-600 text-green-600 hover:bg-green-100 h-10 px-4 rounded-md flex items-center justify-center cursor-pointer disabled:opacity:50 disabled:cursor-not-allowed transition-all duration-300"
        >
          {isLoading ? (
            <FaSpinner className="animate-spin" />
          ) : (
            <>
              <FaShoppingCart />
              Sepete Ekle
            </>
          )}
        </button>
        <button
          disabled={isLoading}
          onClick={handleBuyNow}
          className="flex-1 bg-green-600 px-4 py-2 rounded text-white hover:bg-green-700 transition-all duration-300 font-medium cursor-pointer disabled:opacity:50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? <FaSpinner className="animate-spin" /> : "Hemen Satın Al"}
        </button>
      </div>
    </div>
  );
}
