import {createContext, Dispatch, useState} from 'react';

import PRODUCTS from '../shopdata.json';
import {Product} from '../models/Product';

export interface ProductsContextProps {
  setProducts: Dispatch<Product[]>;
  products: Product[];
}

export const ProductsContext = createContext<ProductsContextProps>({
  setProducts: () => null,
  products: [],
});

export const ProductsProvider = ({children}: any) => {
  const [products, setProducts] = useState(PRODUCTS as Product[]);
  const value = {products, setProducts};
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}