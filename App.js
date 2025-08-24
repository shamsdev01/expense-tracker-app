import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {useFonts} from 'expo-font'
import StackNavigator from './navigation/StackNavigator';





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
       <StackNavigator/>
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
