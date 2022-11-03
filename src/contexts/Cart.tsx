import {createContext, Dispatch, useEffect, useState} from 'react';
import {Product} from '../models/Product';
import {CartItemModel} from '../models/CartItem';

export interface CartContextProps {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<boolean>;
  cartItems: CartItemModel[];
  addItemToCart: (product: Product | CartItemModel) => void;
  cartCount: number;
  removeItemFromCart: (item: CartItemModel) => void;
  clearItem: (item: CartItemModel) => void;
  total: number;
}

export const CartContext = createContext<CartContextProps>({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
  removeItemFromCart: () => null,
  clearItem: () => null,
  total: 0,
});

const addCartItem = (cartItems: CartItemModel[], productToAdd: Product): CartItemModel[] => {
  const existing = cartItems.find((item: CartItemModel) => item.id === productToAdd.id);

  if (existing) {
    return cartItems.map((item: CartItemModel) => item.id === productToAdd.id ? {
      ...item,
      quantity: item.quantity + 1
    } : item);
  }

  return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeCartItem = (cartItems: CartItemModel[], itemToRemove: CartItemModel): CartItemModel[] => {
  const existing = cartItems.find((item) => item.id === itemToRemove.id);

  if (existing?.quantity === 1) {
    return cartItems.filter(item => item.id !== itemToRemove.id);
  }

  return cartItems.map(item => item.id === itemToRemove.id ? {...item, quantity: item.quantity - 1} : item);
};

const clearCartItem = (cartItems: CartItemModel[], itemToClear: CartItemModel): CartItemModel[] => {
  return cartItems.filter((item) => item.id !== itemToClear.id);
}

export const CartProvider = ({children}: any) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItemModel[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const count = cartItems.reduce<number>((acc: number, item: CartItemModel) => acc + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.reduce<number>((acc: number, item: CartItemModel) => acc + item.quantity * item.price, 0);
    setTotal(total);
  }, [cartItems]);

  const addItemToCart = (productToAdd: Product | CartItemModel): void => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (itemToRemove: CartItemModel): void => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };

  const clearItem = (itemToClear: CartItemModel): void => {
    setCartItems(clearCartItem(cartItems, itemToClear));
  }

  const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, clearItem, total};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};