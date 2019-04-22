import React from 'react';
import {
  Dimensions, View, Image, Text, StyleSheet,
} from 'react-native';
import { material } from 'react-native-typography';
import PropTypes from 'prop-types';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height  : 200,
    overflow: 'hidden',
  },
  imageBacking: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width  : SCREEN_WIDTH,
    height : 200,
    opacity: 0.5,
  },
  caption: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems    : 'flex-end',
    padding       : 16,
  },
});

const ItemBanner = ({ title, caption, image }) => (
  <View style={styles.container}>
    <View style={styles.imageBacking} />
    <Image style={styles.image} source={image} />
    <View style={styles.caption}>
      { title && <Text style={material.titleWhite}>{title}</Text> }
      { caption && <Text style={material.subheadingWhite}>{caption}</Text> }
    </View>
  </View>
);

ItemBanner.propTypes = {
  title  : PropTypes.string.isRequired,
  caption: PropTypes.string,
  image  : PropTypes.any,
};

ItemBanner.defaultProps = {
  caption: undefined,
  image  : undefined,
};

export default ItemBanner;
