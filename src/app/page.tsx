import { ProductType } from "@/types/ProductTypes";
import Product from "./components/Product";
async function getProducts() {
  const res = await fetch(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=name&orderBy=DESC"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  console.log(products);
  if (!Array.isArray(products)) {
    console.error("products não é um array:", products);
    return <div>Erro: produtos não são um array</div>;
  }

  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gab-6
        "
      >
        {products.map((product: ProductType) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
