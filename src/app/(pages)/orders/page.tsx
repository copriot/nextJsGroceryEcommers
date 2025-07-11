import { getOrders } from "@/app/services/ordersService";
import { BsPerson } from "react-icons/bs";

export default async function OrdersPage() {
  const { orders } = await getOrders();
  console.log(orders);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Son Siparişler ({orders.length})</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4">
        {orders.map((order: any) => (
          <div
            key={order._id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                {/* Ürün Resmi */}
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                  <BsPerson className="text-4xl" />
                </div>

                {/* Ürün Bilgileri */}
                <div>
                  <h3 className="font-semibold text-lg">{order.product?.name}</h3>
                  <p className="text-sm text-gray-600">{order.product?.category}</p>
                  <p className="text-xs text-gray-500">{order.product?.description}</p>
                </div>
              </div>

              {/* Fiyat ve Miktar */}
              <div className="text-right">
                <p className="font-bold text-green-600 text-lg">
                  {order.money_spend} {order.currency}
                </p>
                <p className="text-sm text-gray-500">
                  Miktar: {order.quantity} {order.product?.unit}
                </p>
                <p className="text-xs text-gray-400">
                  {new Date(order.createdAt).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>

            {/* Müşteri Bilgileri */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{order.customer_name}</p>
                  <p className="text-sm text-gray-600">{order.customer_phone}</p>
                  <p className="text-sm text-gray-500">{order.delivery_address}</p>
                </div>

                <div className="flex gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.is_delivery
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {order.is_delivery ? " Teslimat" : "🏪 Mağazadan"}
                  </span>

                  {order.product?.isOrganic && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      🌱 Organik
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {orders.length === 0 && (
        <div className="text-center py-8 text-gray-500">Henüz sipariş bulunmuyor.</div>
      )}
    </div>
  );
}
