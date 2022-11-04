export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ProductsByCategory {
  [categoryName: string]: Product[];
}