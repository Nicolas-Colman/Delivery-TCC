import { useNavigation } from "@react-navigation/native";
import * as React from 'react';
import { useState } from "react";
import { auth } from '../firebase';
import { KeyboardAvoidingView, View, TextInput, Text, TouchableOpacity } from "react-native";
import estilo from "../estilo";

const Proposta = () =>{
    return (
        <KeyboardAvoidingView style={estilo.tela}>
            <View>
                <Text>Perfil</Text>
            </View>
            
        </KeyboardAvoidingView>
    )
}

export default Proposta