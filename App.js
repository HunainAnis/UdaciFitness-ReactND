import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import AddEntry from './components/AddEntry';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'
import History from './components/History';
// import { YellowBox } from 'react-native';
// YellowBox.ignoreWarnings(['Remote debugger']);

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default class App extends React.Component {
  render() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{flex:1}}>
        <View style={{height:20}} />
          {/* <AddEntry /> */}
          <History />
      </View>
    </Provider>
  );
}
}
