import { getProducts } from "@/app/services/productsServices";
import { Product } from "@/app/types";
import Card from "./card";

export default async function Products() {
  const { groceries } = await getProducts();

  {
    /*  elimdeki dizi
  const elimdekiDizi = [{}, {}, {}, {}];
  //istediğim format
  const groups = {
    fruits: [{}, {}, {}],
    vegetables: [{}, {}, {}],
  };*/
  }

  //elimdeki diziyi istediğim formatta grupla
  const groupedProducts = groceries.reduce<Record<string, Product[]>>(
    (groups, products) => {
      const category = products.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(products);
      return groups;
    },
    {}
  );
  console.log(groupedProducts);
  return (
    <div className="text-black">
      {Object.keys(groupedProducts).map((category, index) => {
        return (
          <div key={index}>
            <div className="flex items-center justify-center my-4">
              <div className="flex-1 h-[2px] bg-green-600"></div>
              <h2 className=" text-2xl font-bold px-4 bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent ">
                {category.includes("ı") ? category.replace("ı", "i") : category}
              </h2>
              <div className="flex-1 h-[2px] bg-orange-600"></div>
            </div>
            <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
              {groupedProducts[category].map((product) => {
                return <Card key={product._id} product={product} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
