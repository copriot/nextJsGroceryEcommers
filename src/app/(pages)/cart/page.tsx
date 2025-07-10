import CartList from "@/app/components/cart/cartList";
import CartSummary from "@/app/components/cart/cartSummary";
import ClearBtn from "@/app/components/cart/clearBtn";
import EmptyCard from "@/app/components/cart/emptyCard";
import { getBasket } from "@/app/services/basketService";
import { userId } from "@/app/utils/constants";

export default async function CartPage() {
  const { cart } = await getBasket(userId);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-zinc-800">Sepetim</h1>

      <div className="mt-5 lg:flex gap-6">
        <div className="lg:w-3/4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 ">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold text-zinc-800">
                Sepetinizdeki Ürünler({cart.items.length})
              </h2>
              {cart.items.length > 0 && <ClearBtn />}
            </div>
            <ul className="mt-5 divide-y divide-gray-300">
              {cart.items.length > 0 ? (
                cart.items.map((item) => <CartList key={item._id} item={item} />)
              ) : (
                <EmptyCard />
              )}
            </ul>
          </div>
        </div>

        <CartSummary cart={cart} />
      </div>
    </div>
  );
}
