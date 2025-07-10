import {
  Cart,
  CartMessage,
  CheckoutSingleItemResponse,
  GetBasketResponse,
  Product,
} from "../types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
//sepete ürün ekleme
const addToBasket = async (userId: string, groceryId: string, quantity: number) => {
  const res = await fetch(`${BASE_URL}/api/cart`, {
    method: "POST",
    body: JSON.stringify({ userId, groceryId, quantity }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};
//Tek bir ürün için ödeme sayfası urli oluştur
const checkoutSingleItem = async (
  grocery: Product,
  quantity: number
): Promise<CheckoutSingleItemResponse> => {
  const body = {
    grocery: {
      _id: grocery._id,
      name: grocery.name,
      price: grocery.price,
      description: grocery.description,
    },
    quantity: quantity,
    customerInfo: {
      name: "Zeki ÖZDEN",
      phone: "05555555555",
      deliveryAddress: "Ankara, Türkiye",
      isDelivery: true,
    },
  };
  const res = await fetch(`${BASE_URL}/api/checkout`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

//bütün seper için ödeme sayfası url'i oluştur
const checkoutAllItems = async (userId: string): Promise<CheckoutSingleItemResponse> => {
  const body = {
    userId: userId,
    customerInfo: {
      name: "Zeki ÖZDEN",
      phone: "05555555555",
      deliveryAddress: "Ankara, Türkiye",
      isDelivery: true,
    },
  };
  const res = await fetch(`${BASE_URL}/api/checkout`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};
//kullanıcının sepetini getir
const getBasket = async (userId: string): Promise<GetBasketResponse> => {
  const res = await fetch(`${BASE_URL}/api/cart?userId=${userId}`);
  return res.json();
};
//sepetteki ürünü güncelle
const updateCartItem = async (
  userId: string,
  groceryId: string,
  quantity: number
): Promise<Cart> => {
  const res = await fetch(`${BASE_URL}/api/cart/item/`, {
    method: "PUT",
    body: JSON.stringify({ userId, groceryId, quantity }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

//sepetteki ürünü sil
const removeCartItem = async (userId: string, groceryId: string): Promise<Cart> => {
  const res = await fetch(
    `${BASE_URL}/api/cart/item?userId=${userId}&groceryId=${groceryId}`,
    {
      method: "DELETE",
      body: JSON.stringify({ userId, groceryId }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.json();
};
//sepeti temizle
const clearCart = async (userId: string): Promise<CartMessage> => {
  const res = await fetch(`${BASE_URL}/api/cart?userId=${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

export {
  addToBasket,
  checkoutSingleItem,
  getBasket,
  updateCartItem,
  removeCartItem,
  clearCart,
  checkoutAllItems,
};
