import { useCartStore } from "@/store";
import { ProductType } from "@/types/ProductTypes";

export default function Product({ product }: { product: ProductType }) {
  const { addProduct } = useCartStore(); // Corrigido aqui
  return (
    <button
      onClick={() => addProduct(product)}
      className="font-bold rounded-md bg-blue-600 text-white px-3 py-2.5 text-sm text-center flex items-center justify-center space-x-1"
    >
      <img
        src="/8679212_shopping_bag_icon (1).png"
        alt="img"
        className="h-5 w-5"
      />
      <span>COMPRAR</span>
    </button>
  );
}
