import { ProductType } from "@/types/ProductTypes";
import Image from "next/image";
import ProductImage from "./ProductImage";

type ProductProps = {
  product: ProductType;
};
export default function Products({ product }: ProductProps) {
  return (
    <div className="flex flex-col shadow-lg h-96 bg-white p-5">
      <div className="relative max-h-72 flex-1">
        <ProductImage product={product} fill />
      </div>
      <div className="flex justify-between font-bold my-3">{product.name}</div>
      <button className="font-bold rounded-md bg-blue-600 text-white px-3 py-2.5 text-sm text-center flex items-center justify-center space-x-1">
        <img
          src="/8679212_shopping_bag_icon (1).png"
          alt="Sua imagem"
          className="h-5 w-5"
        />
        <span>COMPRAR</span>
      </button>
    </div>
  );
}
