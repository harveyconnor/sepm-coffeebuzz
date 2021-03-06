import React, { Component, Fragment } from 'react';
import {
  ScrollView, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';

import { CartConsumer } from '../helpers/CartContext';

import ItemBanner from '../components/ItemBanner';
import ItemOptions from '../components/ItemOptions';
import Button from '../components/Button';

import { CART_SCREEN } from '.';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class Menu extends Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: passProps.name,
        },
      },
    };
  }

  static propTypes = {
    name       : PropTypes.string.isRequired,
    image      : PropTypes.any,
    description: PropTypes.string,
    options    : PropTypes.arrayOf(PropTypes.shape({
      label       : PropTypes.string.isRequired,
      options     : PropTypes.arrayOf(PropTypes.string),
      initialValue: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number,
      ]),
    })),
  }

  static defaultProps = {
    image      : undefined,
    description: undefined,
    options    : [],
  }

  handleAddToCart = (cb) => {
    const { name, options } = this.props;

    cb({ name, options });

    Navigation.push(this.props.componentId, {
      component: {
        id       : CART_SCREEN,
        name     : CART_SCREEN,
        passProps: {
          cart: [{ name, options }],
        },
      },
    });
  }

  render() {
    const {
      name, description, image, options,
    } = this.props;
    return (
      <Fragment>
        <ScrollView style={styles.container}>
          <ItemBanner title={name} caption={description} image={image} />
          <ItemOptions options={options} />
        </ScrollView>
        <CartConsumer>
          { ({ addToCart }) => (
            <Button label="ADD TO CART" icon="add-shopping-cart" onPress={() => this.handleAddToCart(addToCart)} />
          )}
        </CartConsumer>
      </Fragment>
    );
  }
}
