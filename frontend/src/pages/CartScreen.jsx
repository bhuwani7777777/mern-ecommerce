import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import "./CartScreen.css"; // CSS for styling

const CartScreen = () => {
  const { cartItems, removeFromCart, getTotalPrice, updateQty } = useCart();

  return (
    <div className="cart-page">
      <Header />

      <section className="cart-section">
        <h2>Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <div className="cart-container">
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item._id} className="cart-item">
                  <img src={item.image || "/images/default-product.png"} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <div className="cart-qty">
                      <label>Qty:</label>
                      <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) => updateQty(item._id, parseInt(e.target.value))}
                      />
                    </div>
                    <p>Subtotal: ${(item.price * item.qty).toFixed(2)}</p>
                    <button className="remove-btn" onClick={() => removeFromCart(item._id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Cart Summary</h3>
              <p>Total Items: {cartItems.reduce((acc, item) => acc + item.qty, 0)}</p>
              <p>Total Price: ${getTotalPrice().toFixed(2)}</p>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default CartScreen;
