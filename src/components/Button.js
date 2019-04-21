import React, { Fragment } from 'react';
import {
  Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { material, human, materialColors } from 'react-native-typography';
import PropTypes from 'prop-types';

import constants from '../constants';

const styles = StyleSheet.create({
  container: {
    alignSelf      : 'stretch',
    padding        : 16,
    backgroundColor: constants.green,
    flexDirection  : 'row',
    alignItems     : 'center',
    justifyContent : 'space-between',
  },
  icon: {
    ...material.buttonWhiteObject,
    ...human.headlineWhiteObject,
  },
  label: {
    ...material.buttonWhiteObject,
    ...human.headlineWhiteObject,
  },
  disabled: {
    backgroundColor: materialColors.blackTertiary,
  },
});

const Button = ({
  label, children, icon, onPress, disabled,
}) => (
  <TouchableOpacity
    style={[
      styles.container,
      !onPress || disabled ? styles.disabled : undefined,
    ]}
    onPress={onPress}
    disabled={!onPress || disabled}
  >
    <Fragment>
      { children }
      { label && !children && <Text style={styles.label}>{label}</Text> }
      { icon && !children && <Icon name={icon} style={styles.icon} /> }
    </Fragment>
  </TouchableOpacity>
);

Button.propTypes = {
  label   : PropTypes.string,
  children: PropTypes.node,
  icon    : PropTypes.string,
  onPress : PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  label   : undefined,
  children: undefined,
  icon    : undefined,
  onPress : undefined,
  disabled: false,
};

export default Button;
