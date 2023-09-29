import React, { useEffect, useState } from 'react'
import { getPersonagem } from './../../../pegar_dados'
import { Text, View, TextInput, Button, Image } from 'react-native'
import { estilo } from './style'

export function VerPersonagem({navigation}) {
    const [nome, setNome] = useState('')
    async function carregaPersonagem() {
        let personagens = await getPersonagem(nome)
        if (personagens != '') {
            navigation.navigate('Personagem', {personagem: personagens})
        }
    }
    return (
            <View style={estilo.container}>
                <View style={estilo.formulario}>
                    <Image  style={estilo.imagemE} source={require('./../../imagens/logo.jpg') } resizeMode="contain"/>
                    <TextInput placeholder='nome...' onChangeText={setNome} style={estilo.input}/>
                    <Button style={estilo.botao} title='Ver Personagem' onPress={carregaPersonagem} />
                </View>
            </View>
    )
}
