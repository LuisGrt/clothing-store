import {useContext} from 'react';
import {ProductsContext} from '../../contexts/Products';
import {Product} from '../../models/Product';
import ProductCard from '../../components/product-card/ProductCard';

import './Shop.scss';

const Shop = () => {
  const {products} = useContext(ProductsContext);

  return (
    <section className="products">
      {products.map((product: Product) =>
        <ProductCard key={product.id} {...product} />
      )}
    </section>
  );
};

export default Shop;