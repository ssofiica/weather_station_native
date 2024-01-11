import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './screens/ListScreen';
import PhenomScreen from './screens/PhenomScreen';
import { store } from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Явления' component={ListScreen} />
                <Stack.Screen name='Явление' component={PhenomScreen} />
            </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
}
