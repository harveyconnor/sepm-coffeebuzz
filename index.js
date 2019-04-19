import { Navigation } from 'react-native-navigation';
import { materialColors, iOSColors } from 'react-native-typography';

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
    topBar: {
      background: {
        color: materialColors.whitePrimary,
      },
      title: {
        color: materialColors.blackPrimary,
      },
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
                      id     : MENU_SCREEN,
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
                id     : SETTINGS_SCREEN,
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
                id     : CART_SCREEN,
                name   : CART_SCREEN,
                options: {
                  bottomTab: {
                    text      : 'Cart',
                    icon      : iconsMap['shopping-cart'],
                    badge     : '1', // Test icon to show that badge works
                    badgeColor: iOSColors.blue,
                    testID    : 'THIRD_TAB_BAR_BUTTON',
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
