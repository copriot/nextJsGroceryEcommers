import OrderButtons from "@/app/components/detail/orderButtons";
import { getProduct } from "@/app/services/productsServices";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaLeaf, FaShoppingBasket } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbWeight } from "react-icons/tb";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function GroceryDetailPage({ params }: Props) {
  const { id } = await params;
  const { grocery } = await getProduct(id);

  if (!grocery) {
    notFound();
  }

  const info = [
    {
      title: "Kategoriler",
      value: grocery.category,
    },
    {
      title: "Menşei",
      value: grocery.origin,
    },
    {
      title: "Tazelik",
      value: `${grocery.expiryDays} gün`,
    },
    {
      title: "Organik",
      value: grocery.isOrganic ? "Evet" : "Hayır",
    },
    {
      title: "Birim",
      value: grocery.unit,
    },
  ];

  return (
    <div className=" text-black container mx-auto px-4 py-8 ">
      <div className="mb-6">
        <Link
          href="/"
          className="gap-2 text-green-600 hover:underline decoration-2 decoration-green-600 inline-flex items-center"
        >
          <FaArrowLeft />
          <span>Anasayfaya Dön</span>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 relative h-96">
            <Image
              src={grocery.photo}
              alt={grocery.name}
              fill
              className="object-center"
            />
            {grocery.isOrganic && (
              <div className="absolute top-0 left-0 flex items-center gap-1 bg-green-600 rounded-[0_15px_0_15px] p-1 text-xs">
                <FaLeaf className="text-white" />
                <span className=" text-white font-bold">Organik</span>
              </div>
            )}
          </div>

          <div className="md:w-1/2 p-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{grocery.name}</h1>
                <p className="text-sm text-gray-500">{grocery.origin}</p>
              </div>

              <div className="flex items-center gap-2 px-3 py-1 bg-gray-200 rounded-full text-gray-700">
                <TbWeight />
                <span>{grocery.unit} gr</span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-3xl font-bold text-green-600">{grocery.price} ₺</p>
              <p className="text-gray-500">KDV Dahil</p>
            </div>
            <div className="my-6 h-px bg-gray-200"></div>
            <p className="text-gray-700 mb-4">{grocery.description}</p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-gray-700">
                <MdOutlineLocalShipping className="text-xl text-green-600" />
                <span>Aynı gün teslimat imkanı</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FaShoppingBasket className="text-xl text-green-600" />
                {grocery.stock > 0 ? (
                  <span>Stok Durumu: {grocery.stock} kilo/adet mevcut</span>
                ) : (
                  <span>Stok Durumu: Stokta Yok</span>
                )}
              </div>
              {grocery.nutritionalValue && (
                <div className="text-gray-700 mt-4">
                  <h3 className="font-medium mb-1">Besin Değerleri</h3>
                  <p>{grocery.nutritionalValue}</p>
                </div>
              )}
            </div>
            <OrderButtons grocery={grocery} />
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Ürün Bilgileri</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {info.map((item) => (
              <div key={item.title} className="bg-gray-50 p-3 rounded-lg">
                <h3 className="text-sm font-medium text-gray-700">{item.title}</h3>
                <p className="font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
