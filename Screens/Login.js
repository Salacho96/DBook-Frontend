import React, {Component} from 'react';
import {Platform,StyleSheet,Text,View,TextInput,Button,TouchableOpacity,LinearGradient,Alert} from 'react-native';
import {globalStylesLog} from '../styles/global_log'


export default function Login({navigation}){

    const pressHandler=() =>{
        navigation.navigate('Register1')
      }
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    const Separator = () => (
    <View style={styles.separator} />
  ); 

    return(
    <View style={globalStylesLog.container}>
      <Text style={globalStylesLog.txt0}>Login</Text>
      <Text style={globalStylesLog.txt1}>Bienvenido Usuario!</Text>
      <View style={globalStylesLog.content}>
        <View style={globalStylesLog.list}>
          <TextInput
          style={globalStylesLog.input0}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Ingrese su Correo"
          keyboardType="numeric"
          />
          <TextInput
          style={globalStylesLog.input1}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Ingrese su Contraseña"
          keyboardType="numeric"
          />
        <View >
      </View>
    </View>

  </View>
      
      <View style={globalStylesLog.Bcontainer}>
        <View style={globalStylesLog.buttonContainer}>
          <Button title={"Login"}/>
        </View>
        <View style={globalStylesLog.buttonContainer}>
          <Button title={"Register"} onPress={pressHandler}/>
        </View>
        </View>
        <View>
          <View style={globalStylesLog.fpaswd}>
            <Button title="Forgot your Password?"/>
          </View>
        </View>
    </View>
    );
}

//<Button title='Go To Details' onPress={pressHandler}/>