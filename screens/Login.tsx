import { useNavigation } from "@react-navigation/native";
import * as React from 'react';
import { useState } from "react";
import {auth} from '../firebase'
import { KeyboardAvoidingView, TouchableOpacity, Text, View, TextInput } from "react-native";
import estilo from "../estilo.js";



const Login =() =>{

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();

    const Registra= ()=>{
        navigation.replace('Registra');
    }
    const Login= ()=>{
        auth
            .signInWithEmailAndPassword(email,senha)
            .then(userCredentials=>{
                const user = userCredentials.user;
                navigation.replace('Menu');
        })  
            .catch(error => alert(error.message))
    }

    return (
        
        <KeyboardAvoidingView style={estilo.tela}>
            <View style={estilo.inputArea}>
                <TextInput 
                    style={estilo.input}
                    placeholder="Email"
                    onChangeText={texto =>setEmail(texto)}
                    
                ></TextInput>
                <TextInput
                    style={estilo.input}
                    placeholder="Senha"
                    onChangeText={texto =>setSenha(texto)}
                    secureTextEntry
                ></TextInput>
            </View>

            <View style={estilo.buttonArea}>
                <TouchableOpacity style={estilo.botao} onPress={Login}>
                    <Text style={estilo.botaoTexto}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilo.botaoBranco} onPress={Registra}> 
                    <Text style={estilo.botaoBrancoTexto}>Registrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        
    )
}

export default Login;