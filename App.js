import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useFonts} from 'expo-font'
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen'
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator()

 function App() {

  const [fontsLoaded] = useFonts({
    'Marker' : require('./assets/fonts/PermanentMarker-Regular.ttf')
  });
  if(!fontsLoaded){
    return null;
  }
  return (
    <>
      <StatusBar style='default'/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='splash'>
          <Stack.Screen name='splash' component={SplashScreen} options={{headerShown:false}}/>
          <Stack.Screen name='Onboarding' component={OnboardingScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
