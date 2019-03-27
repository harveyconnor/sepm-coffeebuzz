import * as React from 'react';
import { View, Text } from 'react-native';

export default class MyComponent extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Tesst</Text>
      </View>
    );
  }
}