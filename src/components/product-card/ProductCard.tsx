import Button from '../button/Button';
import {Product} from '../../models/Product';

import './ProductCard.scss';
import {useContext} from 'react';
import {CartContext} from '../../contexts/Cart';

const ProductCard = (product: Product) => {
  const {addItemToCart} = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <section className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">€{product.price}</span>
      </div>
      <Button buttonStyle="inverted" onClick={addProductToCart}>
        <span>Add to card</span>
      </Button>
    </section>
  );
};

export default ProductCard;