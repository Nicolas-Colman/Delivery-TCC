import { StyleSheet } from "react-native";

export default StyleSheet.create({

    tela:{
        marginTop: 45,
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
        borderWidth: 2,
        backgroundColor: 'white'
    },
    propDesc:{
        width: '95%',
        borderColor: '#9ac5d8',
        backgroundColor:'#faf7f7',
        borderWidth: 2,
        borderRadius: 20,
        padding: 5,
        marginTop:70
    },

    propDescImg:{
        width: 105, 
        height: 105, 
        borderRadius: 100,
        borderColor: '#faf7f7',
        borderWidth: 5,
        margin: 'auto' 
    },
    propDescImagem:{
        width: 110,
        height: 60,
        marginBottom: 50,
        alignSelf: 'center',
        borderColor: '#9ac5d8',
        position: 'absolute', 
        top: -60, 
        borderTopWidth:2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100
    },
    propDescText:{
        marginTop:50,
    },
    textPropDescText:{
        marginBottom:5,
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        backgroundColor: '#9ac5d8',
        borderRadius: 20,
        padding:5

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

        // ------------ HOME.TSX ----------------

    cabecalhoH:{
        flexDirection: 'row',
        width: '100%',
        
    },

    cabBusc:{
        marginHorizontal: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '80%'
    },

    buscarH:{
        borderWidth: 1,
        width: '70%',
        borderRadius: 20,
        borderColor: 'grey',
        height: 40,
        
        

    },

    cabEsq:{
        width: '10%',
        
    },

    cabDir:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '10%'
    },

    msg: {
        fontSize: 40,
        color: 'grey',
        
        
    },

    imagemPerfil: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
    },
    imagemView:{
        alignContent: "center",
        alignItems: "center"
    },

    lupaH:{
        fontSize: 40,
        color: 'grey',
      
    },

    botoesBarra:{
        flexDirection: 'row',
        marginTop: 40
    },

    botaoOfert:{
        width: '50%',
        borderWidth: 1,
        borderRadius: 10,
        height: 35,
        borderColor: 'grey'
    },

    botaoProp:{
        width: '50%',
        borderWidth: 1,
        borderRadius: 10,
        height: 35,
        borderColor: 'grey'
    },

    botaofoco:{
        width: '50%',
        borderWidth: 1,
        borderRadius: 10,
        height: 35,
        borderColor: '#9ac5d8',
        backgroundColor: '#9ac5d8'
    },


    textBotao:{
        textAlign: 'center',
        margin: 'auto',
        fontSize: 20,
        color: 'grey',
        fontWeight: 'bold'
    },
    textFoco:{
        textAlign: 'center',
        margin: 'auto',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },




         //----------------------------------------------

   
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


    mensagens: {
        width: '100%'
    },

   
    voltar: {
        fontSize: 30,
        color: 'grey',
        width: 45,
        
        
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

});