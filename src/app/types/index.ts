//ÜRÜNLER

type Product = {
  category: string;
  description: string;
  expiryDays: number;
  isOrganic: boolean;
  name: string;
  nutritionalValue: string;
  origin: string;
  photo: string;
  price: number;
  stock: number;
  unit: string;
  __v: number;
  _id: string;
};

type GetProductsResponse = {
  groceries: Product[];
};

type GetProductResponse = {
  grocery: Product;
};

//SEPET

type Cart = {
  message: string;
  cart: {
    _id: string;
    userId: string;
    items: {
      grocery: Product;
      quantity: number;
      price: number;
      name: string;
      _id: string;
    }[];
    totalAmount: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
};
type CartMessage = Pick<Cart, "message">;
type GetBasketResponse = {
  cart: {
    _id: string;
    userId: string;
    items: {
      grocery: Product;
      quantity: number;
      price: number;
      name: string;
      _id: string;
    }[];
    totalAmount: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
};

type CheckoutSingleItemResponse = {
  url: string;
};

export type {
  Product,
  GetProductsResponse,
  GetProductResponse,
  Cart,
  CheckoutSingleItemResponse,
  GetBasketResponse,
  CartMessage,
};
