import React,{ useState } from "react";
import { style } from "./styles"; 
import { Input } from "../components/Input"; 
import { Botao } from "../components/Botao"; 
import {Text, View,Image, Alert} from 'react-native'
import { useNavigation,NavigationProp  } from '@react-navigation/native';
import {MaterialIcons,Octicons} from '@expo/vector-icons';
 

export default function Login (){
    const navigation = useNavigation<NavigationProp<any>>();

    const [email,setEmail]               = useState('admin');
    const [password,setPassword]         = useState('adminS');
    const [showPassword,setShowPassword] = useState(true);
    const [loading,setLoading]           = useState(false);


    async function getLogin() {
        try {
            setLoading(true)
            
            if(!email ||!password){
                return Alert.alert('Anteção','Informe os campos obrigatórios!')
            }

            if(email === 'admin' && password === 'admin'){
                return navigation.reset({routes:[{name :'BottomRoutes'}]});
            }

            Alert.alert('Atenção','E-mail ou senha invalida!')
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }


    return(
        <View style={style.container}>
            <View style={style.boxTop}>
              
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Input 
                    title="ENDEREÇO E-MAIL"
                    value={email}
                    onChangeText={setEmail}
                    IconRigth={MaterialIcons}
                    iconRightName="email"
                    onIconRigthPress={()=>console.log('OLA')}
                />
                <Input 
                    title="SENHA"
                    value={password}
                    onChangeText={setPassword}
                    IconRigth={Octicons}
                    iconRightName={showPassword?"eye-closed":"eye"}
                    onIconRigthPress={()=>setShowPassword(!showPassword)}
                    secureTextEntry={true}
                    multiline={false}
                />
            </View>
            <View style={style.boxBottom}>
                <Botao  text="ENTRAR" loading={loading} onPress={()=>getLogin()}/>
            </View>
            <Text style={style.textBottom}>Não tem conta? <Text  style={style.textBottomCreate}>Crie agora</Text></Text>
        </View>
    )
}