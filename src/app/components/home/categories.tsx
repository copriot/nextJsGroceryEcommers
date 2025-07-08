import { BiSolidOffer } from "react-icons/bi";
import { FaLeaf } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";

export default function Categories() {
  const options = [
    {
      icon: <MdLocalShipping className="text-4xl text-blue-600" />,
      title: "Fast Delivery",
      description: "Same-day delivery",
      bgColor: "bg-blue-100",
    },
    {
      icon: <FaLeaf className="text-4xl text-green-600" />,
      title: "Fresh Products",
      description: "Daily freshness gurantee",
      bgColor: "bg-green-100",
    },
    {
      icon: <BiSolidOffer className="text-4xl text-orange-600" />,
      title: "Best Price",
      description: "Best price gurantee",
      bgColor: "bg-orange-100",
    },
    {
      icon: <RiSecurePaymentFill className="text-4xl text-purple-600" />,
      title: "Secure Payment",
      description: "Trusted payment methods",
      bgColor: "bg-purple-100",
    },
  ];
  return (
    <section className="mt-10 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {options.map((option, index) => {
        return (
          <div
            key={index}
            className={`flex items-center gap-3 p-4 rounded-lg ${option.bgColor} border border-gray-200`}
          >
            {option.icon}
            <div>
              <h3 className="font-medium text-gray-800">{option.title}</h3>
              <p className="text-sm text-gray-600">{option.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
