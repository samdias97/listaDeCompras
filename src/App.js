import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native'
import TelaInicial from './screens/index'

const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#CCC' />
      <SafeAreaView style={{flex: 1}}>
        <TelaInicial />
      </SafeAreaView>
    </>
  )
}

export default App;
