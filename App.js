import * as React from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AddEntry from './components/AddEntry';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default class App extends React.Component {
  render() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={styles.container}>
          <AddEntry />
      </View>
    </Provider>
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
