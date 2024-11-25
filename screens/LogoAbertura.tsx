import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import estilo from '../estilo';

const LogoAbertura: React.FC = ({ navigation }: any) => {
  useEffect(() => {
    
    const timer = setTimeout(() => {
      navigation.replace('Login'); 
    }, 800);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={estilo.tela}>
      <Image
        source={require('../assets/Logo.png')} 
        style={estilo.logoAbertura}
      />
    </View>
  );
};


export default LogoAbertura;
