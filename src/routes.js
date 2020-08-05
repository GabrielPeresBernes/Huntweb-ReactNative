import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from './pages/main';
import Product from "./pages/product";

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#DA552F',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="Main" component={Main} options={{title: 'Huntweb'}} />
      <Stack.Screen name="Product" component={Product} options={({ route }) => ({ title: route.params.product.title })} />
    </Stack.Navigator>
  );
}

export default Routes;
