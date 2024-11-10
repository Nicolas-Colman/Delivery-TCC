import { StyleSheet } from "react-native";

export default StyleSheet.create({

    tela:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    inputArea:{
        width: '80%'
    },

    buttonArea:{
        width:"60%",
        marginTop: 40
    },

    input: {
        backgroundColor: 'white',
        marginTop: 10,
        padding: 10,
        borderRadius: 10
    },

    botao:{
        backgroundColor: '#0782f9',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        color: 'white',
        marginTop: 5


    },

    botaoTexto:{
        color: 'white',
        fontWeight: '700'
    },

    botaoBranco:{
        width: '100%',
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        color: 'white',
        marginTop: 10,
        borderColor: '#0782f9',
        borderWidth: 2
    },

    botaoBrancoTexto:{
        color: '#0782f9',
        fontWeight: '700'
    },

    flat: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        width: "40%",
        marginBottom: 5,
        backgroundColor: 'grey',
        margin: 'auto',
        height: '100%'

        
    },
    titulo:{
        fontSize: 14,
        fontWeight: '500'
    },
    telaSafe:{
        flex: 1,

        
    },

    tabNav:{
        backgroundColor: 'black'
    }

});