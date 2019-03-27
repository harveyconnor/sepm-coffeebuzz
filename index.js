import { Navigation } from "react-native-navigation";

import App from "./src/App";

Navigation.registerComponent('navigation.playground.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {

  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            component: {
              name: 'navigation.playground.WelcomeScreenn',
              passProps: {
                text: 'This is tab 2'
              },
              options: {
                bottomTab: {
                  text: 'Tab 2',
                  icon: require('./src/assets/home.png'),
                  testID: 'SECOND_TAB_BAR_BUTTON'
                }
              }
            }
          },
        {
          component: {
            name: 'navigation.playground.WelcomeScreenn',
            passProps: {
              text: 'This is tab 2'
            },
            options: {
              bottomTab: {
                text: 'Tab 2',
                icon: require('./src/assets/home.png'),
                testID: 'SECOND_TAB_BAR_BUTTON'
              }
            }
          }
        }
      ]
      }
    }
  });
});