const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const getOrders = async () => {
  const res = await fetch(`${BASE_URL}/api/orders/`);
  return res.json();
};

export { getOrders };
