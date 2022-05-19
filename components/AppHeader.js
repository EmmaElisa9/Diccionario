import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){ 
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Diccionario</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    height:100,
    backgroundColor: 'green',
  },
  text:{
    color: 'white',
    padding: 30,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});