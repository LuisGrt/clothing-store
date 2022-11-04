import {useParams} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import {ProductsContext} from '../../contexts/Products';
import {Product} from '../../models/Product';
import ProductCard from '../../components/product-card/ProductCard';

import './Category.scss';

const Category = () => {
  const {category} = useParams<string>();
  const {products: productsByCategory} = useContext(ProductsContext);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (category && productsByCategory) {
      setProducts(productsByCategory[category]);
    }
  }, [category, productsByCategory]);

  return (
    <>
      <h2 className="category-title">{category}</h2>
      <section className="category-container">
        {products && products.map((product) => <ProductCard key={product.id} {...product} />)}
      </section>
    </>
  );
};

export default Category;