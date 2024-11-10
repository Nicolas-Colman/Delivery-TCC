import { useNavigation } from "@react-navigation/native";
import * as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import Perfil from "./Perfil";
import Publicar from "./Publicar";
import Servicos from "./Servicos";
import Config from "./Config";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

import estilo from "../estilo";

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
            }, // Estilizando a barra
              tabBarActiveTintColor: 'blue', // Cor dos ícones ativos
              tabBarInactiveTintColor: 'gray', // Cor dos ícones inativos
              tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' }, // Estilo das labels
            }}
        >
            <Tab.Screen name="Home" component={Home}options={{
                headerShown: false,
                tabBarIcon: () => (<
                    Icon name="home-outline"
                    size={30}
                    color={'grey'}
            />)
          }}
        />

            <Tab.Screen name="Perfil" component={Perfil} options={{
                headerShown: false,
                tabBarIcon: () => (<
                    Icon name="person-outline"
                    size={30}
                    color={'grey'}
            />)
          }}
        />
            <Tab.Screen name="Publicar" component={Servicos}options={{
                headerShown: false,
                tabBarIcon: () => (<
                    Icon name="navigate-circle"
                    size={45}
                    color={'grey'}
            />)
          }}
        />

            <Tab.Screen name="Serviços" component={Publicar}options={{
                headerShown: false,
                tabBarIcon: () => (<
                    Icon name="hammer-outline"
                    size={30}
                    color={'grey'}
            />)
          }}
        />

            <Tab.Screen name="Config" component={Config}options={{
                headerShown: false,
                tabBarIcon: () => (<
                    Icon name="list-outline"
                    size={30}
                    color={'grey'}
            />)
          }}
        />

        </Tab.Navigator>
    );
}
