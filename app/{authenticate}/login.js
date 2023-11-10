import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput } from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons'
const login = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white', alignItems:'center'}}>
      <View>
        <Image
          style={{width: 150, height:100, resizeMode:"contain"}}
          source={{
            uri:"https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-25.png"
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize:17, fontWeight:'bold', marginTop:12, color:'#041E42'}}>Faça seu login</Text>
        </View>

        <View style={{marginTop:70}}>
          <View 
            style={{
              flexDirection:'row', alignItems:'center',
              gap:5, 
              backgroundColor:'#E0E0E0',
              paddingVertical:5,
              borderRadius:5,
              marginTop:30
            }}
          >
            <MaterialIcons style={{marginLeft:8}} name='email' size={24} 
            color='black'/>
            <TextInput style={{color:'gray', marginVertical:10, width:300}} placeholder='Insira seu e-mail' />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default login

const styles = StyleSheet.create({})