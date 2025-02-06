import { Link, useNavigation } from "@react-navigation/native";
import * as React from 'react';
import { useState } from "react";
import { auth } from '../firebase';
import { KeyboardAvoidingView, View, TextInput, Image, Text, TouchableOpacity, FlatList, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import estilo from "../estilo";
import Proposta from "./Proposta";



const Home = () => {
    const navigation = useNavigation();

    const Mensagens = () => {
        navigation.replace('Mensagens');
    }

    const [selectedTab, setSelectedTab] = useState('Proposta');

    const renderItem = ({ item }) => {

    };

    const renderContent = () => {
        if (selectedTab === 'Proposta') {
            return (
                <Proposta/>
            );
        }
        if (selectedTab === 'Oferta') {
            return (
                <Text>Aqui estão os detalhes!</Text>
            );
        }
    };

    return (
        <KeyboardAvoidingView style={estilo.tela}>

            <View style={estilo.cabecalhoH}>

                <View style={estilo.cabEsq}>

                </View>

                <View style={estilo.cabBusc}>
                    <TextInput placeholder=" Pesquisar serviço" style={estilo.buscarH} />
                    <Pressable>
                        <Icon style={estilo.lupaH}
                            name="search-outline"
                        />
                    </Pressable>
                </View>


                <View style={estilo.cabDir}>
                    <Pressable onPress={Mensagens}>

                        <Icon style={estilo.msg}
                            name="chatbubble-ellipses-outline"
                        />

                    </Pressable>
                </View>

            </View>

            <View style={estilo.botoesBarra}>

                <Pressable onPress={() => setSelectedTab('Proposta')} style={[estilo.botaoProp, selectedTab === 'Proposta' && estilo.botaofoco]}>
                    <Text style={[estilo.textBotao, selectedTab === 'Proposta' && estilo.textFoco]}> Propostas </Text>
                </Pressable>

                <Pressable onPress={() => setSelectedTab('Oferta')} style={[estilo.botaoProp, selectedTab === 'Oferta' && estilo.botaofoco]}>
                    <Text style={[estilo.textBotao, selectedTab === 'Oferta' && estilo.textFoco]}> Ofertas </Text>
                </Pressable>
            </View>

            <View >{renderContent()}</View>

        </KeyboardAvoidingView>

    )
}

export default Home;