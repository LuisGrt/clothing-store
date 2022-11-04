import CategoryPreview from '../../components/category-preview/CategoryPreview';
import {useContext} from 'react';
import {ProductsContext} from '../../contexts/Products';

const Categories = () => {
  const {products} = useContext(ProductsContext);

  return (
    <section className="categories-container">
      {
        Object
          .keys(products)
          .map((key: string) => <CategoryPreview key={key} title={key} products={products[key]}/>)
      }
    </section>
  );
};

export default Categories;