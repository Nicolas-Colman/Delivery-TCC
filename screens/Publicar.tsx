import { useNavigation } from "@react-navigation/native";
import * as React from 'react';
import { useState } from "react";
import { auth, firestore, storage } from '../firebase';
import { KeyboardAvoidingView, View, TextInput, Text, TouchableOpacity } from "react-native";
import estilo from "../estilo";
import {Publicacao} from "../model/Publicacao";

const Publicar = () =>{
    const [formPublic, setFormPublic] = useState<Partial<Publicacao>>({});
    const [publicacao, setPublicacao] = useState<Publicacao[]>([]);
    
    const refPublic = firestore.collection("Usuario")
        .doc(auth.currentUser?.uid)
        .collection("Publicacao")

    const salvar = async() => {
        const publicacao = new Publicacao(formPublic)

        if (publicacao.id === undefined){
            const refIdPublic = refPublic.doc();
            publicacao.id = refIdPublic.id;

            refIdPublic.set(publicacao.toFirestore())
            .then(() =>{
                alert("publicação criada com sucesso");
                Limpar();
            
            })
        }else {
            const refIdPublic = refPublic.doc(publicacao.id);

            refIdPublic.update(publicacao.toFirestore())
            .then(() => {
                alert(publicacao.descricao + " atualizado com sucesso!");
                Limpar();
            })
        }

        
    }

    const Limpar = () => {
        setFormPublic({})
    }


    return (
        <KeyboardAvoidingView style={estilo.tela}>
            <View>
                <View>
                    <TextInput 
                        placeholder="Descrição"
                        value={formPublic.descricao}
                        onChangeText={texto => setFormPublic({...formPublic, descricao: texto})}
                        style={estilo.input}
                        />
                    
                    
                </View>
                <View style={estilo.buttonArea}>
                <TouchableOpacity 
                    style={estilo.botao}
                    onPress={salvar}
                >
                    <Text style={estilo.botaoTexto}>Salvar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={estilo.botaoBranco}
                    onPress={Limpar}
                >
                    <Text style={estilo.botaoBrancoTexto}>Limpar</Text>
                </TouchableOpacity>
            </View>
            </View>
            
        </KeyboardAvoidingView>
    )
}

export default Publicar