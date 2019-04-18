import React, { PureComponent, Fragment } from 'react';
import {
  Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { materialColors, material } from 'react-native-typography';

const SCREEN_WIDTH = Dimensions.get('window').width;
const NUM_ITEMS = 2.5; // Only partially show the third one.

const ITEM_SIZE = (SCREEN_WIDTH - (8 * 3)) / NUM_ITEMS; // Margin of 8 per item.

const styles = StyleSheet.create({
  container: {},
  item     : {
    width           : ITEM_SIZE,
    height          : ITEM_SIZE,
    backgroundColor : materialColors.whitePrimary,
    elevation       : 10,
    borderRadius    : 8,
    marginHorizontal: 16,
    paddingBottom   : 16,
    alignItems      : 'center',
    justifyContent  : 'center',
    marginBottom    : 24,
    marginTop       : 8,
  },
  title: {
    paddingHorizontal: 16,
    paddingBottom    : 8,
    paddingTop       : 16,
  },
});

export default class ItemSlider extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id         : PropTypes.string.isRequired,
        name       : PropTypes.string.isRequired,
        image      : PropTypes.string,
        description: PropTypes.string,
      }),
    ),
    title: PropTypes.string,
  };

  static defaultProps = {
    items: [],
    title: undefined,
  };

  keyExtractor = ({ id }) => id

  renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={material.button}>{item.name.toUpperCase()}</Text>
    </TouchableOpacity>
  )

  render() {
    const { items, title } = this.props;

    return (
      <Fragment>
        { title && <Text style={[material.title, styles.title]}>{title}</Text> }
        <FlatList
          style={styles.container}
          data={items}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Fragment>
    );
  }
}
