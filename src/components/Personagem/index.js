import React from 'react'
import { Text, View, Button, Image } from 'react-native'
import { estilo } from './style'

export function Personagem({navigation, route}) {
    const personagem = route.params.personagem
    const jutsu = personagem.jutsu
    return (
        <View style={estilo.container}>
            <View style={estilo.resultado}>
                <View style={estilo.resultado2}>
                    <Image  style={estilo.imagemE} source={{ uri: personagem.images[0], }} />
                    <Text>{personagem.name}</Text>
                    <Text>Jutsus</Text>
                    <View style={estilo.jutsus}>
                        {jutsu!=undefined?jutsu.map((jut) => { return <Text key={jut} style={estilo.texto}>{jut}</Text>}):<Text>Não possui Jutsus</Text>}
                    </View>
                </View>
                <Button title='Voltar' onPress={() => {navigation.goBack('Home')}
                }/>
            </View>
        </View>
    )
}
