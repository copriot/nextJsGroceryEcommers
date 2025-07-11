"use client";

import { addToBasket } from "@/app/services/basketService";
import { userId } from "@/app/utils/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaPlus, FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";

export default function CardActions({ groceryId }: { groceryId: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleAddToCart = async () => {
    setIsLoading(true);
    const res = await addToBasket(userId, groceryId, 1)
      .then((res) => {
        toast.success(res.message);
        router.refresh();
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleAddToCart}
      className="bg-green-500 text-white p-2 rounded-full cursor-pointer hover:bg-green-600 disabled:brightness-40 hover:shadow-md transition-all duration-300 shadow-sm"
    >
      {isLoading ? (
        <FaSpinner className="animate-spin text-white" />
      ) : (
        <FaPlus className="text-white" />
      )}
    </button>
  );
}
