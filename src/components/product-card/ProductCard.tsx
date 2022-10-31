import Button from '../button/Button';
import {Product} from '../../models/Product';

import './ProductCard.scss';

const ProductCard = ({name, price, imageUrl}: Product) => {
  return (
    <section className="product-card">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonStyle="inverted">
        <span>Add to card</span>
      </Button>
    </section>
  );
};

export default ProductCard;