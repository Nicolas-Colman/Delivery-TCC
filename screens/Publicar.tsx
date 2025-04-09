import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { KeyboardAvoidingView, View, TextInput, Text, TouchableOpacity, Alert } from "react-native";
import { auth, firestore } from '../firebase';
import estilo from "../estilo";
import { Publicacao } from "../model/Publicacao";

const Publicar = () => {
    const [formPublic, setFormPublic] = useState<Partial<Publicacao>>({});
    const refPublic = firestore.collection("Publicacao");

    const salvar = async () => {
        try {
            const publicacao = new Publicacao(formPublic);
            const currentUser = auth.currentUser;

            const refUsuario = firestore.collection("Usuario").doc(currentUser.uid);
            const usuarioDoc = await refUsuario.get();

            if (!usuarioDoc.exists) {
                Alert.alert("Erro", "Dados do usuário não encontrados.");
                return;
            }

            const usuarioData = usuarioDoc.data() as { urlFoto?: string };
            publicacao.urlFoto = usuarioData.urlFoto || "";
            publicacao.userId = currentUser.uid;

            const refIdPublic = publicacao.id
                ? refPublic.doc(publicacao.id)
                : refPublic.doc();

            publicacao.id = refIdPublic.id;

            if (formPublic.id) {
                await refIdPublic.update(publicacao.toFirestore());
                Alert.alert("Sucesso", "Publicação atualizada com sucesso!");
            } else {
                await refIdPublic.set(publicacao.toFirestore());
                Alert.alert("Sucesso", "Publicação criada com sucesso!");
            }

            limpar();
        } catch (error) {
            console.error("Erro ao salvar publicação:", error);
            Alert.alert("Erro", "Não foi possível salvar a publicação.");
        }
    };

    const limpar = () => {
        setFormPublic({});
    };

    return (
        <KeyboardAvoidingView style={estilo.tela}>
            <View>
                <TextInput
                    placeholder="Descrição"
                    value={formPublic.descricao}
                    onChangeText={texto => setFormPublic({ ...formPublic, descricao: texto })}
                    style={estilo.input}
                />
                <TextInput
                    placeholder="Valor"
                    value={formPublic.valor}
                    onChangeText={texto => setFormPublic({ ...formPublic, valor: texto })}
                    style={estilo.input}
                    keyboardType="numeric"
                />

                <View style={estilo.buttonArea}>
                    <TouchableOpacity
                        style={estilo.botao}
                        onPress={salvar}
                    >
                        <Text style={estilo.botaoTexto}>Salvar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={estilo.botaoBranco}
                        onPress={limpar}
                    >
                        <Text style={estilo.botaoBrancoTexto}>Limpar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Publicar;
