import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1) => {
    const exists = cartItems.find(item => item._id === product._id);

    if (exists) {
      setCartItems(
        cartItems.map(item =>
          item._id === product._id
            ? { ...item, qty: item.qty + quantity }
            : item
        )
      );
    } else {
      // Add a unique _id from the product object (assuming MongoDB ID)
      setCartItems([...cartItems, { ...product, qty: quantity }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item._id !== id));
  };
  
  const adjustQuantity = (id, newQty) => {
    if (newQty < 1) {
      removeFromCart(id);
      return;
    }
    setCartItems(
      cartItems.map(item =>
        item._id === id
          ? { ...item, qty: newQty }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    adjustQuantity,
    getTotalPrice,
    cartCount: cartItems.reduce((acc, item) => acc + item.qty, 0),
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};