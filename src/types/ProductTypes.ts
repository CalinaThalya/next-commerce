export type ProductType = {
  quantity: number;
  id: number;
  name: string;
  brand: string;
  description: string | null;
  photo: string;
  price: any | number;
  createdAt: Date;
  updatedAt: Date;
};

export type ProductsResponseType = {
  products: ProductType[];
  count: number;
};
