import { useNavigation } from "@react-navigation/native";
import * as React from 'react';
import { useState } from "react";
import { auth } from '../firebase';
import { KeyboardAvoidingView, View, TextInput, Text, TouchableOpacity, Pressable } from "react-native";


import estilo from "../estilo";
import Proposta from "./Proposta";


const Home = () => {
    const navigation = useNavigation();




    return (
        <KeyboardAvoidingView style={estilo.telaH}>

            <View style={estilo.cabecalhoH}>
                <TextInput placeholder="Busca" style={estilo.buscarH} />
                


            </View>

           
        </KeyboardAvoidingView>

    )
}

export default Home;