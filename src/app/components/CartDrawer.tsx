"use client";
import { formatPrice } from "@/lib/ultils";
import { useCartStore } from "@/store";
import Image from "next/image";

export default function CartDrawer() {
  const useStore = useCartStore();

  const totalPrice = useStore.cart.reduce((acc, item) => {
    return acc + item.price! * item.quantity!;
  }, 0);

  return (
    <div
      onClick={() => useStore.toggleCart()}
      className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute bg-blue-600 right-0 top-0 w-1/3 h-screen p-8 overflow-y-scroll"
      >
        <button
          onClick={() => useStore.toggleCart()}
          className="flex items-center justify-center font-bold text-3xl text-white "
        >
          Carrinho de compras{" "}
        </button>

        <div className="border-t border-gray-400 my-4"></div>

        {useStore.cart.map((item) => (
          <div key={item.id} className="flex gap-4 py-4">
            <Image
              src={item.photo}
              alt={item.name}
              width={120}
              height={120}
              className="object-cover w-24"
            />
            <div>
              <h2 className="w-42 truncate">{item.name}</h2>
              <h2>Quantidade: {item.quantity}</h2>
              <p className="text-white text-sm font-bold">
                {formatPrice(item.price)}
              </p>
              <button
                className="py-1 px-2 border  bg-white text-black rounded-md mt-2 text-sm mr-1"
                onClick={() => useStore.addProduct(item)}
              >
                Adicionar
              </button>
              <button
                onClick={() => useStore.removeProduct(item)}
                className="py-1 px-2 border bg-white text-black rounded-md mt-2 text-sm"
              >
                Remover
              </button>
            </div>
          </div>
        ))}

        {useStore.cart.length > 0 && (
          <div>
            <p className="text-white font-bold">
              Total: {formatPrice(totalPrice)}
            </p>
            <button
              onClick={() => useStore.setCheckout("checkout")}
              className="w-full rounded-md bg-black text-white py-2 mt-2"
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
