import { useNavigation } from "@react-navigation/native";
import * as React from 'react';
import { useState } from "react";
import { auth } from '../firebase';
import { KeyboardAvoidingView, View, TextInput, Text, TouchableOpacity } from "react-native";
import estilo from "../estilo";

const Config = () =>{
    return (
        <KeyboardAvoidingView style={estilo.tela}>
            <View>
                <Text>Config</Text>
            </View>
            
        </KeyboardAvoidingView>
    )
}

export default Config