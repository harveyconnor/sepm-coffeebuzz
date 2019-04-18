import React, { PureComponent } from 'react';
import {
  Dimensions, FlatList, StyleSheet, Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { materialColors } from 'react-native-typography';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: materialColors.whitePrimary,
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
  };

  static defaultProps = {
    items: [],
  };

  keyExtractor = ({ id }) => id

  renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  )

  render() {
    const { items } = this.props;

    return (
      <FlatList
        style={styles.container}
        data={items}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        horizontal
      />
    );
  }
}
