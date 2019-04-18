import React, { Component } from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';

import ItemSlider from '../components/ItemSlider';

const styles = StyleSheet.create({
  container: {
    flex  : 1,
    margin: 16,
  },
  item: {
    alignItems     : 'center',
    justifyContent : 'center',
    alignSelf      : 'stretch',
    margin         : 8,
    padding        : 16,
    backgroundColor: 'black',
  },
});

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
      <ScrollView contentContainerStyle={styles.container}>
        <ItemSlider />
      </ScrollView>
    );
  }
}
