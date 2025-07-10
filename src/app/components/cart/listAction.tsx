"use client";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { CartItemProps } from "./cartList";

export default function ListAction({ item }: CartItemProps) {
  const handleUpdateQuantity = (quantity: number) => {
    console.log(quantity);
  };
  const handleRemoveItem = () => {
    console.log("remove item");
  };
  return (
    <div className="flex items-center">
      <div className="flex items-center border border-gray-400 rounded mr-4">
        <button
          disabled={item.quantity === 1}
          onClick={() => handleUpdateQuantity(item.quantity - 1)}
          className="px-2 py-2 text-gray-500 hover:text-red-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all duration-300"
        >
          <FaMinus />
        </button>
        <span className="px-2 py-1 text-gray-500">{item.quantity}</span>
        <button
          disabled={item.quantity === item.grocery.stock}
          onClick={() => handleUpdateQuantity(item.quantity + 1)}
          className="px-2 py-2 text-gray-500 hover:text-green-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all duration-300"
        >
          <FaPlus />
        </button>
      </div>
      <button
        onClick={handleRemoveItem}
        className="text-red-500 hover:text-red-700 transition-all duration-300 cursor-pointer"
      >
        <FaTrash />
      </button>
    </div>
  );
}
