import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// REDUX
import store from './redux/store';
import { Provider } from 'react-redux'

// SCREENS
import Home from './screens/Home';
import Detail from './screens/DetailPage/DetailPage'
import Order from './screens/Order/Order';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Detail} />
          <Stack.Screen name="Orders" component={Order} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


