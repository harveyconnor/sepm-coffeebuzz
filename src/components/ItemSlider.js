import React, { PureComponent, Fragment } from 'react';
import {
  Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View, Image,
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
    backgroundColor : materialColors.whitePrimary,
    elevation       : 10,
    borderRadius    : 8,
    marginHorizontal: 16,
    paddingBottom   : 16,
    alignItems      : 'flex-start',
    justifyContent  : 'center',
    marginBottom    : 24,
    marginTop       : 8,
    overflow        : 'hidden',
  },
  title    : {},
  thumbnail: {
    height: ITEM_SIZE,
    width : ITEM_SIZE,
  },
  captionContainer: {
    flex             : 1,
    paddingTop       : 16,
    flexWrap         : 'wrap',
    paddingHorizontal: 16,
  },
  caption: {
    ...material.buttonObject,
  },
  header: {
    flexDirection    : 'row',
    alignItems       : 'center',
    justifyContent   : 'space-between',
    paddingHorizontal: 16,
    paddingBottom    : 8,
    paddingTop       : 16,
  },
  description: {
    ...material.captionObject,
  },
});

export default class ItemSlider extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id         : PropTypes.string.isRequired,
        name       : PropTypes.string.isRequired,
        image      : PropTypes.any,
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
      <Image resizeMode="cover" style={styles.thumbnail} source={item.image} />
      <View style={styles.captionContainer}>
        <Text style={styles.caption}>{item.name.toUpperCase()}</Text>
        { item.description && <Text style={styles.description}>{item.description}</Text> }
      </View>
    </TouchableOpacity>
  )

  render() {
    const { items, title } = this.props;

    return (
      <Fragment>
        { title && (
          <View style={styles.header}>
            <Text style={[material.title, styles.title]}>{title}</Text>
            <TouchableOpacity>
              <Text style={material.button}>VIEW MORE</Text>
            </TouchableOpacity>
          </View>
        )}
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
