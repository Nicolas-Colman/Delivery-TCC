import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { auth, firestore } from "../firebase";
import {KeyboardAvoidingView, ScrollView, TouchableOpacity, Text, View, TextInput, Image, Platform,} from "react-native";
import estilo from "../estilo";
import { Usuario } from "../model/Usuario";

const Registra = () => {
    const [formUsuario, setFormUsuario] = useState<Partial<Usuario>>({});
    const navigation = useNavigation();

    const refUsuario = firestore.collection("Usuario");

    const Registro = () => {
        auth
            .createUserWithEmailAndPassword(formUsuario.email!, formUsuario.senha!)
            .then((userCredentials) => {
                const user = userCredentials.user;
                const refComIdUsuario = refUsuario.doc(auth.currentUser?.uid!);
                refComIdUsuario.set({
                    id: auth.currentUser?.uid,
                    nome: formUsuario.nome,
                    email: formUsuario.email,
                    cpf: formUsuario.cpf,
                    dataNasc: formUsuario.dataNasc,
                });
                console.log("registrado como ", user?.email);
                navigation.replace("Menu");
            })
            .catch((error) => alert(error.message));
    };

    const Login = () => {
        navigation.replace("Login");
    };

    const Limpar = () => {
        setFormUsuario({});
    };

    return (
        <KeyboardAvoidingView
            style={estilo.tela}
            behavior={Platform.OS === 'android' ? "padding" : "height"}
        >
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  keyboardShouldPersistTaps="handled"
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
            >
                <View>
                    <Image source={require("../assets/Logo.png")} style={estilo.logo} />
                </View>

                <View style={estilo.inputArea}>
                    <TextInput
                        style={estilo.input}
                        placeholder="Nome"
                        value={formUsuario.nome}
                        onChangeText={(texto) =>
                            setFormUsuario({ ...formUsuario, nome: texto })
                        }
                    />
                    <TextInput
                        style={estilo.input}
                        placeholder="CPF"
                        value={formUsuario.cpf}
                        onChangeText={(texto) =>
                            setFormUsuario({ ...formUsuario, cpf: texto })
                        }
                    />
                    <TextInput
                        style={estilo.input}
                        placeholder="Email"
                        value={formUsuario.email}
                        onChangeText={(texto) =>
                            setFormUsuario({ ...formUsuario, email: texto })
                        }
                    />
                    <TextInput
                        style={estilo.input}
                        placeholder="Senha"
                        value={formUsuario.senha}
                        onChangeText={(texto) =>
                            setFormUsuario({ ...formUsuario, senha: texto })
                        }
                        secureTextEntry
                    />
                    <TextInput
                        style={estilo.input}
                        placeholder="Nascimento"
                        value={formUsuario.dataNasc}
                        onChangeText={(texto) =>
                            setFormUsuario({ ...formUsuario, dataNasc: texto })
                        }
                    />
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
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Registra;
