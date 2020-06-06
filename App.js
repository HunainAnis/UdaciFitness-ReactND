import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, StyleSheet, View, StatusBar } from 'react-native';
import AddEntry from './components/AddEntry';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'
import History from './components/History';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Constants } from 'react-native-unimodules';
import { purple } from './utils/colors';
import { AntDesign } from '@expo/vector-icons';
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
      {/* <View style={{flex:1}}>
        <View style={{height:20}} />
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer> */}
          {/* <AddEntry /> */}
          {/* <History /> */}
      {/* </View> */}
      <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
      <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    </Provider>
  );
}
}

function UdaciStatusBar ({ backgroundColor, ...props }) {
  return(
    <View style={{backgroundColor, height:Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

function MyTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={({route})=>({
      tabBarIcon:({ focused, color, size }) => {
        let iconName;
        if(route.name === 'History') {
          iconName = 'book'
        } else if(route.name === 'Add Data') {
          iconName= 'addfile'
        }
        return <AntDesign name={iconName} size={size} color={color} />
      }  
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen  name="History" component={History} />
      <Tab.Screen name="Add Data" component={AddEntry} />
    </Tab.Navigator>
  );
}

