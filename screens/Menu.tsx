import { useNavigation } from "@react-navigation/native";
import * as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Menu() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
        </Tab.Navigator>
    );
}
