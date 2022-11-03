import {Product} from './Product';

export interface CartItemModel extends Product {
  quantity: number;
}