import { Link, useNavigation } from "@react-navigation/native";
import * as React from 'react';
import { useState } from "react";
import { auth } from '../firebase';
import { KeyboardAvoidingView, View, TextInput, Image, Text, TouchableOpacity, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import estilo from "../estilo";
import Proposta from "./Proposta";



const Home = () => {
    const navigation = useNavigation();
    
const Mensagens = () => {
    navigation.replace('Mensagens');
}



    return (
        <KeyboardAvoidingView style={estilo.tela}>

            <View style={estilo.cabecalhoH}>
                <TextInput placeholder="Busca" style={estilo.buscarH} />
                <Pressable onPress={Mensagens}>
                    <Icon style={estilo.msg}
                        name="chatbox-ellipses-outline"
                       />
                </Pressable>
            </View>


        </KeyboardAvoidingView>

    )
}

export default Home;