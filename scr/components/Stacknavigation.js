import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabnavigation from '../components/Tabnavigaton';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Appicon from '../screens/Appicon';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import Tab from '../screens/Tab';
import Theme from '../screens/Theme';
import Productivity from '../screens/Productivity';
import Reminder from '../screens/Reminder';
import Support from '../screens/Support';
import Todoist from '../screens/Todoist';
const Stacknavigation = () => {
  const [login, setLogin] = useState('');
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    getValue();
  }, []);

  const getValue = async () => {
    await AsyncStorage.getItem('login')
      .then(res => {
        setLogin(res);
      })
      .catch(e => console.log('error === ', e));
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="loginpage">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'My home'}}
        />
        <Stack.Screen name="signup" component={SignUp} />

        <Stack.Screen name="Dashboard" component={Tabnavigation} />
        <Stack.Screen name="logout" component={Login} />
        <Stack.Screen name="account" component={Login} />
        <Stack.Screen name="icons" component={Appicon} />
        <Stack.Screen name="notification" component={Notification} />
        <Stack.Screen name="General" component={Profile} />
        <Stack.Screen name="tab" component={Tab} />
        <Stack.Screen name="theme" component={Theme} />
        <Stack.Screen name="product" component={Productivity} />
        <Stack.Screen name="reminder" component={Reminder} />
        <Stack.Screen name="support" component={Support} />
        <Stack.Screen name="skip" component={Profile} />
        <Stack.Screen name="todoist" component={Todoist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Stacknavigation;
