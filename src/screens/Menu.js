import React, { Component } from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';
import { material, materialColors } from 'react-native-typography';

import ItemSlider from '../components/ItemSlider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const coffee = [
  {
    id  : '1001',
    name: 'Cappuccino',
  },
  {
    id  : '1002',
    name: 'Latte',
  },
  {
    id  : '1003',
    name: 'Espresso',
  },
];

const sandwiches = [
  {
    id  : '2001',
    name: 'Ham & Cheese',
  },
  {
    id  : '2002',
    name: 'Schnitzel',
  },
  {
    id  : '2003',
    name: 'Turkey breast',
  },
];

const cakes = [
  {
    id  : '3001',
    name: 'Mango cheesecake',
  },
  {
    id  : '3002',
    name: 'Lemon tart',
  },
  {
    id  : '3003',
    name: 'Custard tart',
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
