import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import HomeScreen from "../screens/HomeScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import WalletScreen from "../screens/WalletScreen";
import ProfileScreen from "../screens/ProfileScreen";

// Icons from Expo
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Fontisto from '@expo/vector-icons/Fontisto';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel:false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <AntDesign name={focused ? "home" : "home"} size={size} color={color} />
            );
          } else if (route.name === "Statistics") {
            return (
              <Feather
                name={focused ? "bar-chart" : "bar-chart"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Wallet") {
            return (
              <Fontisto
                name={focused ? "wallet" : "wallet"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Profile") {
            return (
              <AntDesign name={focused ? "user" : "user"} size={size} color={color} />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
