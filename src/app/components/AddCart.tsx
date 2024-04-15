"use client";

import { useCartStore } from "@/store";
import { ProductType } from "@/types/ProductTypes";

export default function Product({ product }: { product: ProductType }) {
  const { addProduct } = useCartStore();

  return (
    <button
      onClick={() => addProduct(product)}
      className="flex items-center justify-center font-bold text-sm text-white bg-blue-600 h-9 rounded-md p-4"
    >
      {" "}
      <img
        src="/8679212_shopping_bag_icon (1).png"
        alt="Sua Foto"
        className="h-6 w-6 mr-2"
      />
      Comprar{" "}
    </button>
  );
}
