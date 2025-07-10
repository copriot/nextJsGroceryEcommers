"use client";
import { FaMinus, FaPlus, FaSpinner, FaTrash } from "react-icons/fa";
import { CartItemProps } from "./cartList";
import { userId } from "@/app/utils/constants";
import { removeCartItem, updateCartItem } from "@/app/services/basketService";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ListAction({ item }: CartItemProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleUpdateQuantity = async (quantity: number) => {
    try {
      setIsLoading(true);
      const res = await updateCartItem(userId, item.grocery._id, quantity);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      router.refresh();
    }
  };
  const handleRemoveItem = async () => {
    try {
      setIsLoading(true);
      const res = await removeCartItem(userId, item.grocery._id);
      router.refresh();
      setIsLoading(false);
      toast.success(res.message);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex items-center">
      <div className="flex items-center border border-gray-400 rounded mr-4">
        <button
          disabled={item.quantity === 1 || isLoading}
          onClick={() => handleUpdateQuantity(item.quantity - 1)}
          className="px-2 py-2 text-gray-500 hover:text-red-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all duration-300"
        >
          <FaMinus />
        </button>

        <span className="px-2 py-1 text-gray-500">{item.quantity}</span>

        <button
          disabled={item.quantity === item.grocery.stock || isLoading}
          onClick={() => handleUpdateQuantity(item.quantity + 1)}
          className="px-2 py-2 text-gray-500 hover:text-green-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all duration-300"
        >
          <FaPlus />
        </button>
      </div>
      <button
        disabled={isLoading}
        onClick={handleRemoveItem}
        className="text-red-500 hover:text-red-700 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaTrash />
      </button>
    </div>
  );
}
