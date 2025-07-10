"use client";

import { clearCart } from "@/app/services/basketService";
import { userId } from "@/app/utils/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSpinner, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function ClearBtn() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleClearCart = async () => {
    setIsLoading(true);
    const res = await clearCart(userId);
    router.refresh();
    setIsLoading(false);
    toast.success(res.message);
  };
  return (
    <button
      disabled={isLoading}
      onClick={handleClearCart}
      className="flex items-center gap-2 text-red-500 hover:text-red-700 transition-all duration-300 cursor-pointer"
    >
      {isLoading ? <FaSpinner className="animate-spin text-red-500" /> : <FaTrash />}
      <p>Sepeti Boşalt</p>
    </button>
  );
}
