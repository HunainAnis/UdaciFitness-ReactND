import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import AddEntry from './components/AddEntry';
import { getMetricMetaInfo } from './utils/helpers';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default class App extends React.Component {
  // componentDidMount() {
  //   console.log('Before')
  //    debugger
  //   console.log('After')
  // }
  render() {
  return (
    <View style={styles.container}>
      {/* <Ionicons name='ios-book' size={100} color='green' />
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.instructions}>{instructions}</Text> */}
      {getMetricMetaInfo('bike').getIcon()}
      {getMetricMetaInfo('sleep').getIcon()}
      {getMetricMetaInfo('swim').getIcon()}
      {getMetricMetaInfo('run').getIcon()}
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
