import * as React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  item: {
    alignItems: 'center', 
    justifyContent: 'center',
    alignSelf: 'stretch',
    margin: 8,
    padding: 16,
    backgroundColor: 'black'
  }
})

export default class MyComponent extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.item}>
          <Text style={{color: 'white'}}>Test</Text>
        </View>
        <View style={styles.item}>
          <Text style={{color: 'white'}}>Test</Text>
        </View>
        <View style={styles.item}>
          <Text style={{color: 'white'}}>Test</Text>
        </View>
      </ScrollView>
    );
  }
}