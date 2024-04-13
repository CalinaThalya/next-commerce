import { ProductType } from "@/types/ProductTypes";
import Product from "./components/Product";
async function getProducts() {
  const res = await fetch(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=name&orderBy=DESC"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.products;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gab-6
        "
      >
        {products.map((product: ProductType) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
