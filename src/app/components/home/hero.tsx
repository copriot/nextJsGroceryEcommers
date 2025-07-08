import Link from "next/link";

export default function Hero() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-5 text-white">
      <div className="flex flex-col justify-between  bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-lg bg-cover bg-no-repeat">
        <h1 className="text-3xl font-semibold">
          Fresh Grocery Products <br />
          Delivery to your doorstep
        </h1>
        <p className="my-3">
          The freshest fruits and vegetables are at your fingertips. The first step to a
          healthy life starts with you.
        </p>
        <Link
          href="/"
          className="bg-white w-fit text-green-700 py-2 px-4 rounded-md my-2 hover:bg-green-50 transition"
        >
          Shop Now
        </Link>
      </div>
      <div className="flex flex-col justify-between max-lg:mt-4 max-sm:hidden bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-lg bg-cover bg-no-repeat">
        <h1 className="text-3xl font-semibold">
          Go organic <br /> stay budget-friendly
        </h1>
        <p className="my-3">
          Healthy eating is now easier than ever with natural and organic products.
        </p>
        <Link
          href="/"
          className="bg-white w-fit text-orange-700 py-2 px-4 rounded-md my-2 hover:bg-orange-50 transition"
        >
          Organic Products
        </Link>
      </div>
    </div>
  );
}
