import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { CartConsumer } from '../helpers/CartContext';

export default class Cart extends Component {
  componentDidUpdate() {
    console.log('updated');
  }

  render() {
    return (
      <View>
        <CartConsumer>
          { ({ cart }) => {
            cart.map(item => (
              <Text key={item.name}>{item.name}</Text>
            ));
          }
        }
        </CartConsumer>
      </View>
    );
  }
}
