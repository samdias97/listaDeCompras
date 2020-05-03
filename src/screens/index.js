import React, {useState} from 'react';
import { Image, Alert } from 'react-native';
import { Container, Input, Button, ButtonText, Title } from './styles';

function TelaInicial() {
    const [name, setName] = useState('');
    
    function validateName() {
        if(!name) {
            Alert.alert('Aviso', 'Insira seu nome!')
        } else {
            Alert.alert('Aviso', 'Passou para a próxima tela!')
        }
    }

    return (
        <Container>
            <Title>Lista de Compras</Title>
            <Image
                source={{
                    uri: 'https://image.freepik.com/vetores-gratis/carrinho-de-compras-com-icones-de-comercio-eletronico_24877-50277.jpg',
                }}
                style={{
                    width: 300,
                    height: 300
                }}>
            </Image>
            <Input placeholder='Nome' value={name} onChangeText={setName} />
            <Button onPress={validateName} activeOpacity={0.5}>
                <ButtonText>Entrar</ButtonText>
            </Button>
        </Container>
    )
}

export default TelaInicial