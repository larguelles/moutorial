import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  // variables

  var nombre = 'luis'
  let nombre2 = 'mou'
  const nombre3 = 'nombre'

  // tipos de variables

  let str = 'string';
  let num = 123;
  let bool = true;
  let und = undefined;
  let nll = null;
  

  // arrays

  // 0 1 2 3 4 
  let ryan = ['dante', 'mou', 'cata', 'tortu', 'pato?']
  let guitarrista = ryan[1]
  let bajista = ryan[2]

  // objects

 let ryanBanda = {
    guitarrista1: 'mou',
    guitarrista2: 'tortu',
    cantante: 'dante',
    bajista: 'cata',
    baterista: 'pato'
  }
  
  const onPress = () => {
    console.log(ryanBanda)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={onPress} style={{width: 200, height: 100, borderRadius: 10, backgroundColor: 'blue', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 18, alignSelf: 'center'}}>Prueba</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});