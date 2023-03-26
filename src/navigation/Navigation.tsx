import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen} from '../screens/AuthScreen/AuthScreen';
import {WebViewScreen} from '../screens/WebViewScreen/WebViewScreen';


export const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Auth" component={AuthScreen}/>
        <Stack.Screen name="WebView" component={WebViewScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
