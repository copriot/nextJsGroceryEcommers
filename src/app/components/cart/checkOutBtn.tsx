"use client";

import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { checkoutAllItems } from "@/app/services/basketService";
import { userId } from "@/app/utils/constants";

export default function CheckOutBtn() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCheckOut = async () => {
    setIsLoading(true);
    try {
      const { url } = await checkoutAllItems(userId);
      window.location.href = url;
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleCheckOut}
      disabled={isLoading}
      className="w-full bg-green-600 text-white h-10 rounded-md hover:cursor-pointer hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2 mb-4 disabled:opacity-50 disabled:brightness-80"
    >
      {isLoading ? (
        <FaSpinner className="text-xl animate-spin" />
      ) : (
        <MdOutlineShoppingCartCheckout className="text-xl" />
      )}
      {isLoading ? "" : "Ödeme Yap"}
    </button>
  );
}
