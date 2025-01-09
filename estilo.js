import { StyleSheet } from "react-native";

export default StyleSheet.create({

    tela:{
        marginTop: 35,
        flex: 1,
        alignItems: 'center',

    },
    telaH:{
        flex: 1,
        alignItems: 'center',

    },

    inputArea:{
        width: '80%',
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
        backgroundColor: '#9ac5d8',
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
        borderColor: '#9ac5d8',
        borderWidth: 2
    },

    botaoBrancoTexto:{
        color: '#9ac5d8',
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
    },

    cabecalhoH:{
        flexDirection: 'row',
        width: '100%',
        height: '15%',
        borderColor: 'blue',
        justifyContent: 'flex-end'
        
    },

    buscarH:{
        borderWidth: 1,
        width: '50%',
        borderRadius: 20,
        borderColor: 'grey',
        height: 35,
        marginHorizontal: 'auto',
        
        

    },

    // buscarH2:{
    //     flexDirection: 'row',
    //     borderWidth: 1,
    //     width: '50%',
    //     borderRadius: 5,
    //     borderColor: 'grey',
    //     margin: 'auto',
    //     height: 35,

    // },
    logoAbertura:{

        width: 300,
        height: 300,
        margin: 'auto'
         
        
    },

    logo:{
        width: 200,
        height: 200,
        marginTop: 50,
        marginBottom: 50
    },

    msg: {
        fontSize: 30,
        color: 'grey',
        width: 45,
        
        
    },

    mensagens: {
        width: '100%'
    },
    voltar: {
        fontSize: 30,
        color: 'grey',
        width: 45,
        
        
    }

});