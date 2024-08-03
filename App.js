import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// REDUX
import store from './redux/store';
import { Provider } from 'react-redux'

// SCREENS
import Home from './screens/Home';
import Detail from './screens/DetailPage/DetailPage'
import Order from './screens/Order/Order';
import Auth from './screens/Auth/Auth';
import Signup from './screens/Auth/Signup';
import Profile from './screens/Profile/Profile';
import Cards from './screens/Cards/Cards';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Detail} />
          <Stack.Screen name="Orders" component={Order} />
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Sign Up" component={Signup} />
          <Stack.Screen name="Profile" component={Profile}/>
          <Stack.Screen name="Cards" component={Cards}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


