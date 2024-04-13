export type ProductType = {
  id: number;
  name: string;
  brand: string;
  description: string | null;
  photo: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ProductsResponseType = {
  products: ProductType[];
  count: number;
};
