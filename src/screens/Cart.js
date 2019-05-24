import React, { PureComponent } from 'react';
import {
  FlatList, View, Text, StyleSheet, TouchableNativeFeedback,
} from 'react-native';
import { material, materialColors } from 'react-native-typography';
import PropTypes from 'prop-types';

import Button from '../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  option: {
    flexDirection    : 'row',
    padding          : 16,
    alignSelf        : 'stretch',
    justifyContent   : 'space-between',
    alignItems       : 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: materialColors.blackTertiary,
  },
  label: {
    ...material.titleObject,
  },
  value: {
    ...material.titleObject,
    color: materialColors.blackSecondary,
  },
});

export default class Cart extends PureComponent {
  static options() {
    return {
      topBar: {
        title: {
          text: 'Cart',
        },
      },
    };
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          { this.props.cart && this.props.cart.map(item => (
            <View key={item.name} style={styles.option}>
              <Text style={styles.label}>
                {`${item.options[0].initialValue}x ${item.name}`}
              </Text>
              <Text style={styles.value}>
                {`$${item.options[0].initialValue * 3.5}0`}
              </Text>
            </View>
          ))}
        </View>
        <Button label="CHECKOUT" icon="payment" onPress={() => alert('Handle Checkout')} />
      </View>
    );
  }
}
