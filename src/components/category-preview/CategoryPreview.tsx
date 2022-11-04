import './CategoryPreview.scss';
import {Product} from '../../models/Product';
import ProductCard from '../product-card/ProductCard';
import {Link} from 'react-router-dom';

interface CategoryPreviewProps {
  title: string;
  products: Product[];
}

const CategoryPreview = ({title, products}: CategoryPreviewProps) => {
  return (
    <div className="category-preview">
      <h2>
        <Link className="title" to={title}>{title}</Link>
      </h2>
      <div className="preview">
        {products
          .filter((_: Product, idx: number) => idx < 4)
          .map((product: Product) => <ProductCard key={product.id} {...product} />)
        }
      </div>
    </div>
  );
};

export default CategoryPreview;