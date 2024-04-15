// Adicione esta linha no topo do arquivo para usar Client Components
"use client";

import { useCartStore } from "@/store";
import CartDrawer from "./CartDrawer";

export default function Cart() {
  const useStore = useCartStore();

  return (
    <>
      <button
        onClick={() => useStore.toggleCart()}
        className="flex items-center relative bg-white rounded-md p-2 px-7"
      >
        <img src="carrinho.png" alt="Sua Foto" className="h-8 w-8" />
        <span
          className="
            text-black
            text-sm 
            font-bold 
            rounded-full 
            h-5 w-5
            flex items-center justify-center
            absolute
            left-3
            bottom-3"
        >
          {useStore.cart?.length}
        </span>
      </button>
      {!useStore.isOpen && <CartDrawer />}
    </>
  );
}
