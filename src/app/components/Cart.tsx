"use client";
import { useCartStore } from "@/store";
import { useStore } from "zustand";

export default function Cart() {
  const cartStore = useCartStore();
  return (
    <div
      onClick={() => cartStore.toggleCart()}
      className="flex items-center cursor-pointer relative"
    >
      <button className="bg-white hover:bg-white py-2 px-7 rounded relative">
        <div className="flex items-center">
          <img src="/carrinho.png" alt="imagem" className="h-5 w-5 mr-2" />
          <span className="text-black">2</span>
        </div>
      </button>
      {!cartStore.isOpen && (
        <div className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50">
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bg-blue-600 right-0 top-0 w-1/3 h-screen p-12 overflow-y-scroll font-bold"
          >
            <h1>Carrinho de compras</h1>
            {}
          </div>
        </div>
      )}
    </div>
  );
}
