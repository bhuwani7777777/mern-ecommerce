import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartScreen = () => {
  const { cartItems, getTotalPrice, adjustQuantity, removeFromCart } = useCart();

  const CartItem = ({ item }) => (
    <div style={itemStyles.container}>
      <Link to={`/product/${item._id}`} style={itemStyles.title}>
        {item.name}
      </Link>
      <div style={itemStyles.qtyControl}>
        <button 
          onClick={() => adjustQuantity(item._id, item.qty - 1)}
          style={itemStyles.qtyButton}
        >
          -
        </button>
        <span style={itemStyles.qtyText}>{item.qty}</span>
        <button 
          onClick={() => adjustQuantity(item._id, item.qty + 1)}
          style={itemStyles.qtyButton}
        >
          +
        </button>
      </div>
      <span style={itemStyles.subtotal}>
        ${(item.price * item.qty).toFixed(2)}
      </span>
      <button 
        onClick={() => removeFromCart(item._id)} 
        style={itemStyles.removeButton}
      >
        Remove
      </button>
    </div>
  );

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div style={cartStyles.empty}>
          Your cart is empty. <Link to="/" style={{color: 'blue'}}>Go Shopping</Link>
        </div>
      ) : (
        <div style={cartStyles.grid}>
          <div style={cartStyles.itemsList}>
            {cartItems.map(item => <CartItem key={item._id} item={item} />)}
          </div>
          <div style={cartStyles.summary}>
            <h2>Order Summary</h2>
            <p>Total Items: **{cartItems.reduce((acc, item) => acc + item.qty, 0)}**</p>
            <h3>Total: **${getTotalPrice()}**</h3>
            <button style={cartStyles.checkoutButton}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Basic inline styles
const cartStyles = {
  empty: {
    padding: '20px',
    border: '1px dashed #ccc',
    textAlign: 'center',
    fontSize: '1.2em',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    gap: '30px',
    padding: '20px 0',
  },
  itemsList: {
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '10px',
  },
  summary: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    height: 'fit-content',
  },
  checkoutButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '15px',
    fontSize: '1.1em',
  }
};

const itemStyles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #eee',
    padding: '10px 0',
  },
  title: {
    flex: '3',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#333',
  },
  qtyControl: {
    display: 'flex',
    alignItems: 'center',
    flex: '1',
  },
  qtyButton: {
    padding: '5px 10px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    cursor: 'pointer',
  },
  qtyText: {
    padding: '0 10px',
  },
  subtotal: {
    flex: '1',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  removeButton: {
    padding: '5px 10px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '10px',
  }
};

export default CartScreen;