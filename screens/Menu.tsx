import { useNavigation } from "@react-navigation/native";
import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

import Home from "./Home";
import Perfil from "./Perfil";
import Publicar from "./Publicar";
import Servicos from "./Servicos";
import Config from "./Config";

const Tab = createBottomTabNavigator();

export default function Menu() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarStyle: { 
                    backgroundColor: 'white', 
                    height: 60,
                    width: '95%',
                    margin: 'auto',
                    marginBottom: 10,
                    borderRadius: 20
                }, 
                tabBarActiveTintColor: '#9ac5d8', 
                tabBarInactiveTintColor: 'gray',  
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon 
                            name="home-outline" 
                            size={30} 
                            color={focused ? '#9ac5d8' : 'gray'} 
                        />
                    )
                }}
            />

            <Tab.Screen 
                name="Perfil" 
                component={Perfil} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon 
                            name="person-outline" 
                            size={30} 
                            color={focused ? '#9ac5d8' : 'gray'} 
                        />
                    )
                }}
            />

            <Tab.Screen 
                name="Publicar" 
                component={Servicos}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon 
                            name="navigate-circle" 
                            size={45} 
                            color={focused ? '#9ac5d8' : 'gray'} 
                        />
                    )
                }}
            />

            <Tab.Screen 
                name="Serviços" 
                component={Publicar}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon 
                            name="hammer-outline" 
                            size={30} 
                            color={focused ? '#9ac5d8' : 'gray'} 
                        />
                    )
                }}
            />

            <Tab.Screen 
                name="Config" 
                component={Config}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon 
                            name="list-outline" 
                            size={30} 
                            color={focused ? '#9ac5d8' : 'gray'} 
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
