import { useNavigation } from "@react-navigation/native";
import * as React from 'react';
import { useState } from "react";
import { auth } from '../firebase';
import { KeyboardAvoidingView, View, TextInput, Text, TouchableOpacity } from "react-native";
import estilo from "../estilo";

const Config = () =>{

    const navigation = useNavigation();
    const logout = () =>{
        auth   
            .signOut()
            .then(()=>{
                navigation.replace('Login')
            })
    }
    
    
    return (
        <KeyboardAvoidingView style={estilo.tela}>
            <View>
                <Text>Bem vindo! {auth.currentUser?.email}</Text>
            </View>
            <TouchableOpacity style={estilo.botaoBranco} onPress={logout}> 
                    <Text style={estilo.botaoBrancoTexto}>Sair</Text>
                </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default Config