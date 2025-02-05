import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
 
import Users from '../screens/users/Users';
import UserDetails from '../screens/users/UserDetails';

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;
