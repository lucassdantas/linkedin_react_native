import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image, 
  KeyboardAvoidingView, 
  TextInput, 
  Pressable 
} from 'react-native'
import React, {useState} from 'react'
import {MaterialIcons} from '@expo/vector-icons'
import {AntDesign} from '@expo/vector-icons'
import { useRouter } from 'expo-router'


const login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const router = useRouter()
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

        <View style={{marginTop:40}}>
          <View 
            style={{
              flexDirection:'row', alignItems:'center',
              gap:5, 
              backgroundColor:'#E0E0E0',
              paddingVertical:5,
              borderRadius:5,
              marginTop:10
            }}
          >
            <MaterialIcons style={{marginLeft:8}} name='email' size={24} 
            color='gray'/>
            <TextInput
              value={email}
              onChangeText={text => setEmail(text)}
              secureTextEntry={true}
              style={{
                color:'gray', 
                marginVertical:10, 
                width:300,
                fontSize:email ? 18 : 18

              }} 
              placeholder='Insira seu e-mail' />
          </View>
        </View>

        <View style={{marginTop:10}}>
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
                <AntDesign style={{marginLeft:8}} name='lock1' 
                size={24} 
                color='gray'
              />
            <TextInput 
              value={password}
              onChangeText={text => setPassword(text)}
              style={{
                color:'gray', 
                marginVertical:10, 
                width:300,
                fontSize:password ? 18 : 18
              }} 
              placeholder='Insira sua senha' />
          </View>

          <View>
            <Text 
             
              style={{
                marginTop:12,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between'
              }}>
                Mantenha-me conectado
            </Text>

            <Text 
              style={{
                color:'#007fff',
                fontWeight:'500'
              }}
            >
              Esqueci minha senha
            </Text>
          </View>

          <View style={{marginTop:60}}>
            <Pressable 
              style={{
                width:200, 
                backgroundColor:"#0072b1", borderRadius:6, 
                marginLeft:'auto', 
                marginRight:"auto", 
                padding:15
              }}>
                <Text 
                  style={{
                    textAlign:'center',
                    color:"white", 
                    fontSize:16,
                    fontWeight:"bold"
                  }}
                >
                  Login
                </Text>
            </Pressable>
            
            <Pressable
              onPress={() => router.replace('/register')}
              style={{
                marginTop:15
              }}  
            >
              <Text
                style={{
                  textAlign:'center',
                  color:"gray",
                  fontSize:16
                }}
              >
                Não tem uma conta? cadastre-se
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default login

const styles = StyleSheet.create({})