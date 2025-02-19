import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { auth, firestore, storage } from "../firebase";
import { KeyboardAvoidingView, ScrollView, TouchableOpacity, Text, View, TextInput, Alert, Image, Pressable, Platform, } from "react-native";
import estilo from "../estilo";
import { Usuario } from "../model/Usuario";
import * as ImagePicker from "expo-image-picker";
import { uploadBytes } from "firebase/storage"; //Envia arq para o storage

const Registra = () => {
    const [formUsuario, setFormUsuario] = useState<Partial<Usuario>>({});
    const navigation = useNavigation();

    const refUsuario = firestore.collection("Usuario");

    const [imagePath, setImagePath] = useState('');

    const Login = () => {
        navigation.replace("Login");
    };

    const Limpar = () => {
        setFormUsuario({});
    };




    const escolheFoto = () => {
        Alert.alert(
            "Selecionar Foto",
            "Escolha uma alternativa",
            [
                {
                    text: "Câmera",
                    onPress: () => abrirCamera()
                },
                {
                    text: "Abrir Galeria",
                    onPress: () => abrirGaleria()
                }
            ]
        );
    }

    const abrirCamera = async () => {
        const permissao = await ImagePicker.requestCameraPermissionsAsync();
        if (permissao.granted === false) {
            alert("Você recusou a permissão de acesso à câmera.")
            return;
        }
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: 'images',
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });
        console.log(result.assets[0]);
        enviarImagem(result);
    }

    const abrirGaleria = async () => {
        const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissao.granted === false) {
            alert("Você recusou a permissão de acesso à galeria.")
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: "images",
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        enviarImagem(result);
    }

    const enviarImagem = async (result) => {
        if (!result.canceled) {
            setImagePath(result.assets[0].uri);
            let filename = result.assets[0].fileName;
            const ref = storage.ref(`imagens/${filename}`);

            const img = await fetch(result.assets[0].uri);
            const bytes = await img.blob();
            const fbResult = await uploadBytes(ref, bytes);

            const urlDownload = await storage.ref(
                fbResult.metadata.fullPath).getDownloadURL()

            console.log("URL da foto:", urlDownload); // Debugging
            setFormUsuario({ ...formUsuario, urlFoto: urlDownload });

        } else {
            alert("Envio cancelado!");
        }
    }

    const Registro = () => {
        if (!erroSenha) {
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
                        urlFoto: formUsuario.urlFoto
                    });
                    console.log("registrado como ", user?.email);
                    navigation.replace("Menu");
                })
                .catch((error) => alert(error.message));
        }
    };

    const [erroSenha, setErroSenha] = useState("");

    useEffect(() => {
        if (formUsuario.senha !== formUsuario.repSenha) {
            setErroSenha("As senhas não coincidem");
        } else {
            setErroSenha("");
        }
    }, [formUsuario.senha, formUsuario.repSenha]);


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

                <Pressable onPress={() => escolheFoto()}>
                    <View style={estilo.imagemView}>
                        {
                            imagePath !== "" && (
                                <Image source={{ uri: imagePath }} style={estilo.imagemPerfil} />
                            )
                        }
                        {
                            imagePath === "" && (
                                <Image source={require("../assets/camera.png")} style={estilo.imagemPerfil} />
                            )
                        }
                    </View>
                </Pressable>
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
                        onChangeText={(texto) => {
                            setFormUsuario({ ...formUsuario, senha: texto });

                        }}
                        secureTextEntry
                    />
                    <TextInput
                        style={estilo.input}
                        placeholder="Repetir Senha"
                        value={formUsuario.repSenha}
                        onChangeText={(texto) => {
                            setFormUsuario({ ...formUsuario, repSenha: texto })
                        }}
                        secureTextEntry
                    />
                    {erroSenha ? <Text style={{ color: "red" }}>{erroSenha}</Text> : null}
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
