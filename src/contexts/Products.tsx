import {createContext, Dispatch, useEffect, useState} from 'react';

import {ProductsByCategory} from '../models/Product';
import {getCategories} from '../utils/firebase.utils';

export interface ProductsContextProps {
  setProducts: Dispatch<ProductsByCategory>;
  products: ProductsByCategory;
}

export const ProductsContext = createContext<ProductsContextProps>({
  setProducts: () => null,
  products: {},
});

export const ProductsProvider = ({children}: any) => {
  const [products, setProducts] = useState<ProductsByCategory>({});
  const value = {products, setProducts};

  useEffect(() => {
    const getProductsByCategory = async () => {
      const products = await getCategories();
      console.log(products);
      setProducts(products);
    }

    getProductsByCategory();
  }, []);

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}