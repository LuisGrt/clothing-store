import {createContext, Dispatch, useState} from 'react';

export interface CartContextProps {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<boolean>;
}

export const CartContext = createContext<CartContextProps>({
  isCartOpen: false,
  setIsCartOpen: () => null,
});

export const CartProvider = ({children}: any) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const value = {isCartOpen, setIsCartOpen};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}