import React, { Component } from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { material, materialColors } from 'react-native-typography';

import ItemBanner from '../components/ItemBanner';

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
  }

  static defaultProps = {
    image      : undefined,
    description: undefined,
  }

  render() {
    const { name, description, image } = this.props;
    return (
      <ScrollView style={styles.container}>
        <ItemBanner title={name} caption={description} image={image} />
      </ScrollView>
    );
  }
}
