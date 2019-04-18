import { Navigation } from 'react-native-navigation';
import { materialColors } from 'react-native-typography';

import App from './src/App';
import { iconsLoaded, iconsMap } from './src/helpers/icons';

import registerScreens, {
  CART_SCREEN, MENU_SCREEN, SETTINGS_SCREEN,
} from './src/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  iconsLoaded.then(() => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              component: {
                name   : MENU_SCREEN,
                options: {
                  bottomTab: {
                    text             : 'Menu',
                    textColor        : materialColors.blackTertiary,
                    selectedTextColor: materialColors.blackPrimary,
                    icon             : iconsMap['restaurant-menu'],
                    iconColor        : materialColors.blackTertiary,
                    selectedIconColor: materialColors.blackPrimary,
                    testID           : 'FIRST_TAB_BAR_BUTTON',
                  },
                },
              },
            },
            {
              component: {
                name   : SETTINGS_SCREEN,
                options: {
                  bottomTab: {
                    text             : 'Settings',
                    textColor        : materialColors.blackTertiary,
                    selectedTextColor: materialColors.blackPrimary,
                    icon             : iconsMap.settings,
                    iconColor        : materialColors.blackTertiary,
                    selectedIconColor: materialColors.blackPrimary,
                    testID           : 'SECOND_TAB_BAR_BUTTON',
                  },
                },
              },
            },
            {
              component: {
                name   : CART_SCREEN,
                options: {
                  bottomTab: {
                    text             : 'Cart',
                    textColor        : materialColors.blackTertiary,
                    selectedTextColor: materialColors.blackPrimary,
                    icon             : iconsMap['shopping-cart'],
                    iconColor        : materialColors.blackTertiary,
                    selectedIconColor: materialColors.blackPrimary,
                    testID           : 'THIRD_TAB_BAR_BUTTON',
                  },
                },
              },
            },
          ],
        },
      },
    });
  });
});
