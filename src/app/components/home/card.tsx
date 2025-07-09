import { Product } from "@/app/types";
import { TbWeight } from "react-icons/tb";
import CardActions from "./cardActions";
import Image from "next/image";
import { BiLeaf } from "react-icons/bi";
import { FaLeaf } from "react-icons/fa";
import Link from "next/link";

export default function Card({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 overflow-hidden">
      <Link href={`/grocery/${product._id}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={product?.photo}
            alt={product?.name}
            fill
            className="object-center rounded-lg"
          />
          {product.isOrganic && (
            <div className="absolute top-0 left-0 flex items-center gap-1 bg-green-600 rounded-[0_0_15px_15px] p-1 text-xs">
              <FaLeaf className="text-white" />
              <span className=" text-white font-bold">Organik</span>
            </div>
          )}
        </div>
      </Link>
      <div>
        <div className="flex justify-between items-start my-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.origin}</p>
          </div>
          <div className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full">
            <TbWeight />
            <span>{product.unit}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 line-clamp-2 h-10 mb-3">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-green-700 font-bold text-xl">{product.price}₺</p>
          <CardActions groceryId={product._id} />
        </div>
      </div>
    </div>
  );
}
