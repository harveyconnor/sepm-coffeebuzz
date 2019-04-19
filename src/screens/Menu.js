import React, { Component } from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';
import { material, materialColors } from 'react-native-typography';

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
    id   : '1001',
    name : 'Cappuccino',
    image: coffeeImage,
  },
  {
    id   : '1002',
    name : 'Latte',
    image: coffeeImage,
  },
  {
    id   : '1003',
    name : 'Espresso',
    image: coffeeImage,
  },
];

const sandwiches = [
  {
    id   : '2001',
    name : 'Ham & Cheese',
    image: sandwichImage,
  },
  {
    id   : '2002',
    name : 'Schnitzel',
    image: sandwichImage,
  },
  {
    id   : '2003',
    name : 'Turkey breast',
    image: sandwichImage,
  },
];

const cakes = [
  {
    id   : '3001',
    name : 'Mango cheesecake',
    image: cakeImage,
  },
  {
    id   : '3002',
    name : 'Lemon tart',
    image: cakeImage,
  },
  {
    id   : '3003',
    name : 'Custard tart cake',
    image: cakeImage,
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
