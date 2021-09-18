import React, {Component} from 'react';
import {TextInput,Content,Card,CardItem,Text,Body,Button,Item,Input,View,ScrollView,Pressable,picker} from 'react-native';
import {globalStylesReg1} from '../styles/global_reg1';
import {useState} from "react";
import SelectDropdown from 'react-native-select-dropdown';

export default function Register({navigation}){

    const pressHandler=() =>{
        navigation.navigate('Register2')
    }
    const [number,number0, onChangeNumber] = React.useState(null);
    const [pickerValue, setPickerValue] = useState('--Select')
    const DocType = ["T.I.", "C.C.", "P.A."]

    return(
    <View style={globalStylesReg1.container}>
      <View style={globalStylesReg1.header}>
      <Text style={globalStylesReg1.TextHeader}>Welcome user!</Text>
        <View>
        <Text style={globalStylesReg1.TextHeader2}>Personal Information:</Text>
        <Text style={globalStylesReg1.TextHeader2}>Part 1</Text>
        </View>
      </View>
      <View style={globalStylesReg1.footer}>

        <Text style={globalStylesReg1.TextFooter}>Name:</Text>
        <View>
          <TextInput placeholder="nombre" 
          style={globalStylesReg1.TextInput}
          onChangeText={onChangeNumber}
          value={number0}
          placeholder="Enter your Name"
          keyboardType="numeric"
          />

          <Text style={globalStylesReg1.TextFooter}>Last Name:</Text>
          <View>
            <TextInput placeholder="apellido" 
            style={globalStylesReg1.TextInput}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Enter your Last Name"
            keyboardType="numeric"
            />
          </View>

          <Text style={globalStylesReg1.TextFooter}>Email:</Text>
          <View>
            <TextInput placeholder="apellido" 
            style={globalStylesReg1.TextInput}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Enter your Email"
            keyboardType="numeric"
            />
          </View>

          <Text style={globalStylesReg1.TextFooter0}>Document Type:</Text>
          <View>
            <SelectDropdown
              data={DocType}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {

                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
            />

            <Text style={globalStylesReg1.TextFooter1}>Document Number:</Text>
              <View>
                <TextInput placeholder="apellido" 
                style={globalStylesReg1.TextInput}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Enter your Document Number"
                keyboardType="numeric"
                />
              </View>
          </View> 
        </View>
          <Pressable style={globalStylesReg1.buttonN}>
            <Text style={globalStylesReg1.buttonText} onPress={pressHandler}>Next</Text>
          </Pressable>
      </View>
    </View>
    );
}