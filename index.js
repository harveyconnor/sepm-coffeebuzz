import { Navigation } from 'react-native-navigation';
import { materialColors, material } from 'react-native-typography';

import App from './src/App';
import { iconsLoaded, iconsMap } from './src/helpers/icons';

Navigation.registerComponent('navigation.playground.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  iconsLoaded.then(() => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              component: {
                name   : 'navigation.playground.WelcomeScreen',
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
                name   : 'navigation.playground.WelcomeScreen',
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
                name   : 'navigation.playground.WelcomeScreen',
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
