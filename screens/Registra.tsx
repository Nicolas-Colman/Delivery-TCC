import { useNavigation } from "@react-navigation/native";
import * as React from 'react';
import { useState } from "react";
import {auth, firestore} from '../firebase'
import { KeyboardAvoidingView, TouchableOpacity, Text, View, TextInput } from "react-native";
import estilo from "../estilo";
import { Usuario } from "../model/Usuario";



const Registra =() =>{
    


    const [formUsuario,setFormUsuario] = useState<Partial<Usuario>> ({});

    const navigation = useNavigation();

    const refUsuario = firestore.collection("Usuario");

    const Registro= ()=>{
            auth
                .createUserWithEmailAndPassword(formUsuario.email,formUsuario.senha)
                .then(userCredentials=>{
                        const user = userCredentials.user;
                        const refComIdUsuario = refUsuario.doc(auth.currentUser.uid);
                        refComIdUsuario.set({
                            id : auth.currentUser.uid,
                            nome : formUsuario.nome,
                            email : formUsuario.email,
                            //senha : formUsuario.senha,
                            dataNasc : formUsuario.dataNasc
                        })
                        console.log('registrado como ', user.email)
                        navigation.replace('Menu');
                })
                .catch(error => alert(error.message))
        }
    
    const Login= ()=>{
        navigation.replace('Login');
    }

    const Limpar = ()=>{
        setFormUsuario({})
    }

    return (
        
        <KeyboardAvoidingView style={estilo.tela}>
            <View style={estilo.inputArea}>
                <TextInput 
                    style={estilo.input}
                    placeholder="Nome"
                    value={formUsuario.nome}
                    onChangeText={texto =>setFormUsuario({... formUsuario, nome : texto})}
                    
                ></TextInput>
                <TextInput 
                    style={estilo.input}
                    placeholder="Email"
                    value={formUsuario.email}
                    onChangeText={texto =>setFormUsuario({... formUsuario, email : texto})}
                    
                ></TextInput>
                <TextInput
                    style={estilo.input}
                    placeholder="Senha"
                    value={formUsuario.senha}
                    onChangeText={texto =>setFormUsuario({... formUsuario, senha : texto})}
                    secureTextEntry
                ></TextInput>
                <TextInput
                    style={estilo.input}
                    placeholder="Data"
                    value={formUsuario.dataNasc}
                    onChangeText={texto =>setFormUsuario({... formUsuario, dataNasc : texto})}
                ></TextInput>
            </View>

            <View style={estilo.buttonArea}>
                <TouchableOpacity style={estilo.botao} onPress={Registro}>
                    <Text style={estilo.botaoTexto}>Registrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilo.botaoBranco} onPress={Login}> 
                    <Text style={estilo.botaoBrancoTexto}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilo.botaoBranco} onPress={Limpar}> 
                    <Text style={estilo.botaoBrancoTexto}>Limpar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        
    )
}


export default Registra;