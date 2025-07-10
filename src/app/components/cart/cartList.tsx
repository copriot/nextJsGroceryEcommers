import { Product } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import ListAction from "./listAction";
export type CartItemProps = {
  item: {
    grocery: Product;
    quantity: number;
    price: number;
    name: string;
    _id: string;
  };
};
export default function CartList({ item }: CartItemProps) {
  console.log(item);
  return (
    <li className=" flex items-center py-4 px-2">
      <div className="overflow-hidden rounded-md mr-4">
        <div>
          <Image
            src={item.grocery.photo}
            alt={item.grocery.name}
            width={70}
            height={70}
            className="object-cover rounded-full mx-5"
          />
        </div>
      </div>
      <div className="flex-1">
        <Link
          href={`/product/${item.grocery._id}`}
          className="text-lg font-medium text-gray-800 hover:text-green-800"
        >
          {item.grocery.name}
        </Link>
        <p className="text-sm text-gray-500">
          {item.quantity} {item.grocery.unit}
        </p>
        <p className="text-sm text-green-600 font-medium">
          {item.grocery.price * item.quantity}₺
        </p>
      </div>
      <div>
        <ListAction item={item} />
      </div>
    </li>
  );
}
