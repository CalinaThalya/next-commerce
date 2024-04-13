import { ProductType } from "@/types/ProductTypes";

type ProductProps = {
  product: ProductType;
};
export default function Products({ product }: ProductProps) {
  return (
    <div className="flex lex-col">
      <div>{product.photo}</div>
      <div>{product.name}</div>

      <div>Add carrinho</div>
    </div>
  );
}
