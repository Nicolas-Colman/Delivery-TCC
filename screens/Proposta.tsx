import { useNavigation } from "@react-navigation/native";
import * as React from 'react';
import { useState, useEffect } from "react";
import { auth, firestore } from '../firebase';
import { KeyboardAvoidingView, View, TextInput, Text, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";
import estilo from "../estilo";
import { Publicacao } from "../model/Publicacao"

const Proposta = () => {
    const [loading, setLoading] = useState(true);
    const [atualizar, setAtualizar] = useState(true);
    const [publicacao, setPublicacao] = useState<Publicacao[]>([]);

    const refPublicacao = firestore.collection("Usuario")
        .doc(auth.currentUser?.uid)
        .collection("Publicacao")

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
        <View>
            <Text>Descrição: {item.descricao}</Text>
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