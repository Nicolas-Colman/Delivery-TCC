import { useNavigation } from "@react-navigation/native";
import * as React from 'react';
import { useState, useEffect } from "react";
import { auth, firestore } from '../firebase';
import { KeyboardAvoidingView, View, TextInput, Text, TouchableOpacity, ActivityIndicator, FlatList, Image, Pressable } from "react-native";
import estilo from "../estilo";
import { Publicacao } from "../model/Publicacao"

const Proposta = () => {
    const [loading, setLoading] = useState(true);
    const [atualizar, setAtualizar] = useState(true);
    const [publicacao, setPublicacao] = useState<Publicacao[]>([]);

    const refPublicacao = firestore.collection("Publicacao")
    const refUsuario = firestore.collection("Usuario")
        .doc(auth.currentUser?.uid)

    useEffect(() => {
        if (loading) {
            listarTodos();
        }
    }, [publicacao])

    const listarTodos = () => {
        const subscriber = refPublicacao
            .onSnapshot((querySnapshot) => {
                const publicacao = [];
                querySnapshot.forEach((documentSnapshot) => {
                    publicacao.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id

                    });
                });
                setPublicacao(publicacao);
                setLoading(false);
                setAtualizar(false)
            });
        return () => subscriber();
    }

    if (loading) {
        return <ActivityIndicator
            size="60"
            color="#0782F9"
            style={estilo.tela}
        />
    }

    const renderItem = ({ item }) => <Item item={item} />
    const Item = ({ item }) => (


        <View style={estilo.propDesc}>

            <View style={estilo.propDescImagem}>
                <Image source={{ uri: item.urlFoto }} style={estilo.propDescImg} />
            </View>
            <View style={estilo.propDescText}>
                <Text style={estilo.textPropDescText}>{item.userId}</Text>
                <Text style={estilo.textPropDescText}>          {item.descricao}</Text>
                <Text style={estilo.textPropDescText}>Valor de Serviço: R${item.valor}</Text>
            </View>

            <View>
                <TouchableOpacity
                    style={estilo.botao}>
                    <Text style={estilo.botaoTexto}>Aceitar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )





    return (
        <KeyboardAvoidingView style={estilo.tela}>
            <FlatList
                data={publicacao}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                refreshing={atualizar}
                onRefresh={() => listarTodos()}
            />

        </KeyboardAvoidingView>
    )
}

export default Proposta