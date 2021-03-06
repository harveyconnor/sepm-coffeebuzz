import React, { Component } from 'react';
import {
  ScrollView, StyleSheet,
} from 'react-native';

import ItemSlider from '../components/ItemSlider';

const coffeeImage = require('../assets/demo/coffee.jpg');
const sandwichImage = require('../assets/demo/sandwich.jpg');
const cakeImage = require('../assets/demo/cake.jpg');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const coffee = [
  {
    id         : '1001',
    name       : 'Cappuccino',
    image      : coffeeImage,
    description: 'A popular choice of coffee',
    options    : [
      { label: 'Quantity', initialValue: 1 },
      { label: 'Size', initialValue: 'M', options: ['S', 'M', 'L'] },
    ],
  },
  {
    id         : '1002',
    name       : 'Latte',
    image      : coffeeImage,
    description: 'A common flavour',
    options    : [
      { label: 'Quantity', initialValue: 1 },
      { label: 'Size', initialValue: 'M', options: ['S', 'M', 'L'] },
    ],
  },
  {
    id     : '1003',
    name   : 'Espresso',
    image  : coffeeImage,
    options: [
      { label: 'Quantity', initialValue: 1 },
      { label: 'Size', initialValue: 'M', options: ['S', 'M', 'L'] },
    ],
  },
];

const sandwiches = [
  {
    id     : '2001',
    name   : 'Ham & Cheese',
    image  : sandwichImage,
    options: [
      { label: 'Quantity', initialValue: 1 },
      { label: 'Toasted', initialValue: 'Yes', options: ['Yes', 'No'] },
    ],
  },
  {
    id     : '2002',
    name   : 'Schnitzel',
    image  : sandwichImage,
    options: [
      { label: 'Quantity', initialValue: 1 },
      { label: 'Toasted', initialValue: 'Yes', options: ['Yes', 'No'] },
    ],
  },
  {
    id     : '2003',
    name   : 'Turkey breast',
    image  : sandwichImage,
    options: [
      { label: 'Quantity', initialValue: 1 },
      { label: 'Toasted', initialValue: 'Yes', options: ['Yes', 'No'] },
    ],
  },
];

const cakes = [
  {
    id     : '3001',
    name   : 'Mango cheesecake',
    image  : cakeImage,
    options: [
      { label: 'Quantity', initialValue: 1 },
    ],
  },
  {
    id     : '3002',
    name   : 'Lemon tart',
    image  : cakeImage,
    options: [
      { label: 'Quantity', initialValue: 1 },
    ],
  },
  {
    id     : '3003',
    name   : 'Custard tart cake',
    image  : cakeImage,
    options: [
      { label: 'Quantity', initialValue: 1 },
    ],
  },
];

export default class Menu extends Component {
  static options() {
    return {
      topBar: {
        title: {
          text: 'Menu',
        },
      },
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <ItemSlider items={coffee} title="Coffee" />
        <ItemSlider items={sandwiches} title="Sandwiches" />
        <ItemSlider items={cakes} title="Cakes" />
      </ScrollView>
    );
  }
}
