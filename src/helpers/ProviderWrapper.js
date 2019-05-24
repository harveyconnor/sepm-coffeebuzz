import React from 'react';
import { CartProvider } from './CartContext';

const ProviderWrapper = (WrappedComponent) => {
  class Enhance extends React.Component {
    render() {
      return (
        <CartProvider>
          <WrappedComponent {...this.props} />
        </CartProvider>
      );
    }
  }
  Enhance.options = WrappedComponent.options;
  return Enhance;
};

export const Wrapper = Component => props => (
  <CartProvider>
    <Component {...props} />
  </CartProvider>
);

export default ProviderWrapper;
