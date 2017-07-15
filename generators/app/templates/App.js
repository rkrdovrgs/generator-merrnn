import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen/HomeScreen.native';
import SplashScreen from './src/components/SplashScreen/SplashScreen.native';

export default App = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Splash: { screen: SplashScreen }
  },
  {
    initialRouteName: 'Splash',
    //headerMode: 'screen',
    navigationOptions: {
      title: '<%=options.appName%>',
      headerStyle: {
        height: 65,
        backgroundColor: '#238c59',
        marginBottom: 5,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        paddingTop: 10
      },
      headerTitleStyle: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 12,
        fontWeight: 'bold',
        color: 'white'
      }
    }
  }
);

AppRegistry.registerComponent('<%=options.appName%>', () => App);

/**
 * https://stackoverflow.com/questions/34329715/how-to-add-icons-to-react-native-app
 */
