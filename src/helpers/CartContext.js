import React from 'react';

const initialState = {
  cart     : [],
  addToCart: () => {},
};

const CartContext = React.createContext(initialState);

class CartProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(item) {
    const cart = this.state.cart;
    cart.push(item);
    this.setState({ cart });
  }

  render() {
    const { cart } = this.state;
    return (
      <CartContext.Provider
        value={{ cart, addToCart: this.addToCart }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

const CartConsumer = CartContext.Consumer;

export { CartProvider, CartConsumer };
