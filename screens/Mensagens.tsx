import { useNavigation } from "@react-navigation/native";
import * as React from 'react';
import { useState } from "react";
import { auth } from '../firebase';
import { KeyboardAvoidingView, View, TextInput, Text, TouchableOpacity, SafeAreaView, Pressable} from "react-native";
import estilo from "../estilo";
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaFrameContext } from "react-native-safe-area-context";

const Perfil = () =>{
    
        const navigation = useNavigation();
      
        const voltar = () => {
          navigation.replace('Menu');
        };
    
    return (
       
        <KeyboardAvoidingView style={estilo.tela}>
            <View style={estilo.mensagens}>
                <Pressable onPress={voltar}>
                    <Icon style={estilo.voltar}
                                           name="arrow-back-circle-outline"
                                          />
                </Pressable>
            </View>
            
        </KeyboardAvoidingView>
    )
}

export default Perfil