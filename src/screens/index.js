import { Navigation } from 'react-native-navigation';

import Cart from './Cart';
import Menu from './Menu';
import Settings from './Settings';

export const CART_SCREEN = 'sepm.coffeebuzz.cart';
export const MENU_SCREEN = 'sepm.coffeebuzz.menu';
export const SETTINGS_SCREEN = 'sepm.coffeebuzz.settings';

export default function registerScreens() {
  Navigation.registerComponent(CART_SCREEN, () => Cart);
  Navigation.registerComponent(MENU_SCREEN, () => Menu);
  Navigation.registerComponent(SETTINGS_SCREEN, () => Settings);
}
