import { Navigation } from 'react-native-navigation';

import Cart from './Cart';
import Item from './Item';
import Menu from './Menu';
import Settings from './Settings';

import { Wrapper } from '../helpers/ProviderWrapper';

export const CART_SCREEN = 'sepm.coffeebuzz.cart';
export const ITEM_SCREEN = 'sepm.coffeebuzz.item';
export const MENU_SCREEN = 'sepm.coffeebuzz.menu';
export const SETTINGS_SCREEN = 'sepm.coffeebuzz.settings';

export default function registerScreens() {
  Navigation.registerComponent(CART_SCREEN, () => Wrapper(Cart), () => Cart);
  Navigation.registerComponent(ITEM_SCREEN, () => Wrapper(Item), () => Item);
  Navigation.registerComponent(MENU_SCREEN, () => Wrapper(Menu), () => Menu);
  Navigation.registerComponent(SETTINGS_SCREEN, () => Wrapper(Settings), () => Settings);
}
