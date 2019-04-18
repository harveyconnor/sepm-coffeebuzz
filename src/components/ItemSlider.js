import React, { PureComponent } from 'react';
import { View, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';

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
        data={items}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        horizontal
      />
    );
  }
}
