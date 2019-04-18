import { Navigation } from 'react-native-navigation';

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
                    text  : 'Menu',
                    icon  : iconsMap['restaurant-menu'],
                    testID: 'FIRST_TAB_BAR_BUTTON',
                  },
                },
              },
            },
            {
              component: {
                name   : 'navigation.playground.WelcomeScreen',
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
                name   : 'navigation.playground.WelcomeScreen',
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
