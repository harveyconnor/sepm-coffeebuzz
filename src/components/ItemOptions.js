import React, { PureComponent } from 'react';
import {
  FlatList, View, Text, StyleSheet, TouchableNativeFeedback,
} from 'react-native';
import { material, materialColors } from 'react-native-typography';
import PropTypes from 'prop-types';

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

class ItemOptions extends PureComponent {
  keyExtractor = option => `item-option-${option.label}`

  renderItem = ({ item }) => (
    <TouchableNativeFeedback>
      <View style={styles.option}>
        <Text style={styles.label}>{item.label}</Text>
        <Text style={styles.value}>{item.initialValue}</Text>
      </View>
    </TouchableNativeFeedback>
  )

  render() {
    const { options } = this.props;
    return (
      <FlatList
        style={styles.container}
        data={options}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

ItemOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label       : PropTypes.string.isRequired,
    options     : PropTypes.arrayOf(PropTypes.string),
    initialValue: PropTypes.oneOfType([
      PropTypes.string, PropTypes.number,
    ]),
  })),
};

ItemOptions.defaultProps = {
  options: [],
};

export default ItemOptions;
