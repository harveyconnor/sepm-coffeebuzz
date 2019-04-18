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
                name     : 'navigation.playground.WelcomeScreen',
                passProps: {
                  text: 'This is tab 2',
                },
                options: {
                  bottomTab: {
                    text  : 'Tab 2',
                    icon  : iconsMap['shopping-cart'],
                    testID: 'SECOND_TAB_BAR_BUTTON',
                  },
                },
              },
            },
            {
              component: {
                name     : 'navigation.playground.WelcomeScreen',
                passProps: {
                  text: 'This is tab 2',
                },
                options: {
                  bottomTab: {
                    text  : 'Cart',
                    icon  : iconsMap['shopping-cart'],
                    testID: 'SECOND_TAB_BAR_BUTTON',
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
