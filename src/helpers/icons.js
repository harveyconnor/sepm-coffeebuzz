/* eslint-disable no-undef */
import { PixelRatio, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const navIconSize = __DEV__ === false && Platform.OS === 'android' ? PixelRatio.getPixelSizeForLayoutSize(40) : 40;
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
  'shopping-cart' : [navIconSize],
  settings        : [navIconSize],
  'free-breakfast': [navIconSize],
};

const iconsMap = {};
const iconsLoaded = new Promise((resolve) => {
  Promise.all(
    Object.keys(icons).map(iconName => MaterialIcons.getImageSource(iconName.replace(replaceSuffixPattern, ''), icons[iconName][0], icons[iconName][1])),
  ).then((sources) => {
    Object.keys(icons).forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));
    resolve(true);
  });
});

export { iconsMap, iconsLoaded };
