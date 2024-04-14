import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductType } from "./types/ProductTypes";
import Product from "./app/components/AddCart";

type CartState = {
  cart: ProductType[];
  addProduct: (product: ProductType) => void;
  removeFromCart: (productId: string) => void;
  isOpen: boolean;
  toggleCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addProduct: (product) =>
        set((state) => {
          const existingProduct = state.cart.find((p) => p.id === product.id);
          if (existingProduct) {
            const updatedCart = state.cart.map((p) =>
              p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
            );
            return { cart: updatedCart };
          } else {
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
          }
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((p) => String(p.id) !== String(productId)),
        })),
      isOpen: false,
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    { name: "cart-storage" }
  )
);
