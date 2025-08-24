import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import HomeScreen from "../screens/HomeScreen"
import BottomTabs from "./BottomTabs";

const Stack = createNativeStackNavigator()

function StackNavigator () {
    return(
         <Stack.Navigator initialRouteName='splash'>
                  <Stack.Screen name='splash' component={SplashScreen} options={{headerShown:false}}/>
                  <Stack.Screen name='Onboarding' component={OnboardingScreen} options={{headerShown:false}}/>
                    <Stack.Screen name='Main-App' component={BottomTabs} options={{headerShown:false}}/>
                </Stack.Navigator>
    )
}

export default StackNavigator;