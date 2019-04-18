import { Navigation } from 'react-native-navigation';
import { materialColors } from 'react-native-typography';

import { iconsLoaded, iconsMap } from './src/helpers/icons';

import registerScreens, {
  CART_SCREEN, MENU_SCREEN, SETTINGS_SCREEN,
} from './src/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    layout: {
      orientation    : ['portrait'],
      backgroundColor: materialColors.whitePrimary,
    },
    statusBar: {
      backgroundColor: materialColors.whitePrimary,
      style          : 'dark',
    },
    bottomTab: {
      textColor        : materialColors.blackTertiary,
      selectedTextColor: materialColors.blackPrimary,
      iconColor        : materialColors.blackTertiary,
      selectedIconColor: materialColors.blackPrimary,
    },
    bottomTabs: {
      backgroundColor: materialColors.whitePrimary,
    },
  });

  iconsLoaded.then(() => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name   : MENU_SCREEN,
                      options: {
                        bottomTab: {
                          text  : 'Menu',
                          icon  : iconsMap['restaurant-menu'],
                          testID: 'FIRST_TAB_BAR_BUTTON',
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              component: {
                name   : SETTINGS_SCREEN,
                options: {
                  bottomTab: {
                    text  : 'Settings',
                    icon  : iconsMap.settings,
                    testID: 'SECOND_TAB_BAR_BUTTON',
                  },
                },
              },
            },
            {
              component: {
                name   : CART_SCREEN,
                options: {
                  bottomTab: {
                    text  : 'Cart',
                    icon  : iconsMap['shopping-cart'],
                    testID: 'THIRD_TAB_BAR_BUTTON',
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
