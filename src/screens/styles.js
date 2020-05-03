import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    backgroundColor: #FFF;
    justifyContent: center;
    alignItems: center;
    padding: 20px;
`;

export const Title = styled.Text`
    fontSize: 15px;
    margin: 20px;
`

export const Input = styled.TextInput`

    backgroundColor: #fff;
    width: 100%;
    margin-top: 20px;
    fontSize: 18px;
    padding-left: 10px
    border-radius: 5px;
    border: 1px solid #000
    margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
    background: green;
    width: 30%;
    height: 40px;
    align-self: flex-end;
    justifyContent: center;
    alignItems: center
    border-radius: 4px;
`;

export const ButtonText = styled.Text`
    fontSize: 18px;
    color: #fff;
`;